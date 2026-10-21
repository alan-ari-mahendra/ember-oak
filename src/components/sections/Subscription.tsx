"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { productHref } from "@/lib/routes";
import CheckIcon from "@/components/icons/CheckIcon";
import "./Subscription.css";

const benefits = [
  "15% off every bag, every delivery",
  "Pause, skip or cancel anytime",
  "Free shipping on every order",
  "Early access to new harvests",
];

const cadences = [
  { value: "weekly", label: "Weekly", desc: "Heavy drinker" },
  { value: "biweekly", label: "Every 2 weeks", desc: "Most popular" },
  { value: "monthly", label: "Monthly", desc: "Light drinker" },
];

export default function Subscription() {
  const [selected, setSelected] = useState("biweekly");

  return (
    <section
      className="sub"
      id="subscribe"
      style={{ paddingTop: 110, paddingBottom: 110 }}
    >

      <div className="wrap">
        <div className="sub-inner">
          {/* Decorative circle */}
          <div className="sub-circle" aria-hidden="true" />

          {/* Left */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <Eyebrow variant="light">Subscribe &amp; save 15%</Eyebrow>

            <h2
              className="disp"
              style={{
                fontSize: "clamp(38px, 4.5vw, 56px)",
                margin: "20px 0 20px",
              }}
            >
              Never run out <em>again.</em>
            </h2>

            <p
              className="sub-soft"
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 440,
                marginBottom: 28,
              }}
            >
              Pick your coffee, choose a cadence, and we will roast and ship it
              fresh every time. Pause, skip or cancel whenever you like.
            </p>

            {/* Benefits */}
            <ul style={{ listStyle: "none", marginBottom: 32 }}>
              {benefits.map((b) => (
                <li
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontSize: 15,
                    marginBottom: 12,
                  }}
                >
                  <CheckIcon
                    style={{
                      width: 20,
                      height: 20,
                      color: "var(--color-mustard)",
                      flexShrink: 0,
                    }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            <Button variant="cream" href={productHref()}>
              Build my subscription
            </Button>
          </div>

          {/* Right: cadence picker */}
          <div className="cadence-picker">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              How often?
            </h3>

            <div className="cadence-grid">
              {cadences.map((c) => (
                <label key={c.value} className="cadence-option">
                  <input
                    type="radio"
                    name="cadence"
                    value={c.value}
                    checked={selected === c.value}
                    onChange={() => setSelected(c.value)}
                  />
                  <span className="cadence-label">
                    {c.label}
                    <small>{c.desc}</small>
                  </span>
                </label>
              ))}
            </div>

            {/* Total */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,.15)",
                paddingTop: 18,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 6,
                }}
              >
                <span className="sub-soft" style={{ fontSize: 14 }}>Per 340 g bag</span>
                <div style={{ textAlign: "right" }}>
                  <span
                    className="sub-soft"
                    style={{
                      textDecoration: "line-through",
                      fontSize: 14,
                      marginRight: 10,
                    }}
                  >
                    $19.00
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 26,
                      fontWeight: 600,
                    }}
                  >
                    $16.15
                  </span>
                </div>
              </div>
              <p className="sub-soft" style={{ fontSize: 13, textAlign: "right" }}>
                Next delivery: Oct 24
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
