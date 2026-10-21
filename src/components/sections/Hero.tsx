import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import BagVisual from "@/components/ui/BagVisual";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Ticker from "./Ticker";
import "./Hero.css";

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
                <div style={{ color: "var(--color-muted-ink)", fontSize: 12 }}>
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
                  color: "var(--color-terra-ink)",
                }}
              >
                88.5
              </div>
              <div style={{ color: "var(--color-muted-ink)", fontSize: 12, marginTop: 2 }}>
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
