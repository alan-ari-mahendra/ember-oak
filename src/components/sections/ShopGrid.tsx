"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

const filters = [
  { label: "All coffees", value: "all" },
  { label: "Light", value: "light" },
  { label: "Medium", value: "medium" },
  { label: "Dark", value: "dark" },
  { label: "Decaf", value: "decaf" },
  { label: "Blends", value: "blend" },
];

export default function ShopGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { addToCart } = useCart();

  return (
    <section
      className="shop"
      id="shop"
      style={{
        paddingTop: 100,
        paddingBottom: 110,
        background: "var(--color-paper)",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .sec-head {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              margin-bottom: 40px;
            }
            .pgrid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 18px;
            }
            .chip {
              min-height: 42px;
              padding: 0 18px;
              border-radius: 999px;
              border: 1px solid var(--color-line);
              background: var(--color-cream);
              font-size: 14px;
              font-weight: 500;
              color: var(--color-bean-2);
              cursor: pointer;
              transition: background .2s, color .2s, border-color .2s;
            }
            .chip[aria-pressed="true"] {
              background: var(--color-bean);
              color: var(--color-cream);
              border-color: var(--color-bean);
            }
            @media (max-width: 1024px) {
              .pgrid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 720px) {
              .pgrid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
              .sec-head {
                flex-direction: column;
                align-items: flex-start !important;
                gap: 14px;
                margin-bottom: 28px;
              }
            }
          `,
        }}
      />

      <div className="wrap">
        {/* Section header */}
        <div className="sec-head">
          <div>
            <Eyebrow>This week&apos;s roast</Eyebrow>
            <h2
              className="disp"
              style={{
                fontSize: "clamp(38px, 4.5vw, 56px)",
                marginTop: 20,
              }}
            >
              Fresh on the <em>menu.</em>
            </h2>
          </div>
          <p
            style={{
              maxWidth: 400,
              fontSize: 15,
              lineHeight: 1.65,
              color: "var(--color-bean-2)",
              textAlign: "right",
            }}
          >
            Eight coffees, rotating with the harvest. Every bag is roasted after
            you order and ships within 48 hours.
          </p>
        </div>

        {/* Filter chips */}
        <div
          role="group"
          aria-label="Filter by roast"
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              className="chip"
              aria-pressed={activeFilter === f.value}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="pgrid">
          {products.map((p) => {
            const visible =
              activeFilter === "all" || p.filterClasses.includes(activeFilter);
            return (
              <div key={p.slug} style={{ display: visible ? "" : "none" }}>
                <ProductCard product={p} onAdd={addToCart} />
              </div>
            );
          })}
        </div>

        {/* Footer link */}
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Button variant="line" href="/coffee/guji-natural">
            View all 14 coffees
          </Button>
        </div>
      </div>
    </section>
  );
}
