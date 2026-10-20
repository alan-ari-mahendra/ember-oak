import type { ReactNode, CSSProperties, MouseEventHandler } from "react";

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
    background: "var(--color-terra)",
    color: "#fff",
    borderColor: "var(--color-terra)",
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

const hoverMap: Record<string, VariantStyle> = {
  terra: {
    background: "#B04A22",
    color: "#fff",
    borderColor: "#B04A22",
  },
  bean: {
    background: "#3D2A1E",
    color: "var(--color-cream)",
    borderColor: "#3D2A1E",
  },
  line: {
    background: "var(--color-bean)",
    color: "var(--color-cream)",
    borderColor: "var(--color-bean)",
  },
  "line-l": {
    background: "var(--color-cream)",
    color: "var(--color-bean)",
    borderColor: "var(--color-cream)",
  },
  cream: {
    background: "#fff",
    color: "var(--color-bean)",
    borderColor: "#fff",
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

  /* CSS custom properties for hover via inline style + onMouseEnter/Leave
     would require client state. Instead, inject a tiny <style> scoped by
     data attribute for the hover rule. */
  const hv = hoverMap[variant];
  const hoverCSS = `
    .eo-btn-${variant}:hover {
      background: ${hv.background} !important;
      color: ${hv.color} !important;
      border-color: ${hv.borderColor} !important;
    }
  `;

  const cls = ["eo-btn-" + variant, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: hoverCSS }} />
        <a href={href} className={cls} style={baseStyle} aria-label={ariaLabel}>
          {children}
        </a>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: hoverCSS }} />
      <button
        type={type}
        onClick={onClick}
        className={cls}
        style={baseStyle}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </>
  );
}
