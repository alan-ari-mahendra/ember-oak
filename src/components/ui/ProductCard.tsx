"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { productHref } from "@/lib/routes";
import BagVisual from "@/components/ui/BagVisual";
import RoastScale from "@/components/ui/RoastScale";
import PlusIcon from "@/components/icons/PlusIcon";
import { formatPrice } from "@/lib/format";

type Props = {
  product: Product;
  onAdd?: (name: string) => void;
};

export default function ProductCard({ product, onAdd }: Props) {
  const price = product.variations[0]?.price ?? 0;
  const href = productHref(product);

  return (
    <article className="pcard" style={cardStyle}>
      {/* Tag badge */}
      {product.tag && (
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 2,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 6,
            background:
              product.tagStyle === "new"
                ? "var(--color-mustard)"
                : "var(--color-bean)",
            color:
              product.tagStyle === "new"
                ? "var(--color-bean)"
                : "var(--color-cream)",
          }}
        >
          {product.tag}
        </span>
      )}

      {/* Image area */}
      <Link
        href={href}
        aria-label={product.name}
        style={{
          display: "block",
          position: "relative",
          aspectRatio: "1",
          borderRadius: 12,
          background: "var(--color-cream-2)",
          overflow: "hidden",
        }}
      >
        <BagVisual
          name={product.name}
          origin={product.origin}
          bg={product.bagBg}
          fg={product.bagFg}
          size="card"
          notesText={product.notes}
        />
      </Link>

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "var(--color-muted)",
          marginTop: 14,
          letterSpacing: "0.02em",
        }}
      >
        <span>{product.origin}</span>
        <span>340 g</span>
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          fontWeight: 600,
          lineHeight: 1.15,
          marginTop: 4,
          letterSpacing: "-0.01em",
        }}
      >
        <Link href={href}>{product.name}</Link>
      </h3>

      {/* Notes */}
      <p
        style={{
          fontSize: 14,
          color: "var(--color-bean-2)",
          marginTop: 4,
          lineHeight: 1.45,
        }}
      >
        {product.notes}
      </p>

      {/* Roast scale */}
      <div style={{ marginTop: 8 }}>
        <RoastScale level={product.roast} label={product.roastLabel} />
      </div>

      {/* Buy row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          {formatPrice(price)}
        </span>

        <button
          type="button"
          onClick={() => onAdd?.(product.name)}
          aria-label={`Add ${product.name} to cart`}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "var(--color-bean)",
            color: "var(--color-cream)",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background .2s",
            flexShrink: 0,
          }}
        >
          <PlusIcon style={{ width: 20, height: 20 }} />
        </button>
      </div>

      {/* Hover styles injected once */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .pcard {
              transition: transform .25s, box-shadow .25s;
            }
            .pcard:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 32px -8px rgba(43,29,20,.18);
            }
            .pcard:hover button[aria-label] {
              background: #3D2A1E;
            }
            @media (max-width: 720px) {
              .pcard h3 { font-size: 18px !important; }
              .pcard p  { font-size: 13px !important; }
              .pcard .buy-price { font-size: 19px !important; }
            }
          `,
        }}
      />
    </article>
  );
}

const cardStyle: React.CSSProperties = {
  position: "relative",
  padding: 0,
};
