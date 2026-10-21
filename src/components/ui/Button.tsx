import type { ReactNode, CSSProperties, MouseEventHandler } from "react";
import "./Button.css";

type Props = {
  variant?: "terra" | "bean" | "line" | "line-l" | "cream";
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

type VariantStyle = {
  background: string;
  color: string;
  borderColor: string;
};

const variants: Record<string, VariantStyle> = {
  terra: {
    background: "var(--color-terra-ink)",
    color: "#fff",
    borderColor: "var(--color-terra-ink)",
  },
  bean: {
    background: "var(--color-bean)",
    color: "var(--color-cream)",
    borderColor: "var(--color-bean)",
  },
  line: {
    background: "transparent",
    color: "var(--color-bean)",
    borderColor: "var(--color-bean)",
  },
  "line-l": {
    background: "transparent",
    color: "var(--color-cream)",
    borderColor: "var(--color-cream)",
  },
  cream: {
    background: "var(--color-cream)",
    color: "var(--color-bean)",
    borderColor: "var(--color-cream)",
  },
};

export default function Button({
  variant = "terra",
  href,
  onClick,
  children,
  className,
  type = "button",
  ariaLabel,
}: Props) {
  const v = variants[variant];

  const baseStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    minHeight: 50,
    padding: "0 26px",
    borderRadius: 999,
    fontWeight: 600,
    fontSize: 15,
    border: "2px solid transparent",
    transition: "background .2s, color .2s, border-color .2s",
    cursor: "pointer",
    textDecoration: "none",
    background: v.background,
    color: v.color,
    borderColor: v.borderColor,
  };

  const cls = ["eo-btn-" + variant, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <a href={href} className={cls} style={baseStyle} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cls}
      style={baseStyle}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
