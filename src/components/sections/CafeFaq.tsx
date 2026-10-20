import Eyebrow from "@/components/ui/Eyebrow";
import { faqItems } from "@/lib/data";

const cafeInfo = [
  { label: "Address", value: "2214 SE Division St\nPortland, OR 97202" },
  { label: "Hours", value: "Mon – Fri 7 am – 5 pm\nSat – Sun 8 am – 4 pm" },
  { label: "Cuppings", value: "Every Saturday, 10 am\nFree, no booking needed" },
];

export default function CafeFaq() {
  return (
    <section
      className="cafe"
      id="cafe"
      style={{ paddingTop: 110, paddingBottom: 110 }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .cafe-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 70px;
              align-items: flex-start;
            }
            .cafe-info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }
            details {
              border-bottom: 1px solid var(--color-line);
            }
            details summary {
              font-family: var(--font-display);
              font-size: 22px;
              font-weight: 600;
              display: flex;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;
              list-style: none;
              padding: 22px 0;
              gap: 16px;
            }
            details summary::-webkit-details-marker { display: none; }
            details summary::marker { display: none; }
            details summary .faq-icon {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              border: 1.5px solid var(--color-line);
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              font-size: 18px;
              line-height: 1;
              transition: background .2s, color .2s, border-color .2s;
              color: var(--color-bean);
            }
            details[open] summary .faq-icon {
              background: var(--color-bean);
              color: var(--color-cream);
              border-color: var(--color-bean);
            }
            details .faq-answer {
              padding: 0 50px 22px 0;
              color: var(--color-bean-2);
              font-size: 15.5px;
              line-height: 1.65;
            }
            @media (max-width: 1024px) {
              .cafe-grid { grid-template-columns: 1fr; }
            }
            @media (max-width: 720px) {
              details summary { font-size: 19px; }
              details .faq-answer { padding-right: 0; }
            }
          `,
        }}
      />

      <div className="wrap">
        <div className="cafe-grid">
          {/* Left: Cafe info */}
          <div>
            <Eyebrow>Visit us</Eyebrow>
            <h2
              className="disp"
              style={{
                fontSize: "clamp(38px, 4.5vw, 56px)",
                margin: "20px 0 30px",
              }}
            >
              Come taste it <em>at the source.</em>
            </h2>

            <div
              style={{
                background: "var(--color-paper)",
                border: "1px solid var(--color-line)",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <div className="ph" style={{ aspectRatio: "16 / 9" }}>
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Ember and Oak cafe counter"
                  loading="lazy"
                />
              </div>

              {/* Info body */}
              <div style={{ padding: 26 }}>
                <div className="cafe-info-grid">
                  {cafeInfo.map((item) => (
                    <div key={item.label}>
                      <h4
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                          color: "var(--color-muted)",
                          marginBottom: 6,
                        }}
                      >
                        {item.label}
                      </h4>
                      <p
                        style={{
                          fontSize: 14.5,
                          lineHeight: 1.55,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}

                  {/* Wholesale */}
                  <div>
                    <h4
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        color: "var(--color-muted)",
                        marginBottom: 6,
                      }}
                    >
                      Wholesale
                    </h4>
                    <p style={{ fontSize: 14.5, lineHeight: 1.55 }}>
                      <a
                        href="#"
                        style={{
                          textDecoration: "underline",
                          textUnderlineOffset: 3,
                        }}
                      >
                        Get in touch
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ */}
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2
              className="disp"
              style={{
                fontSize: "clamp(34px, 3.6vw, 48px)",
                margin: "20px 0 10px",
              }}
            >
              Before you order
            </h2>

            <div>
              {faqItems.map((item, i) => (
                <details key={i} open={i === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <span className="faq-icon">+</span>
                  </summary>
                  <div className="faq-answer">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
