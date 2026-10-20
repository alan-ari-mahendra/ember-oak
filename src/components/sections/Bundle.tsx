import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { bundleBags } from "@/lib/data";
import BundleAddButton from "./BundleAddButton";

const steps = [
  { num: 1, title: "Pick three bags", desc: "Mix origins, roasts, sizes — your call." },
  { num: 2, title: "We box them together", desc: "One shipment, less packaging, lower footprint." },
  { num: 3, title: "Save 10% instantly", desc: "Or subscribe and save 23% every delivery." },
];

export default function Bundle() {
  return (
    <section
      className="bundle"
      id="bundle"
      style={{ paddingTop: 110, paddingBottom: 110 }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .bundle-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 70px;
              align-items: center;
            }
            .bundle-visual {
              background: var(--color-bean);
              border-radius: 28px;
              padding: 40px;
              color: var(--color-cream);
            }
            .bundle-bags {
              display: flex;
              justify-content: center;
              gap: 14px;
              align-items: flex-end;
              margin-bottom: 30px;
            }
            .bundle-bag {
              width: 120px;
              aspect-ratio: 3 / 4.2;
              border-radius: 12px 12px 8px 8px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 3px;
              text-align: center;
              position: relative;
              overflow: hidden;
              padding: 8%;
            }
            .bundle-bag:nth-child(2) {
              transform: translateY(-16px) scale(1.08);
            }
            .eo-btn-bundle-add {
              width: 100% !important;
            }
            @media (max-width: 1024px) {
              .bundle-grid { grid-template-columns: 1fr; }
            }
            @media (max-width: 720px) {
              .bundle-visual { padding: 28px 22px; }
              .bundle-bag { width: 88px !important; }
            }
          `,
        }}
      />

      <div className="wrap">
        <div className="bundle-grid">
          {/* Left */}
          <div>
            <Eyebrow>Bundles</Eyebrow>
            <h2
              className="disp"
              style={{
                fontSize: "clamp(38px, 4.5vw, 56px)",
                margin: "20px 0 20px",
              }}
            >
              Three bags. <em>One box.</em> Ten percent off.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--color-bean-2)",
                maxWidth: 460,
                marginBottom: 36,
              }}
            >
              Build your own box of three bags. Mix any coffee, any size, any
              roast — and save 10% on the whole order. Subscribe to the same
              bundle and save 23%.
            </p>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 22, marginBottom: 36 }}>
              {steps.map((s) => (
                <div key={s.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "var(--color-terra)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <strong style={{ fontSize: 15, fontWeight: 600 }}>{s.title}</strong>
                    <small
                      style={{
                        display: "block",
                        fontSize: 14,
                        color: "var(--color-muted)",
                        marginTop: 2,
                      }}
                    >
                      {s.desc}
                    </small>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="line" href="#bundle">
              Explore bundles
            </Button>
          </div>

          {/* Right: visual */}
          <div className="bundle-visual">
            {/* Bags */}
            <div className="bundle-bags">
              {bundleBags.map((bag, i) => (
                <div
                  key={i}
                  className="bundle-bag"
                  style={{ background: bag.bg, color: "#2B1D14" }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      opacity: 0.7,
                      fontWeight: 600,
                    }}
                  >
                    {bag.origin}
                  </span>
                  <strong
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: 1.15,
                    }}
                  >
                    {bag.name}
                  </strong>
                </div>
              ))}
            </div>

            {/* Price box */}
            <div
              style={{
                background: "rgba(255,255,255,.08)",
                borderRadius: 16,
                padding: "20px 22px",
                marginBottom: 20,
              }}
            >
              {/* Row 1: save badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    background: "var(--color-mustard)",
                    color: "var(--color-bean)",
                    padding: "3px 10px",
                    borderRadius: 6,
                  }}
                >
                  Save 10%
                </span>
                <span
                  style={{
                    fontSize: 15,
                    textDecoration: "line-through",
                    opacity: 0.5,
                  }}
                >
                  $57.00
                </span>
              </div>

              {/* Row 2: bundle price */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 14, opacity: 0.7 }}>3-bag bundle</span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    fontWeight: 600,
                  }}
                >
                  $51.30
                </span>
              </div>

              {/* Row 3: subscribe price */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 10,
                  borderTop: "1px solid rgba(255,255,255,.1)",
                  fontSize: 14,
                  opacity: 0.7,
                }}
              >
                <span>Subscribe &amp; save 23%</span>
                <span style={{ fontWeight: 600 }}>$43.60</span>
              </div>
            </div>

            {/* CTA */}
            <BundleAddButton />
          </div>
        </div>
      </div>
    </section>
  );
}
