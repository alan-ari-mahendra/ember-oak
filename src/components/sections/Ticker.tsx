import { tickerItems } from "@/lib/data";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div
      className="ticker"
      aria-hidden="true"
      style={{
        background: "var(--color-bean)",
        color: "var(--color-cream)",
        overflow: "hidden",
        padding: "14px 0",
      }}
    >
      <div
        className="ticker-track"
        style={{
          display: "flex",
          gap: 40,
          width: "max-content",
          animation: "ticker-scroll 40s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 40,
            }}
          >
            {item}
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--color-mustard)",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
