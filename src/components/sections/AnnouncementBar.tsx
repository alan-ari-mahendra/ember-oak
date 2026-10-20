export default function AnnouncementBar() {
  return (
    <div
      className="announce"
      style={{
        background: "var(--color-bean)",
        color: "var(--color-cream)",
        textAlign: "center",
        fontSize: 13,
        padding: "9px 16px",
        letterSpacing: "0.04em",
      }}
    >
      Free US shipping on orders over $40 &middot;{" "}
      <b className="text-mustard font-semibold">
        Roasted Monday to Thursday, shipped within 48h
      </b>
    </div>
  );
}
