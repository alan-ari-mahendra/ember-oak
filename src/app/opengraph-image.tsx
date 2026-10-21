import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors as c, ogSize } from "@/lib/og";

export const alt =
  "Ember & Oak Coffee Roasters: small-batch specialty coffee, roasted weekly in Portland";
export const size = ogSize;
export const contentType = "image/png";

const eyebrow = "ROASTED THIS WEEK IN PORTLAND, OR";
const headline = "Coffee that tastes like";
const headlineEm = "someone cared.";
const brand = "Ember & Oak";
const sub = "Small-batch specialty coffee. Free shipping over $40.";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: c.cream,
          padding: 72,
          position: "relative",
          fontFamily: "Work Sans",
          color: c.bean,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -80,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: c.terra2,
            opacity: 0.55,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: c.terra }}>
            {eyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Fraunces", lineHeight: 1 }}>
            <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -2 }}>{headline}</div>
            <div style={{ fontSize: 84, fontStyle: "italic", fontWeight: 400, color: c.terra, letterSpacing: -2 }}>
              {headlineEm}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: "Fraunces", fontSize: 40, fontWeight: 600, whiteSpace: "nowrap" }}>{brand}</div>
            <div style={{ fontSize: 22, color: c.bean2 }}>{sub}</div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 110,
            top: 120,
            width: 270,
            height: 380,
            borderRadius: 24,
            background: c.bean,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: c.cream,
            transform: "rotate(6deg)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Fraunces", fontSize: 44, fontWeight: 600, lineHeight: 1.05 }}>
            <div>Ember &amp;</div>
            <div>Oak</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [...fonts],
    },
  );
}
