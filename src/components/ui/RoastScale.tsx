type Props = {
  level: number;
  label?: string;
};

export default function RoastScale({ level, label }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        alignItems: "center",
        fontSize: 12,
        color: "var(--color-muted-ink)",
      }}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            display: "inline-block",
            width: 14,
            height: 6,
            borderRadius: 3,
            background: i < level ? "var(--color-bean)" : "var(--color-line)",
          }}
        />
      ))}
      {label && <small style={{ marginLeft: 6 }}>{label}</small>}
    </div>
  );
}
