import { NextResponse } from "next/server";
import type { ContactPayload } from "@/lib/types";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  submissionLog.set(ip, recent);
  // Keep the map from growing unbounded on a long-lived server.
  if (submissionLog.size > 1000) {
    for (const [key, times] of submissionLog) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        submissionLog.delete(key);
      }
    }
  }
  return false;
}

// Drop-in point for Firestore persistence before/after email forward.
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { email, subject, message, website } = body;

    // Honeypot: real users never fill this field. Pretend success so
    // bots don't learn they were caught.
    if (website) {
      return NextResponse.json({ success: true });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many messages — try again later" },
        { status: 429 }
      );
    }

    if (!email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        email,
        message,
      }),
    });

    const result = (await response.json()) as { success: boolean };

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
