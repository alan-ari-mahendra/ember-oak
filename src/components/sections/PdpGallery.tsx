"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryPhoto } from "@/lib/types";
import "./PdpGallery.css";

type Props = {
  photos: GalleryPhoto[];
};

export default function PdpGallery({ photos }: Props) {
  const [selected, setSelected] = useState(0);
  const current = photos[selected];

  return (
    <>

      <div className="gallery">
        {/* Main image */}
        <div className="gmain">
          <span className="gbadge">New harvest</span>
          {current.framed && <div className="gblob" aria-hidden="true" />}
          <div className={current.framed ? "gphoto gphoto-framed" : "gphoto"}>
            {current.available ? (
              <Image
                src={current.photo.src}
                alt={current.photo.alt}
                fill
                priority={selected === 0}
                sizes={current.framed ? "(max-width: 1024px) 60vw, 380px" : "(max-width: 1024px) 100vw, 600px"}
                style={{ objectFit: "cover", objectPosition: current.photo.position }}
              />
            ) : (
              current.photo.label
            )}
          </div>
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
          {photos.map((p, i) => (
            <button
              key={p.photo.src}
              type="button"
              className="gthumb"
              aria-pressed={selected === i}
              aria-label={p.photo.alt}
              onClick={() => setSelected(i)}
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
