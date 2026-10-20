"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { gujiNatural, coffeeDetails } from "@/lib/data";
import Stars from "@/components/ui/Stars";
import RoastScale from "@/components/ui/RoastScale";
import CheckIcon from "@/components/icons/CheckIcon";

type Props = {
  onPriceChange?: (price: number) => void;
};

const grindOptions = [
  { value: "whole", label: "Whole bean" },
  { value: "espresso", label: "Espresso" },
  { value: "filter", label: "Filter" },
  { value: "french", label: "French press" },
  { value: "aero", label: "AeroPress" },
];

export default function PdpInfo({ onPriceChange }: Props) {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<"340" | "1000">("340");
  const [grind, setGrind] = useState("whole");
  const [mode, setMode] = useState<"sub" | "once">("sub");
  const [cadence, setCadence] = useState<1 | 2 | 4>(2);
  const [qty, setQty] = useState(1);

  const basePrice = selectedSize === "340" ? 19 : 48;
  const isSubscribe = mode === "sub";
  const unitPrice = isSubscribe ? basePrice * 0.85 : basePrice;
  const totalPrice = unitPrice * qty;
  const sizeHint =
    selectedSize === "340" ? "340 g · about 22 cups" : "1 kg · about 66 cups";

  useEffect(() => {
    onPriceChange?.(totalPrice);
  }, [totalPrice, onPriceChange]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addToCart("Guji Natural");
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .info .seg-input {
              opacity: 0;
              position: absolute;
              width: 0;
              height: 0;
              pointer-events: none;
            }
            .info .seg-label {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 54px;
              border-radius: 12px;
              border: 1.5px solid var(--color-line);
              background: var(--color-paper);
              font-size: 14.5px;
              font-weight: 600;
              cursor: pointer;
              transition: background .2s, color .2s, border-color .2s;
              text-align: center;
              padding: 8px 6px;
              position: relative;
            }
            .info .seg-input:checked + .seg-label {
              background: var(--color-bean);
              color: var(--color-cream);
              border-color: var(--color-bean);
            }
            .info .seg-input:focus-visible + .seg-label {
              outline: 3px solid var(--color-terra);
              outline-offset: 2px;
            }
            .info .tasting-pill {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              padding: 6px 14px;
              border-radius: 999px;
              border: 1px solid var(--color-line);
              font-size: 13.5px;
              font-weight: 500;
              background: var(--color-paper);
            }
            .info .tasting-dot {
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              flex-shrink: 0;
            }
            .info .specs-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              border: 1px solid var(--color-line);
              border-radius: 14px;
              background: var(--color-paper);
              margin-bottom: 30px;
              overflow: hidden;
            }
            .info .spec-cell {
              padding: 16px 18px;
              font-size: 13px;
              border-right: 1px solid var(--color-line);
            }
            .info .spec-cell:last-child {
              border-right: none;
            }
            .info .spec-cell .spec-label {
              color: var(--color-muted);
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              margin-bottom: 6px;
            }
            .info .spec-cell .spec-value {
              font-weight: 600;
              font-size: 14px;
            }
            .info .size-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
              margin-bottom: 18px;
            }
            .info .grind-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 10px;
              margin-bottom: 24px;
            }
            .info .mode-container {
              border: 1.5px solid var(--color-line);
              border-radius: 16px;
              background: var(--color-paper);
              overflow: hidden;
              margin-bottom: 24px;
            }
            .info .mode-option {
              padding: 18px 20px;
              cursor: pointer;
              display: grid;
              grid-template-columns: 22px 1fr auto;
              gap: 0 14px;
              align-items: start;
              transition: background .15s;
            }
            .info .mode-option + .mode-option {
              border-top: 1px solid var(--color-line);
            }
            .info .mode-option.on {
              background: rgba(43,29,20,.03);
            }
            .info .mode-radio {
              width: 22px;
              height: 22px;
              border-radius: 50%;
              border: 2px solid var(--color-line);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 2px;
              transition: border-color .2s;
            }
            .info .mode-radio.checked {
              border-color: var(--color-terra);
            }
            .info .mode-radio.checked::after {
              content: '';
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: var(--color-terra);
            }
            .info .mode-input {
              opacity: 0;
              position: absolute;
              width: 0;
              height: 0;
              pointer-events: none;
            }
            .info .cadence-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 8px;
              padding: 0 20px 18px 52px;
              border-bottom: 1px solid var(--color-line);
            }
            .info .cadence-grid .seg-label {
              min-height: 44px;
              font-size: 13.5px;
            }
            .info .cta-row {
              display: flex;
              gap: 12px;
              align-items: center;
            }
            .info .qty-pill {
              display: flex;
              align-items: center;
              border: 1.5px solid var(--color-line);
              border-radius: 999px;
              overflow: hidden;
            }
            .info .qty-btn {
              width: 44px;
              height: 54px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: transparent;
              border: none;
              font-size: 20px;
              font-weight: 500;
              cursor: pointer;
              color: var(--color-bean);
              transition: background .15s;
            }
            .info .qty-btn:hover {
              background: var(--color-cream-2);
            }
            .info .qty-val {
              width: 36px;
              text-align: center;
              font-size: 16px;
              font-weight: 600;
            }
            .info .btn-terra {
              flex: 1;
              min-height: 54px;
              border-radius: 999px;
              background: var(--color-terra);
              color: #fff;
              border: 2px solid var(--color-terra);
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              transition: background .2s;
            }
            .info .btn-terra:hover {
              background: #B04A22;
              border-color: #B04A22;
            }
            .info .btn-terra .pr {
              opacity: .85;
              font-weight: 500;
            }
            .info .ship-row {
              display: flex;
              gap: 18px;
              flex-wrap: wrap;
              margin-top: 16px;
              font-size: 13px;
              color: var(--color-muted);
            }
            .info .ship-item {
              display: flex;
              align-items: center;
              gap: 6px;
            }
            .info details {
              border-top: 1px solid var(--color-line);
            }
            .info details:last-child {
              border-bottom: 1px solid var(--color-line);
            }
            .info summary {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 15.5px;
              font-weight: 600;
              min-height: 44px;
              cursor: pointer;
              padding: 12px 0;
              list-style: none;
            }
            .info summary::-webkit-details-marker { display: none; }
            .info summary .acc-icon {
              width: 26px;
              height: 26px;
              border-radius: 50%;
              border: 1.5px solid var(--color-bean);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              line-height: 1;
              font-weight: 400;
              color: var(--color-bean);
              flex-shrink: 0;
              transition: background .2s, color .2s;
            }
            .info details[open] summary .acc-icon {
              background: var(--color-bean);
              color: var(--color-cream);
            }
            .info .acc-body {
              padding: 0 0 18px;
              font-size: 14.5px;
              color: var(--color-bean-2);
              line-height: 1.65;
            }
            .info .detail-list {
              list-style: none;
            }
            .info .detail-list li {
              display: grid;
              grid-template-columns: 140px 1fr;
              gap: 10px;
              padding: 6px 0;
              font-size: 14.5px;
            }
            .info .detail-list li span:first-child {
              color: var(--color-muted);
            }
            .info .detail-list li span:last-child {
              font-weight: 500;
            }
            .info .best-badge {
              display: inline-block;
              background: var(--color-mustard);
              color: var(--color-bean);
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.04em;
              padding: 2px 8px;
              border-radius: 4px;
              margin-left: 8px;
              vertical-align: middle;
            }
            .info .strike {
              text-decoration: line-through;
              opacity: .5;
              margin-left: 6px;
              font-weight: 400;
            }
            @media (max-width: 720px) {
              .info .specs-grid {
                grid-template-columns: 1fr 1fr;
              }
              .info .spec-cell:nth-child(2) {
                border-right: none;
              }
              .info .spec-cell:nth-child(1),
              .info .spec-cell:nth-child(2) {
                border-bottom: 1px solid var(--color-line);
              }
              .info .grind-grid {
                grid-template-columns: repeat(3, 1fr);
              }
              .info .cadence-grid {
                padding-left: 18px;
              }
            }
          `,
        }}
      />

      <div className="info">
        {/* Origin line */}
        <p
          style={{
            fontSize: 13,
            textTransform: "uppercase",
            color: "var(--color-terra)",
            letterSpacing: "0.14em",
            fontWeight: 600,
          }}
        >
          {gujiNatural.originFull}
        </p>

        {/* Title */}
        <h1
          className="disp"
          style={{
            fontSize: "clamp(40px, 4.4vw, 60px)",
            margin: "10px 0 12px",
          }}
        >
          Guji <em>Natural</em>
        </h1>

        {/* Rating row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 14,
            color: "var(--color-muted)",
            flexWrap: "wrap",
          }}
        >
          <Stars rating={5} ariaLabel="Rated 4.9 out of 5 stars" />
          <b style={{ color: "var(--color-bean)" }}>4.9</b>
          <a
            href="#reviews"
            style={{
              textDecoration: "underline",
              textUnderlineOffset: 2,
              color: "var(--color-muted)",
            }}
          >
            312 reviews
          </a>
          <span aria-hidden="true">&middot;</span>
          <span>{gujiNatural.lot}</span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 16.5,
            color: "var(--color-bean-2)",
            margin: "22px 0 26px",
            maxWidth: 520,
            lineHeight: 1.6,
          }}
        >
          {gujiNatural.description}
        </p>

        {/* Tasting notes */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
          aria-label="Tasting notes"
        >
          {gujiNatural.notesList.map((note, i) => (
            <span key={note} className="tasting-pill">
              <span
                className="tasting-dot"
                style={{ background: gujiNatural.noteColors[i] }}
                aria-hidden="true"
              />
              {note}
            </span>
          ))}
        </div>

        {/* Specs grid */}
        <div className="specs-grid">
          <div className="spec-cell">
            <div className="spec-label">Roast</div>
            <div className="spec-value" style={{ marginBottom: 6 }}>
              {gujiNatural.roastLabel}
            </div>
            <RoastScale level={gujiNatural.roast} />
          </div>
          <div className="spec-cell">
            <div className="spec-label">Process</div>
            <div className="spec-value">{gujiNatural.process}</div>
          </div>
          <div className="spec-cell">
            <div className="spec-label">Altitude</div>
            <div className="spec-value">{gujiNatural.altitude}</div>
          </div>
          <div className="spec-cell">
            <div className="spec-label">Variety</div>
            <div className="spec-value">{gujiNatural.variety}</div>
          </div>
        </div>

        {/* Form */}
        <form id="pform" onSubmit={handleSubmit}>
          {/* Size selector */}
          <fieldset style={{ border: "none", marginBottom: 0 }}>
            <legend className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
              Bag size
            </legend>
            <div className="size-grid">
              <label>
                <input
                  className="seg-input"
                  type="radio"
                  name="size"
                  value="340"
                  checked={selectedSize === "340"}
                  onChange={() => setSelectedSize("340")}
                />
                <span className="seg-label">
                  <span>340 g</span>
                  <small style={{ fontSize: 13, opacity: 0.65, fontWeight: 400 }}>
                    {formatPrice(19)}
                  </small>
                </span>
              </label>
              <label>
                <input
                  className="seg-input"
                  type="radio"
                  name="size"
                  value="1000"
                  checked={selectedSize === "1000"}
                  onChange={() => setSelectedSize("1000")}
                />
                <span className="seg-label">
                  <span>1 kg</span>
                  <small style={{ fontSize: 13, opacity: 0.65, fontWeight: 400 }}>
                    {formatPrice(48)} &middot; save 16%
                  </small>
                </span>
              </label>
            </div>
          </fieldset>

          {/* Grind selector */}
          <fieldset style={{ border: "none", marginBottom: 0 }}>
            <legend className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
              Grind
            </legend>
            <div className="grind-grid">
              {grindOptions.map((g) => (
                <label key={g.value}>
                  <input
                    className="seg-input"
                    type="radio"
                    name="grind"
                    value={g.value}
                    checked={grind === g.value}
                    onChange={() => setGrind(g.value)}
                  />
                  <span className="seg-label">{g.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Purchase mode */}
          <div className="mode-container">
            {/* Subscribe option */}
            <label className={`mode-option${isSubscribe ? " on" : ""}`}>
              <input
                className="mode-input"
                type="radio"
                name="mode"
                value="sub"
                checked={isSubscribe}
                onChange={() => setMode("sub")}
              />
              <div className="mode-radio checked" style={isSubscribe ? {} : { borderColor: "var(--color-line)" }}>
                {isSubscribe && (
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "var(--color-terra)",
                      display: "block",
                    }}
                  />
                )}
              </div>
              <div>
                <span style={{ fontWeight: 600, fontSize: 15 }}>
                  Subscribe &amp; save 15%
                  <span className="best-badge">Best value</span>
                </span>
                <br />
                <small style={{ fontSize: 13, color: "var(--color-muted)" }}>
                  Free shipping, pause or cancel anytime
                </small>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontWeight: 600, fontSize: 15 }}>
                  {formatPrice(basePrice * 0.85)}
                </span>
                <span className="strike">{formatPrice(basePrice)}</span>
              </div>
            </label>

            {/* Cadence picker */}
            <fieldset style={{ border: "none", display: isSubscribe ? "block" : "none" }}>
              <legend className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
                Delivery cadence
              </legend>
              <div className="cadence-grid">
                {([
                  { val: 1 as const, label: "Weekly" },
                  { val: 2 as const, label: "Every 2 wks" },
                  { val: 4 as const, label: "Monthly" },
                ]).map((c) => (
                  <label key={c.val}>
                    <input
                      className="seg-input"
                      type="radio"
                      name="cad"
                      value={c.val}
                      checked={cadence === c.val}
                      onChange={() => setCadence(c.val)}
                    />
                    <span className="seg-label">{c.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* One-time option */}
            <label className={`mode-option${!isSubscribe ? " on" : ""}`}>
              <input
                className="mode-input"
                type="radio"
                name="mode"
                value="once"
                checked={!isSubscribe}
                onChange={() => setMode("once")}
              />
              <div className="mode-radio" style={!isSubscribe ? { borderColor: "var(--color-terra)" } : {}}>
                {!isSubscribe && (
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "var(--color-terra)",
                      display: "block",
                    }}
                  />
                )}
              </div>
              <div>
                <span style={{ fontWeight: 600, fontSize: 15 }}>One-time purchase</span>
                <br />
                <small style={{ fontSize: 13, color: "var(--color-muted)" }}>
                  Ships within 48h of roasting
                </small>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontWeight: 600, fontSize: 15 }}>
                  {formatPrice(basePrice)}
                </span>
              </div>
            </label>
          </div>

          {/* CTA row */}
          <div className="cta-row">
            <div className="qty-pill" aria-label="Quantity">
              <button
                type="button"
                className="qty-btn"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                &minus;
              </button>
              <output className="qty-val">{qty}</output>
              <button
                type="button"
                className="qty-btn"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button type="submit" className="btn-terra">
              Add to cart <span className="pr">{formatPrice(totalPrice)}</span>
            </button>
          </div>

          {/* Shipping info */}
          <div className="ship-row">
            <span className="ship-item">
              <CheckIcon style={{ width: 16, height: 16, color: "var(--color-sage)" }} />
              In stock, roasting Monday
            </span>
            <span className="ship-item">
              <CheckIcon style={{ width: 16, height: 16, color: "var(--color-sage)" }} />
              Free shipping over $40
            </span>
            <span className="ship-item">
              <CheckIcon style={{ width: 16, height: 16, color: "var(--color-sage)" }} />
              Compostable bag
            </span>
          </div>
        </form>

        {/* Accordion */}
        <div style={{ marginTop: 32 }}>
          <details open>
            <summary>
              Coffee details
              <span className="acc-icon">+</span>
            </summary>
            <div className="acc-body">
              <ul className="detail-list">
                {coffeeDetails.map((d) => (
                  <li key={d.label}>
                    <span>{d.label}</span>
                    <span>{d.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <details>
            <summary>
              Shipping &amp; freshness
              <span className="acc-icon">+</span>
            </summary>
            <div className="acc-body">
              <p>
                We roast Monday through Thursday and ship within 48 hours of roasting.
                Most US orders arrive 2-4 days after shipping. Orders over $40 ship free.
                Every bag is stamped with its roast date so you know exactly how fresh it is.
                For the best flavour, brew between day 5 and day 30 after roast.
              </p>
            </div>
          </details>

          <details>
            <summary>
              Subscription terms
              <span className="acc-icon">+</span>
            </summary>
            <div className="acc-body">
              <p>
                Subscribe and save 15% on every bag. Choose a delivery cadence of every 1, 2 or 4 weeks.
                You can pause, skip or cancel anytime from your account page, no questions asked.
                Subscriptions ship free regardless of order value.
                Your card is charged the day before each shipment.
              </p>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}
