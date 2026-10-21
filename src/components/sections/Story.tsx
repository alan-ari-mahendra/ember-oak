import Eyebrow from "@/components/ui/Eyebrow";
import Photo from "@/components/ui/Photo";
import { photos } from "@/lib/images";
import "./Story.css";

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

      <div className="wrap">
        <div className="story-grid">
          {/* Left: visual */}
          <div className="story-visual">
            <div className="story-img-main ph">
              <Photo
                photo={photos.roasteryDrum}
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="story-img-overlay ph">
              <Photo
                photo={photos.greenBeans}
                sizes="(max-width: 1024px) 40vw, 280px"
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
                      color: "var(--color-muted-ink)",
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
