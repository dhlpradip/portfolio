import { ImageResponse } from "next/og";
import { siteData } from "@/lib/data";

export const runtime = "edge";
export const alt = `${siteData.name} — Senior Frontend Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b0f1a 0%, #101828 55%, #0b1220 100%)",
          color: "#e8eaf0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontFamily: "monospace",
            color: "#8fb8dd",
            marginBottom: 28,
          }}
        >
          {"<Pradeep/>"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {siteData.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 26,
            color: "#9aa7ba",
          }}
        >
          Senior Frontend Developer · React · Next.js · TypeScript
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 90,
            fontSize: 26,
            fontFamily: "monospace",
            color: "#6d7a8f",
          }}
        >
          <span>erpradeepdahal.com.np</span>
          <span style={{ color: "#8fb8dd" }}>
            Passion · Positivity · Poetry
          </span>
        </div>
      </div>
    ),
    size
  );
}
