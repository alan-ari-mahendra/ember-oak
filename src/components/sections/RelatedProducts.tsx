"use client";

import { relatedProducts } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Eyebrow from "@/components/ui/Eyebrow";
import ProductCard from "@/components/ui/ProductCard";
import "./RelatedProducts.css";

export default function RelatedProducts() {
  const { addToCart } = useCart();

  return (
    <>

      <section className="related">
        <div className="wrap">
          <Eyebrow>You might also like</Eyebrow>
          <h2>
            More from <em>Ethiopia and beyond.</em>
          </h2>
          <div className="rel-grid">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} onAdd={addToCart} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
