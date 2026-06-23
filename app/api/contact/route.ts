import { NextResponse } from "next/server";
import type { ContactPayload } from "@/lib/types";

// Drop-in point for Firestore persistence before/after email forward.
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { email, subject, message } = body;

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
