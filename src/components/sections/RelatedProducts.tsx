"use client";

import { relatedProducts } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Eyebrow from "@/components/ui/Eyebrow";
import ProductCard from "@/components/ui/ProductCard";

export default function RelatedProducts() {
  const { addToCart } = useCart();

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .related {
              padding: 0 0 110px;
            }
            .related h2 {
              font-family: var(--font-display);
              font-size: clamp(34px, 3.8vw, 52px);
              font-weight: 600;
              line-height: 1;
              letter-spacing: -0.02em;
              margin: 14px 0 30px;
            }
            .related h2 em {
              font-style: italic;
              font-weight: 400;
              color: var(--color-terra);
            }
            .related .rel-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 24px;
            }
            @media (max-width: 1024px) {
              .related .rel-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 720px) {
              .related .rel-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
              }
            }
          `,
        }}
      />

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
