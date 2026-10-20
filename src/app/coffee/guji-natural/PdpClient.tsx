"use client";

import { useState, useCallback } from "react";
import PdpGallery from "@/components/sections/PdpGallery";
import PdpInfo from "@/components/sections/PdpInfo";
import PdpStickyBar from "@/components/sections/PdpStickyBar";

export default function PdpClient() {
  const [price, setPrice] = useState(19 * 0.85); // default: 340g subscribe price

  const handlePriceChange = useCallback((newPrice: number) => {
    setPrice(newPrice);
  }, []);

  return (
    <>
      <section className="pdp">
        <div className="wrap">
          <PdpGallery />
          <PdpInfo onPriceChange={handlePriceChange} />
        </div>
      </section>
      <PdpStickyBar price={price} />
    </>
  );
}
