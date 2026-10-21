"use client";

import { useState, useCallback } from "react";
import PdpGallery from "@/components/sections/PdpGallery";
import PdpInfo from "@/components/sections/PdpInfo";
import PdpStickyBar from "@/components/sections/PdpStickyBar";
import type { GalleryPhoto } from "@/lib/types";

type Props = {
  galleryPhotos: GalleryPhoto[];
};

export default function PdpClient({ galleryPhotos }: Props) {
  const [price, setPrice] = useState(19 * 0.85); // default: 340g subscribe price

  const handlePriceChange = useCallback((newPrice: number) => {
    setPrice(newPrice);
  }, []);

  return (
    <>
      <section className="pdp">
        <div className="wrap">
          <PdpGallery photos={galleryPhotos} />
          <PdpInfo onPriceChange={handlePriceChange} />
        </div>
      </section>
      <PdpStickyBar price={price} />
    </>
  );
}
