import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const alt = "NONAME — Software Development & Digital Products";
export const contentType = "image/png";

export default async function OgImage() {
  const fontPath = path.join(
    process.cwd(),
    "node_modules/@expo-google-fonts/space-grotesk/600SemiBold/SpaceGrotesk_600SemiBold.ttf"
  );
  const font = readFileSync(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050506",
          padding: "64px 72px",
          fontFamily: "Space Grotesk",
          position: "relative",
        }}
      >
        {/* grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.5,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* glow */}
        <div
          style={{
            position: "absolute",
            width: 900,
            height: 480,
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(closest-side, rgba(200,255,61,0.10), transparent 72%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#c8ff3d", fontSize: 22, letterSpacing: 2 }}>
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: 99,
              background: "#c8ff3d",
              display: "flex",
            }}
          />
          independent software studio
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#f2f3ef",
              fontSize: 118,
              fontWeight: 600,
              letterSpacing: -4,
              lineHeight: 1.04,
            }}
          >
            NONAME
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              width: 210,
              height: 4,
              borderRadius: 99,
              background: "linear-gradient(90deg, #c8ff3d, rgba(200,255,61,0.1))",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "rgba(242,243,239,0.62)",
              fontSize: 30,
              letterSpacing: -0.6,
            }}
          >
            Software development &amp; digital products
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(242,243,239,0.4)",
            fontSize: 19,
            fontFamily: "monospace",
          }}
        >
          <span>web · software · AI · mobile · cloud</span>
          <span>mohammadasimsaad@gmail.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Space Grotesk", data: font, weight: 600 }],
    }
  );
}
