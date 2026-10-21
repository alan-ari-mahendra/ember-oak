"use client";

import { formatPrice } from "@/lib/format";
import "./PdpStickyBar.css";

type Props = {
  price: number;
};

export default function PdpStickyBar({ price }: Props) {
  return (
    <>

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
