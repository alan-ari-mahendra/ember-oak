import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "terra" | "mustard" | "light";
};

const variantColors: Record<string, { color: string; bar: string }> = {
  terra: { color: "var(--color-terra)", bar: "var(--color-terra)" },
  mustard: { color: "var(--color-mustard)", bar: "var(--color-mustard)" },
  light: { color: "#FFE2D1", bar: "#FFE2D1" },
};

export default function Eyebrow({ children, variant = "terra" }: Props) {
  const { color, bar } = variantColors[variant];

  return (
    <div
      className="eyebrow-label"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 12,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        fontWeight: 600,
        color,
      }}
    >
      <span
        aria-hidden
        style={{
          display: "inline-block",
          width: 22,
          height: 2,
          borderRadius: 2,
          background: bar,
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}
