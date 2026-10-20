"use client";

import { formatPrice } from "@/lib/format";

type Props = {
  price: number;
};

export default function PdpStickyBar({ price }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .stickybar {
              display: none;
            }
            @media (max-width: 720px) {
              .stickybar {
                display: flex;
                position: fixed;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 40;
                background: var(--color-paper);
                border-top: 1px solid var(--color-line);
                padding: 12px 20px;
                gap: 12px;
                align-items: center;
                box-shadow: 0 -10px 30px -20px rgba(43,29,20,.4);
              }
            }
            .stickybar .sb-price {
              font-family: var(--font-display);
              font-size: 22px;
              font-weight: 600;
            }
            .stickybar .sb-meta {
              font-size: 12px;
              color: var(--color-muted);
            }
            .stickybar .sb-btn {
              flex: 1;
              min-height: 48px;
              border-radius: 999px;
              background: var(--color-terra);
              color: #fff;
              border: 2px solid var(--color-terra);
              font-size: 15px;
              font-weight: 600;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              transition: background .2s;
            }
            .stickybar .sb-btn:hover {
              background: #B04A22;
              border-color: #B04A22;
            }
          `,
        }}
      />

      <div className="stickybar">
        <div>
          <b className="sb-price">{formatPrice(price)}</b>
          <br />
          <small className="sb-meta">Guji Natural &middot; 340 g</small>
        </div>
        <a href="#pform" className="sb-btn">
          Add to cart
        </a>
      </div>
    </>
  );
}
