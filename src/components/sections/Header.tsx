"use client";

import { useCart } from "@/lib/cart-context";
import { navLinks } from "@/lib/data";
import FlameIcon from "@/components/icons/FlameIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import AccountIcon from "@/components/icons/AccountIcon";
import CartIcon from "@/components/icons/CartIcon";
import BurgerIcon from "@/components/icons/BurgerIcon";
import "./Header.css";

type Props = {
  isProductPage?: boolean;
};

export default function Header({ isProductPage }: Props) {
  const { count } = useCart();
  const prefix = isProductPage ? "/" : "";

  return (
    <>

      <header
        style={{
          background: "var(--color-cream)",
          borderBottom: "1px solid var(--color-line)",
          position: "sticky",
          top: 0,
          zIndex: 30,
        }}
      >
        <div className="wrap">
          <nav
            aria-label="Main"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              minHeight: 76,
            }}
          >
            {/* Logo */}
            <a
              href="/"
              className="hdr-logo"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--color-bean)",
                lineHeight: 1.1,
              }}
            >
              <i
                className="hdr-logo-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "var(--color-terra-ink)",
                  flexShrink: 0,
                }}
              >
                <FlameIcon
                  style={{ width: 20, height: 20, color: "#fff", stroke: "#fff" }}
                />
              </i>
              <span style={{ display: "flex", flexDirection: "column" }}>
                Ember &amp; Oak
                <small
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    fontFamily: "var(--font-body)",
                    color: "var(--color-muted-ink)",
                    marginTop: 1,
                  }}
                >
                  Coffee Roasters
                </small>
              </span>
            </a>

            {/* Nav links */}
            <div
              className="hdr-links"
              style={{
                display: "flex",
                gap: 30,
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={prefix + link.href}
                  style={{
                    color: "var(--color-bean)",
                    textDecoration: "none",
                    transition: "color .2s",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right icons */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button
                type="button"
                className="icon-btn hide-m"
                aria-label="Search"
              >
                <SearchIcon style={{ width: 22, height: 22 }} />
              </button>

              <button
                type="button"
                className="icon-btn hide-m"
                aria-label="Account"
              >
                <AccountIcon style={{ width: 22, height: 22 }} />
              </button>

              <button
                type="button"
                className="icon-btn"
                aria-label={`Cart, ${count} items`}
              >
                <CartIcon style={{ width: 22, height: 22 }} />
                {count > 0 && <span className="cart-count">{count}</span>}
              </button>

              <button
                type="button"
                className="icon-btn hdr-burger"
                aria-label="Menu"
                style={{ display: "none" }}
              >
                <BurgerIcon style={{ width: 22, height: 22 }} />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
