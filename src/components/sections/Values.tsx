import Eyebrow from "@/components/ui/Eyebrow";
import { valueCards } from "@/lib/data";

const iconPaths: Record<string, React.ReactNode> = {
  plant: (
    <>
      <path d="M12 3v18M5 10c0 4 3 7 7 7s7-3 7-7" />
      <path d="M8 6c1 2 2.5 3 4 3s3-1 4-3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  pencil: (
    <path d="M4 20l4-4M14 4l6 6-9 9H5v-6z" />
  ),
  leaf: (
    <>
      <path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11z" />
      <path d="M9 10c1 2 2 3 3 3s2-1 3-3" />
    </>
  ),
};

export default function Values() {
  return (
    <section
      className="values"
      style={{ paddingTop: 110, paddingBottom: 100 }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .val-grid {
              display: grid;
              grid-template-columns: 0.9fr 1.1fr;
              gap: 80px;
              align-items: center;
            }
            .vgrid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 18px;
            }
            @media (max-width: 1024px) {
              .val-grid { grid-template-columns: 1fr; }
            }
            @media (max-width: 720px) {
              .values { padding-top: 80px !important; padding-bottom: 80px !important; }
              .vgrid { grid-template-columns: 1fr; }
            }
          `,
        }}
      />

      <div className="wrap">
        <div className="val-grid">
          {/* Left */}
          <div>
            <Eyebrow>Why it matters</Eyebrow>
            <h2
              className="disp"
              style={{
                fontSize: "clamp(38px, 4.5vw, 56px)",
                margin: "20px 0 20px",
              }}
            >
              Good coffee is a chain of <em>small decisions.</em>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--color-bean-2)",
                maxWidth: 460,
              }}
            >
              From the farm gate to your cup, every step is a choice.
              We make the ones most roasters skip: paying more for better lots,
              scoring every batch, and shipping the same week we roast.
            </p>
          </div>

          {/* Right: value cards */}
          <div className="vgrid">
            {valueCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: "var(--color-paper)",
                  border: "1px solid var(--color-line)",
                  borderRadius: 18,
                  padding: "28px 26px",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "var(--color-cream-2)",
                    color: "var(--color-terra)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {iconPaths[card.icon]}
                  </svg>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontSize: 14.5,
                    color: "var(--color-bean-2)",
                    lineHeight: 1.55,
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
