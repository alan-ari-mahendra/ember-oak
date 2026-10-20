type Props = {
  rating: number;
  ariaLabel?: string;
};

export default function Stars({ rating, ariaLabel }: Props) {
  const filled = Math.round(rating);
  const label = ariaLabel ?? `${rating} stars`;

  return (
    <span
      role="img"
      aria-label={label}
      style={{
        color: "var(--color-mustard)",
        letterSpacing: 2,
        fontSize: "inherit",
      }}
    >
      {Array.from({ length: 5 }, (_, i) => (i < filled ? "★" : "☆")).join("")}
    </span>
  );
}
