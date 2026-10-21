import { footerColumns, paymentMethods } from "@/lib/data";
import FlameIcon from "@/components/icons/FlameIcon";
import NewsletterForm from "./FooterNewsletter";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bean)",
        color: "var(--color-cream)",
        padding: "80px 0 30px",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .fgrid {
              display: grid;
              grid-template-columns: 1.6fr 1fr 1fr 1fr;
              gap: 50px;
              padding-bottom: 50px;
              border-bottom: 1px solid rgba(255,255,255,.12);
            }
            .fbot {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-top: 28px;
              flex-wrap: wrap;
              gap: 20px;
            }
            .footer-link {
              color: rgba(255,255,255,.65);
              text-decoration: none;
              font-size: 14.5px;
              line-height: 2.1;
              transition: color .2s;
            }
            .footer-link:hover { color: var(--color-cream); }
            .social-btn {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 1px solid rgba(255,255,255,.2);
              background: transparent;
              color: var(--color-cream);
              display: grid;
              place-items: center;
              cursor: pointer;
              transition: background .2s, border-color .2s;
            }
            .social-btn:hover {
              background: rgba(255,255,255,.1);
              border-color: rgba(255,255,255,.35);
            }
            @media (max-width: 1024px) {
              .fgrid { grid-template-columns: 1fr 1fr; }
            }
            @media (max-width: 720px) {
              .fgrid { grid-template-columns: 1fr; gap: 34px; }
            }
          `,
        }}
      />

      <div className="wrap">
        {/* Main grid */}
        <div className="fgrid">
          {/* Newsletter column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FlameIcon
                  style={{ width: 18, height: 18, color: "#fff", stroke: "#fff" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                Ember &amp; Oak
              </span>
            </div>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.7,
                color: "rgba(255,255,255,.6)",
                maxWidth: 300,
                marginBottom: 22,
              }}
            >
              Small-batch specialty coffee roasted weekly in Portland, Oregon.
              Direct trade, scored by a Q Grader, shipped within 48 hours.
            </p>
            <NewsletterForm />
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: 16,
                  color: "rgba(255,255,255,.45)",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a className="footer-link" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
                {col.title === "Help" && (
                  <li
                    style={{
                      color: "rgba(255,255,255,.65)",
                      fontSize: 14.5,
                      lineHeight: 2.1,
                    }}
                  >
                    hello@emberandoak.coffee
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="fbot">
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,.4)",
            }}
          >
            &copy; 2026 Ember &amp; Oak Coffee Roasters. All rights reserved.
          </p>

          {/* Payment badges */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {paymentMethods.map((m) => (
              <span
                key={m}
                style={{
                  height: 26,
                  padding: "0 8px",
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,.2)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  display: "inline-flex",
                  alignItems: "center",
                  color: "rgba(255,255,255,.55)",
                }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 10 }}>
            <a href="#" className="social-btn" aria-label="Instagram">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="social-btn" aria-label="TikTok">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4c1 3 4 4 6 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
