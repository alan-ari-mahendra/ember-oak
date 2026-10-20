"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import CheckIcon from "@/components/icons/CheckIcon";

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
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .sub-inner {
              background: var(--color-terra);
              border-radius: 32px;
              padding: 70px 64px;
              display: grid;
              grid-template-columns: 1.1fr 0.9fr;
              gap: 60px;
              position: relative;
              overflow: hidden;
              color: var(--color-cream);
            }
            .sub-inner .disp em { color: var(--color-mustard); }
            .sub-circle {
              position: absolute;
              right: -60px;
              bottom: -80px;
              width: 320px;
              height: 320px;
              border-radius: 50%;
              border: 40px solid rgba(255,255,255,.08);
              pointer-events: none;
            }
            .cadence-picker {
              background: rgba(255,255,255,.12);
              border: 1px solid rgba(255,255,255,.25);
              border-radius: 20px;
              padding: 28px;
              position: relative;
              z-index: 1;
            }
            .cadence-grid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 10px;
              margin: 20px 0 24px;
            }
            .cadence-option {
              position: relative;
              cursor: pointer;
            }
            .cadence-option input {
              position: absolute;
              opacity: 0;
              width: 0;
              height: 0;
            }
            .cadence-option .cadence-label {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 4px;
              padding: 16px 8px;
              border-radius: 12px;
              border: 1px solid rgba(255,255,255,.2);
              text-align: center;
              transition: background .2s, color .2s, border-color .2s;
              font-size: 14px;
              font-weight: 600;
            }
            .cadence-option .cadence-label small {
              font-size: 12px;
              font-weight: 400;
              opacity: .7;
            }
            .cadence-option input:checked + .cadence-label {
              background: var(--color-cream);
              color: var(--color-bean);
              border-color: var(--color-cream);
            }
            .cadence-option input:checked + .cadence-label small {
              color: var(--color-bean-2);
            }
            @media (max-width: 1024px) {
              .sub-inner {
                grid-template-columns: 1fr;
                padding: 50px 40px;
              }
            }
            @media (max-width: 720px) {
              .sub-inner {
                padding: 40px 24px;
                border-radius: 24px;
              }
              .cadence-picker { padding: 22px; }
              .cadence-option .cadence-label { font-size: 13px; padding: 12px 6px; }
            }
          `,
        }}
      />

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
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                opacity: 0.85,
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

            <Button variant="cream" href="#subscribe">
              Build my subscription
            </Button>
          </div>

          {/* Right: cadence picker */}
          <div className="cadence-picker">
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              How often?
            </h4>

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
                <span style={{ fontSize: 14, opacity: 0.7 }}>Per 340 g bag</span>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      textDecoration: "line-through",
                      opacity: 0.5,
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
              <p style={{ fontSize: 13, opacity: 0.6, textAlign: "right" }}>
                Next delivery: Oct 24
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
