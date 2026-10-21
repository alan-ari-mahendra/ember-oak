"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEmail("");
      }}
      style={{
        display: "flex",
        gap: 8,
        maxWidth: 320,
      }}
    >
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email for newsletter"
        style={{
          flex: 1,
          minHeight: 44,
          padding: "0 16px",
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,.2)",
          background: "rgba(255,255,255,.08)",
          color: "var(--color-cream)",
          fontSize: 14,
        }}
      />
      <button
        type="submit"
        style={{
          minHeight: 44,
          padding: "0 20px",
          borderRadius: 999,
          background: "var(--color-terra-ink)",
          color: "#fff",
          border: "none",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          transition: "background .2s",
          whiteSpace: "nowrap",
        }}
      >
        Sign up
      </button>
    </form>
  );
}
