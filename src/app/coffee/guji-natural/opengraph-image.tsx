import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors as c, ogSize } from "@/lib/og";

export const alt =
  "Guji Natural, Ethiopia by Ember & Oak: blueberry, jasmine, cocoa. Light roast, 4.9 stars, from $16.15";
export const size = ogSize;
export const contentType = "image/png";

const eyebrow = "ETHIOPIA · GUJI · NATURAL";
const title = "Guji Natural";
const notes = "Blueberry · Jasmine · Cocoa";
const meta = "88.5 cupping · 4.9 stars, 312 reviews";
const price = "From $16.15 on subscription";
const bagName = "Guji";
const bagNameEm = "Natural";
const brand = "Ember & Oak";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: c.cream,
          padding: 72,
          gap: 72,
          fontFamily: "Work Sans",
          color: c.bean,
        }}
      >
        <div
          style={{
            width: 440,
            height: 486,
            borderRadius: 32,
            background: c.cream2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 320,
              height: 320,
              borderRadius: 999,
              background: c.terra2,
              opacity: 0.55,
            }}
          />
          <div
            style={{
              width: 230,
              height: 330,
              borderRadius: 18,
              background: "#F2E8D5",
              border: `3px solid ${c.bean}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Fraunces",
              lineHeight: 1,
            }}
          >
            <div style={{ fontSize: 46, fontWeight: 600 }}>{bagName}</div>
            <div style={{ fontSize: 46, fontStyle: "italic", fontWeight: 400, color: c.terra }}>{bagNameEm}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 22 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: c.terra }}>{eyebrow}</div>
          <div style={{ fontFamily: "Fraunces", fontSize: 92, fontWeight: 600, letterSpacing: -2, lineHeight: 1 }}>
            {title}
          </div>
          <div style={{ fontFamily: "Fraunces", fontSize: 38, fontStyle: "italic", color: c.terra }}>{notes}</div>
          <div style={{ display: "flex", fontSize: 24, color: c.bean2 }}>{meta}</div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 10,
              padding: "14px 28px",
              borderRadius: 999,
              background: c.bean,
              color: c.cream,
              fontSize: 24,
            }}
          >
            {price}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: c.muted, marginTop: 6 }}>{brand}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [...fonts],
    },
  );
}
