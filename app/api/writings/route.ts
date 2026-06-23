import { NextResponse } from "next/server";
import { getWritings } from "@/lib/writings";

/**
 * GET /api/writings
 *
 * FUTURE: Auth-guard admin routes for create/update/delete.
 * For now returns published writings as JSON — same seam the client will use
 * once Firestore replaces static data in lib/writings.ts.
 */
export async function GET() {
  try {
    const writings = await getWritings();
    return NextResponse.json({ writings });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch writings" },
      { status: 500 }
    );
  }
}
