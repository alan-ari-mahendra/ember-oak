import { existsSync } from "node:fs";
import { join } from "node:path";

// Server only. Lets a photo slot fall back to its placeholder label
// until the generated file is dropped into public/images.
export function photoExists(src: string): boolean {
  return existsSync(join(process.cwd(), "public", src));
}
