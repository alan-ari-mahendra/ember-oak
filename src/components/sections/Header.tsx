"use client";

import { useCart } from "@/lib/cart-context";
import { navLinks } from "@/lib/data";
import FlameIcon from "@/components/icons/FlameIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import AccountIcon from "@/components/icons/AccountIcon";
import CartIcon from "@/components/icons/CartIcon";
import BurgerIcon from "@/components/icons/BurgerIcon";

type Props = {
  isProductPage?: boolean;
};

export default function Header({ isProductPage }: Props) {
  const { count } = useCart();
  const prefix = isProductPage ? "/" : "";

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .icon-btn {
              width: 44px;
              height: 44px;
              border-radius: 50%;
              display: grid;
              place-items: center;
              background: transparent;
              color: var(--color-bean);
              border: 1px solid transparent;
              transition: background .2s, border-color .2s;
              cursor: pointer;
              position: relative;
            }
            .icon-btn:hover {
              border-color: var(--color-line);
              background: var(--color-paper);
            }
            .cart-count {
              position: absolute;
              top: 4px;
              right: 2px;
              min-width: 18px;
              height: 18px;
              border-radius: 50%;
              background: var(--color-terra);
              color: #fff;
              font-size: 11px;
              font-weight: 600;
              display: flex;
              align-items: center;
              justify-content: center;
              line-height: 1;
              padding: 0 4px;
            }
            @media (max-width: 720px) {
              .hdr-links { display: none !important; }
              .hide-m { display: none !important; }
              .hdr-burger { display: grid !important; }
              .hdr-logo { font-size: 20px !important; }
              .hdr-logo-icon { width: 34px !important; height: 34px !important; }
            }
          `,
        }}
      />

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
                  background: "var(--color-terra)",
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
                    color: "var(--color-muted)",
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
