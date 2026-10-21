import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import BagVisual from "@/components/ui/BagVisual";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hero-grid {
              display: grid;
              grid-template-columns: 1.05fr 0.95fr;
              gap: 60px;
              align-items: center;
            }
            .hero-visual {
              position: relative;
              height: 620px;
            }
            .hero-blob {
              position: absolute;
              width: 84%;
              height: 84%;
              top: 8%;
              left: 8%;
              background: var(--color-terra-2);
              border-radius: 44% 56% 65% 35% / 57% 38% 62% 43%;
              opacity: .55;
            }
            .hero-sticker {
              position: absolute;
              top: 20px;
              right: 10px;
              width: 110px;
              height: 110px;
              border-radius: 50%;
              background: var(--color-mustard);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              transform: rotate(8deg);
              z-index: 3;
              padding: 8px;
            }
            .hero-sticker span:first-child {
              font-size: 9px;
              letter-spacing: 0.14em;
              text-transform: uppercase;
              font-weight: 600;
              opacity: .7;
            }
            .hero-sticker span:last-child {
              font-family: var(--font-display);
              font-size: 15px;
              font-weight: 600;
              line-height: 1.15;
              margin-top: 2px;
            }
            .hero-float {
              position: absolute;
              background: var(--color-paper);
              border-radius: 14px;
              padding: 14px 18px;
              box-shadow: 0 8px 30px -8px rgba(43,29,20,.18);
              z-index: 4;
              font-size: 13px;
              line-height: 1.4;
            }
            .hero-float-a {
              left: -10px;
              top: 70px;
              display: flex;
              gap: 12px;
              align-items: center;
            }
            .hero-float-b {
              right: -6px;
              bottom: 90px;
              text-align: center;
            }
            .hero-beans-a, .hero-beans-b {
              position: absolute;
              z-index: 2;
            }
            .hero-beans-a { left: 12px; bottom: 40px; }
            .hero-beans-b { right: 22px; top: 42px; }
            .hero-bean-dot {
              display: block;
              width: 10px;
              height: 14px;
              background: var(--color-bean);
              border-radius: 50%;
              opacity: .15;
            }

            .trust-row {
              display: flex;
              align-items: center;
              gap: 26px;
              margin-top: 44px;
              padding-top: 26px;
              border-top: 1px solid var(--color-line);
              font-size: 14px;
              color: var(--color-muted);
              flex-wrap: wrap;
            }

            @media (max-width: 1024px) {
              .hero-grid {
                grid-template-columns: 1fr;
                text-align: center;
              }
              .hero-visual {
                width: 100%;
                max-width: 520px;
                margin: 0 auto;
              }
              .hero-left { display: flex; flex-direction: column; align-items: center; }
              .hero-left p { text-align: center; }
              .trust-row { justify-content: center; }
            }
            @media (max-width: 720px) {
              .hero { padding-top: 50px !important; }
              .hero-grid h1 { font-size: 54px !important; }
              .hero-left .lead { font-size: 16px !important; }
              .hero-ctas { flex-direction: column; width: 100%; }
              .hero-ctas a, .hero-ctas button { width: 100%; }
              .hero-visual { height: 440px; }
              .hero-sticker { width: 90px; height: 90px; }
              .hero-sticker span:last-child { font-size: 13px; }
              .hero-float { padding: 10px 14px; font-size: 12px; }
              .hero-float-a { left: 0; top: 50px; }
              .hero-float-b { right: 0; bottom: 60px; }
            }
          `,
        }}
      />

      <div className="wrap">
        <div className="hero-grid">
          {/* Left column */}
          <div className="hero-left">
            <Eyebrow>Roasted this week in Portland, OR</Eyebrow>

            <h1
              className="disp"
              style={{
                fontSize: "clamp(52px, 6.6vw, 96px)",
                margin: "22px 0 24px",
              }}
            >
              Coffee that tastes like <em>someone cared.</em>
            </h1>

            <p
              className="lead"
              style={{
                fontSize: 18,
                color: "var(--color-bean-2)",
                maxWidth: 480,
                marginBottom: 34,
                lineHeight: 1.65,
              }}
            >
              Single-origin and blended coffees roasted in small batches every
              week in Portland, Oregon. Always fresh, always scored, always
              shipped within 48 hours of roasting.
            </p>

            <div
              className="hero-ctas"
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <Button variant="terra" href="#shop">
                Shop fresh roasts
                <ArrowRightIcon style={{ width: 18, height: 18 }} />
              </Button>
              <Button variant="line" href="#subscribe">
                Start a subscription
              </Button>
            </div>

            <div className="trust-row">
              <span>
                <span
                  style={{
                    color: "var(--color-mustard)",
                    letterSpacing: 2,
                    marginRight: 6,
                  }}
                >
                  ★★★★★
                </span>
                4.9 from 2,100+ reviews
              </span>
              <span>Free shipping over $40</span>
              <span>Roasted to order</span>
            </div>
          </div>

          {/* Right column: visual */}
          <div className="hero-visual">
            {/* Blob */}
            <div className="hero-blob" aria-hidden="true" />

            {/* Coffee bean decorations */}
            <div className="hero-beans-a" aria-hidden="true">
              <span className="hero-bean-dot" style={{ transform: "rotate(-20deg)" }} />
              <span
                className="hero-bean-dot"
                style={{ transform: "rotate(15deg)", marginTop: 8, marginLeft: 6 }}
              />
            </div>
            <div className="hero-beans-b" aria-hidden="true">
              <span className="hero-bean-dot" style={{ transform: "rotate(25deg)" }} />
              <span
                className="hero-bean-dot"
                style={{ transform: "rotate(-10deg)", marginTop: 6, marginLeft: -4 }}
              />
            </div>

            {/* Sticker */}
            <div className="hero-sticker" aria-hidden="true">
              <span>New harvest</span>
              <span>Ethiopia 2026</span>
            </div>

            {/* Bag */}
            <BagVisual
              name={"Guji\nNatural"}
              origin="Ethiopia"
              bg="#F2E8D5"
              fg="#2B1D14"
              size="hero"
              ariaLabel="Bag of Ember and Oak Guji Natural coffee"
              showRing
              notesText="Blueberry · Jasmine · Cocoa"
              lotText="Lot 26-041 · 340 g"
            />

            {/* Float card A */}
            <div className="hero-float hero-float-a">
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--color-sage)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>Roasted Oct 17</div>
                <div style={{ color: "var(--color-muted)", fontSize: 12 }}>
                  Ships tomorrow
                </div>
              </div>
            </div>

            {/* Float card B */}
            <div className="hero-float hero-float-b">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 600,
                  lineHeight: 1,
                  color: "var(--color-terra)",
                }}
              >
                88.5
              </div>
              <div style={{ color: "var(--color-muted)", fontSize: 12, marginTop: 2 }}>
                Cupping score
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker at bottom of hero */}
      <div style={{ marginTop: 70 }}>
        <Ticker />
      </div>
    </section>
  );
}
