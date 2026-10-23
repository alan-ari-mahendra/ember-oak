"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { productHref } from "@/lib/routes";
import RoastScale from "@/components/ui/RoastScale";
import PlusIcon from "@/components/icons/PlusIcon";
import { formatPrice } from "@/lib/format";
import "./ProductCard.css";

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
      {/* Duplicate of the name link below: keep it out of the tab order and the
          a11y tree so screen readers hear each product once. */}
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        style={{
          display: "block",
          position: "relative",
          aspectRatio: "4 / 5",
          borderRadius: 12,
          background: "var(--color-cream-2)",
          overflow: "hidden",
        }}
      >
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(max-width: 720px) 50vw, (max-width: 1024px) 33vw, 300px"
          style={{ objectFit: "cover" }}
        />
      </Link>

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "var(--color-muted-ink)",
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
    </article>
  );
}

const cardStyle: React.CSSProperties = {
  position: "relative",
  padding: 0,
};
