import FlameIcon from "@/components/icons/FlameIcon";
import type { CSSProperties } from "react";

type Props = {
  name: string;
  origin: string;
  bg: string;
  fg: string;
  size?: "hero" | "gallery" | "card" | "bundle";
  className?: string;
  notesText?: string;
  lotText?: string;
  showRing?: boolean;
  ariaLabel?: string;
};

type SizeConfig = {
  width: string;
  borderRadius: string;
  nameFontSize: string;
  gap: number;
  ringSize?: number;
  shadow: string;
  position: "absolute" | "static";
  originFontSize: number;
  notesFontSize: number;
  lotVisible: boolean;
  topStripHeight: string;
};

const sizeConfigs: Record<string, SizeConfig> = {
  card: {
    width: "58%",
    borderRadius: "10px 10px 8px 8px",
    nameFontSize: "clamp(16px, 1.6vw, 22px)",
    gap: 4,
    shadow: "0 16px 30px -16px rgba(43,29,20,.5)",
    position: "absolute",
    originFontSize: 10,
    notesFontSize: 9,
    lotVisible: false,
    topStripHeight: "13%",
  },
  hero: {
    width: "46%",
    borderRadius: "16px 16px 12px 12px",
    nameFontSize: "clamp(22px, 2.4vw, 34px)",
    gap: 6,
    ringSize: 64,
    shadow: "0 24px 48px -16px rgba(43,29,20,.55)",
    position: "absolute",
    originFontSize: 11,
    notesFontSize: 10,
    lotVisible: true,
    topStripHeight: "14%",
  },
  gallery: {
    width: "42%",
    borderRadius: "16px 16px 12px 12px",
    nameFontSize: "clamp(22px, 2.4vw, 30px)",
    gap: 6,
    ringSize: 56,
    shadow: "0 24px 48px -16px rgba(43,29,20,.55)",
    position: "absolute",
    originFontSize: 11,
    notesFontSize: 10,
    lotVisible: false,
    topStripHeight: "14%",
  },
  bundle: {
    width: "120px",
    borderRadius: "12px 12px 8px 8px",
    nameFontSize: "16px",
    gap: 3,
    shadow: "0 12px 24px -12px rgba(43,29,20,.4)",
    position: "static",
    originFontSize: 9,
    notesFontSize: 8,
    lotVisible: false,
    topStripHeight: "13%",
  },
};

export default function BagVisual({
  name,
  origin,
  bg,
  fg,
  size = "card",
  className,
  notesText,
  lotText,
  showRing,
  ariaLabel,
}: Props) {
  const cfg = sizeConfigs[size];

  const outerStyle: CSSProperties = {
    width: cfg.width,
    aspectRatio: "3 / 4.2",
    borderRadius: cfg.borderRadius,
    background: bg,
    color: fg,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: cfg.gap,
    position: cfg.position === "absolute" ? "absolute" : "static",
    ...(cfg.position === "absolute"
      ? { left: "50%", top: "50%", transform: "translate(-50%, -50%)" }
      : {}),
    boxShadow: cfg.shadow,
    overflow: "hidden",
    padding: "12% 8% 8%",
    textAlign: "center",
  };

  const topStripStyle: CSSProperties = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: cfg.topStripHeight,
    background: "rgba(0,0,0,.08)",
    borderRadius: cfg.borderRadius.split(" ").slice(0, 2).join(" ") + " 0 0",
    pointerEvents: "none",
  };

  const ringSize = cfg.ringSize ?? 0;
  const showRingElement = showRing && ringSize > 0;

  return (
    <div
      className={className}
      {...(ariaLabel ? { role: "img", "aria-label": ariaLabel } : {})}
      style={{ ...outerStyle, position: "relative", ...(cfg.position === "absolute" ? { position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" } : {}) }}>
      {/* Top strip overlay */}
      <div aria-hidden style={topStripStyle} />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: cfg.gap,
          width: "100%",
        }}
      >
        {showRingElement && (
          <div
            style={{
              width: ringSize,
              height: ringSize,
              borderRadius: "50%",
              border: "2px solid var(--color-terra)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            <FlameIcon
              style={{
                width: ringSize * 0.45,
                height: ringSize * 0.45,
                color: "var(--color-terra)",
              }}
            />
          </div>
        )}

        <span
          style={{
            fontSize: cfg.originFontSize,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.95,
            fontWeight: 600,
          }}
        >
          {origin}
        </span>

        <strong
          style={{
            fontFamily: "var(--font-display)",
            fontSize: cfg.nameFontSize,
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {name}
        </strong>

        {notesText && (
          <span
            style={{
              fontSize: cfg.notesFontSize,
              opacity: 0.95,
              fontWeight: 500,
            }}
          >
            {notesText}
          </span>
        )}

        {cfg.lotVisible && lotText && (
          <span
            style={{
              fontSize: 9,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.95,
              marginTop: 2,
            }}
          >
            {lotText}
          </span>
        )}
      </div>
    </div>
  );
}
