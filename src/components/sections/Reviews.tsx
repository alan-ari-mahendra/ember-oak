import { homeReviews } from "@/lib/data";
import Eyebrow from "@/components/ui/Eyebrow";
import Stars from "@/components/ui/Stars";

export default function Reviews() {
  return (
    <section
      className="reviews"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        background: "var(--color-cream-2)",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .rev-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 22px;
              margin-top: 44px;
            }
            @media (max-width: 1024px) {
              .rev-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 720px) {
              .rev-grid { grid-template-columns: 1fr; }
            }
          `,
        }}
      />

      <div className="wrap">
        {/* Section header */}
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
          <Eyebrow>What people say</Eyebrow>
          <h2
            className="disp"
            style={{
              fontSize: "clamp(38px, 4.5vw, 56px)",
              marginTop: 20,
            }}
          >
            Don&apos;t take our word <em>for it.</em>
          </h2>
        </div>

        {/* Review cards */}
        <div className="rev-grid">
          {homeReviews.map((rev, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-line)",
                borderRadius: 18,
                padding: 28,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: 16, marginBottom: 14 }}>
                <Stars rating={rev.rating} />
              </div>

              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1.35,
                  flex: 1,
                  marginBottom: 22,
                }}
              >
                {rev.quote}
              </blockquote>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 18,
                  borderTop: "1px solid var(--color-line)",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: rev.avatarColor || "var(--color-terra-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {rev.author.charAt(0)}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>
                    {rev.author}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-muted)" }}>
                    {rev.context}
                  </div>
                </div>

                {rev.verified && (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--color-sage)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
