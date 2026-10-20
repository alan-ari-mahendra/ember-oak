import Eyebrow from "@/components/ui/Eyebrow";

const stats = [
  { value: "11", label: "Partner farms" },
  { value: "2.4x", label: "Above commodity price" },
  { value: "88+", label: "Average cupping score" },
];

export default function Story() {
  return (
    <section
      className="story"
      id="story"
      style={{ paddingTop: 0, paddingBottom: 110 }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .story-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 70px;
              align-items: center;
            }
            .story-visual {
              position: relative;
            }
            .story-img-main {
              aspect-ratio: 4 / 5;
              border-radius: 28px;
              overflow: hidden;
            }
            .story-img-overlay {
              position: absolute;
              right: -40px;
              bottom: -40px;
              width: 46%;
              aspect-ratio: 1;
              border-radius: 20px;
              border: 8px solid var(--color-cream);
              overflow: hidden;
            }
            .story-stats {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              border-top: 1px solid var(--color-line);
              margin-top: 36px;
              padding-top: 28px;
              gap: 20px;
            }
            @media (max-width: 1024px) {
              .story-grid { grid-template-columns: 1fr; }
            }
            @media (max-width: 720px) {
              .story { padding-bottom: 80px !important; }
              .story-img-overlay {
                right: -16px;
                bottom: -24px;
                width: 40%;
                border-width: 5px;
              }
              .story-stats b { font-size: 30px !important; }
            }
          `,
        }}
      />

      <div className="wrap">
        <div className="story-grid">
          {/* Left: visual */}
          <div className="story-visual">
            <div className="story-img-main ph">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
                alt="Roaster checking beans at the drum roaster"
                loading="lazy"
              />
            </div>
            <div className="story-img-overlay ph">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
                alt="Green coffee beans in a sack"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: text */}
          <div>
            <Eyebrow>Our roastery</Eyebrow>
            <h2
              className="disp"
              style={{
                fontSize: "clamp(38px, 4.5vw, 56px)",
                margin: "20px 0 20px",
              }}
            >
              Ten years, one <em>Probat,</em> a lot of notebooks.
            </h2>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--color-bean-2)",
                marginBottom: 16,
              }}
            >
              Ember &amp; Oak started in 2016 with one drum roaster and a six-bag
              menu. Ten years later, we still roast on the same Probat, in the
              same building on Division Street, and every lot still gets cupped
              by our in-house Q Grader before it goes on the site.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--color-bean-2)",
              }}
            >
              We buy from 11 farms across five countries, pay an average of 2.4
              times the commodity price, and ship every bag within 48 hours of
              roasting. No warehouse, no shelf stock — just coffee roasted for the
              person who ordered it.
            </p>

            {/* Stats */}
            <div className="story-stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <b
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 38,
                      fontWeight: 600,
                      display: "block",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.value}
                  </b>
                  <small
                    style={{
                      fontSize: 13,
                      color: "var(--color-muted)",
                    }}
                  >
                    {s.label}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
