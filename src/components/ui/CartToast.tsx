"use client";

import { useCart } from "@/lib/cart-context";
import CheckIcon from "@/components/icons/CheckIcon";
import "./CartToast.css";

export default function CartToast() {
  const { toastName, toastVisible } = useCart();

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "var(--color-bean)",
        color: "var(--color-cream)",
        padding: "16px 20px",
        borderRadius: 14,
        boxShadow: "0 8px 32px -8px rgba(43,29,20,.45)",
        transform: toastVisible ? "translateY(0)" : "translateY(120%)",
        opacity: toastVisible ? 1 : 0,
        visibility: toastVisible ? "visible" : "hidden",
        transition: "transform .3s, opacity .3s, visibility .3s",
        pointerEvents: toastVisible ? "auto" : "none",
        maxWidth: 380,
      }}
    >
      <CheckIcon
        style={{
          width: 22,
          height: 22,
          color: "var(--color-mustard)",
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: 14, fontWeight: 500, flex: 1 }}>
        {toastName}
      </span>
      <a
        href="#cart"
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "var(--color-mustard)",
          textDecoration: "underline",
          textUnderlineOffset: 2,
          whiteSpace: "nowrap",
        }}
      >
        View cart
      </a>

    </div>
  );
}
