import type { Product } from "./types";

// Only Guji Natural has a product page in this phase, so every card points there
// (same as the prototype). Switch to `/coffee/${product.slug}` once each product has a page.
export function productHref(_product?: Product): string {
  return "/coffee/guji-natural";
}
