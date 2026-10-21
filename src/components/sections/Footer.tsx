import { footerColumns, paymentMethods } from "@/lib/data";
import FlameIcon from "@/components/icons/FlameIcon";
import NewsletterForm from "./FooterNewsletter";
import "./Footer.css";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bean)",
        color: "var(--color-cream)",
        padding: "80px 0 30px",
      }}
    >

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
              <h3
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: 16,
                  color: "rgba(255,255,255,.62)",
                }}
              >
                {col.title}
              </h3>
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
              color: "rgba(255,255,255,.62)",
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
                  color: "rgba(255,255,255,.62)",
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
