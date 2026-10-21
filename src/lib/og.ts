import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

export const ogColors = {
  cream: "#F6F1E7",
  cream2: "#EEE6D6",
  bean: "#2B1D14",
  bean2: "#4A382B",
  muted: "#8A7A6B",
  terra: "#C8572A",
  terra2: "#E8A58A",
  mustard: "#D9A531",
};

// Satori needs TTF/OTF, so the OG images read static instances (OFL, from Google Fonts)
// from disk instead of next/font.
const fontDir = join(process.cwd(), "src/assets/fonts");

export async function loadOgFonts() {
  const [display, displayItalic, body] = await Promise.all([
    readFile(join(fontDir, "Fraunces-SemiBold.ttf")),
    readFile(join(fontDir, "Fraunces-Italic.ttf")),
    readFile(join(fontDir, "WorkSans-Medium.ttf")),
  ]);

  return [
    { name: "Fraunces", data: display, weight: 600, style: "normal" },
    { name: "Fraunces", data: displayItalic, weight: 400, style: "italic" },
    { name: "Work Sans", data: body, weight: 500, style: "normal" },
  ] as const;
}
