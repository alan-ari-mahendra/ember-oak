"use client";

import { useState } from "react";
import Image from "next/image";
import BagVisual from "@/components/ui/BagVisual";
import FlameIcon from "@/components/icons/FlameIcon";
import type { GalleryPhoto } from "@/lib/types";
import "./PdpGallery.css";

type Props = {
  photos: GalleryPhoto[];
};

export default function PdpGallery({ photos }: Props) {
  // 0 = CSS bag (front), 1..n = photos
  const [selected, setSelected] = useState(0);
  const current = selected > 0 ? photos[selected - 1] : null;

  return (
    <>

      <div className="gallery">
        {/* Main image */}
        <div className="gmain">
          <span className="gbadge">New harvest</span>
          {current ? (
            <div className="gphoto">
              {current.available ? (
                <Image
                  src={current.photo.src}
                  alt={current.photo.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  style={{ objectFit: "cover", objectPosition: current.photo.position }}
                />
              ) : (
                current.photo.label
              )}
            </div>
          ) : (
            <>
              <div className="gblob" aria-hidden="true" />
              <BagVisual
                name={"Guji\nNatural"}
                origin="Ethiopia"
                bg="#F2E8D5"
                fg="#2B1D14"
                size="gallery"
                className="bag-gallery"
                showRing
                notesText="Blueberry · Jasmine · Cocoa"
                lotText="Lot 26-041 · 340 g"
              />
            </>
          )}
          <div className="gscore">
            <span className="gscore-val">88.5</span>
            <span className="gscore-lbl">Cupping</span>
          </div>
        </div>

        {/* Thumbnails */}
        <div
          className="gthumbs"
          role="group"
          aria-label="Product images"
        >
          <button
            type="button"
            className="gthumb"
            aria-pressed={selected === 0}
            onClick={() => setSelected(0)}
          >
            Bag (front)
          </button>
          {photos.map((p, i) => (
            <button
              key={p.photo.src}
              type="button"
              className="gthumb"
              aria-pressed={selected === i + 1}
              aria-label={p.photo.alt}
              onClick={() => setSelected(i + 1)}
            >
              {p.available ? (
                <Image
                  src={p.photo.src}
                  alt=""
                  fill
                  sizes="110px"
                  style={{ objectFit: "cover", objectPosition: p.photo.position }}
                />
              ) : (
                p.thumbLabel
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
