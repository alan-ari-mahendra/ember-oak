"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { gujiNatural, coffeeDetails } from "@/lib/data";
import Stars from "@/components/ui/Stars";
import RoastScale from "@/components/ui/RoastScale";
import CheckIcon from "@/components/icons/CheckIcon";
import "./PdpInfo.css";

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

      <div className="info">
        {/* Origin line */}
        <p
          style={{
            fontSize: 13,
            textTransform: "uppercase",
            color: "var(--color-terra-ink)",
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
            color: "var(--color-muted-ink)",
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
              color: "var(--color-muted-ink)",
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
                      background: "var(--color-terra-ink)",
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
                <small style={{ fontSize: 13, color: "var(--color-muted-ink)" }}>
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
                      background: "var(--color-terra-ink)",
                      display: "block",
                    }}
                  />
                )}
              </div>
              <div>
                <span style={{ fontWeight: 600, fontSize: 15 }}>One-time purchase</span>
                <br />
                <small style={{ fontSize: 13, color: "var(--color-muted-ink)" }}>
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
