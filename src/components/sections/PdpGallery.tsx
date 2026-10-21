"use client";

import { useState } from "react";
import Image from "next/image";
import BagVisual from "@/components/ui/BagVisual";
import FlameIcon from "@/components/icons/FlameIcon";
import type { GalleryPhoto } from "@/lib/types";

type Props = {
  photos: GalleryPhoto[];
};

export default function PdpGallery({ photos }: Props) {
  // 0 = CSS bag (front), 1..n = photos
  const [selected, setSelected] = useState(0);
  const current = selected > 0 ? photos[selected - 1] : null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .gallery {
              position: sticky;
              top: 100px;
            }
            .gmain {
              aspect-ratio: 1;
              border-radius: 24px;
              background: var(--color-cream-2);
              position: relative;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .gblob {
              position: absolute;
              width: 70%;
              height: 70%;
              background: var(--color-terra-2);
              border-radius: 42% 58% 62% 38% / 50% 40% 60% 50%;
              opacity: .55;
            }
            .gbadge {
              position: absolute;
              left: 20px;
              top: 20px;
              z-index: 2;
              background: var(--color-mustard);
              color: var(--color-bean);
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.06em;
              padding: 5px 12px;
              border-radius: 6px;
            }
            .gscore {
              position: absolute;
              right: 20px;
              bottom: 20px;
              z-index: 2;
              background: var(--color-paper);
              border: 1px solid var(--color-line);
              border-radius: 14px;
              padding: 12px 16px;
              display: flex;
              flex-direction: column;
              align-items: center;
              line-height: 1;
            }
            .gscore-val {
              font-family: var(--font-display);
              font-size: 28px;
              font-weight: 600;
            }
            .gscore-lbl {
              font-size: 11px;
              color: var(--color-muted);
              text-transform: uppercase;
              letter-spacing: 0.08em;
              margin-top: 2px;
            }
            .gthumbs {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 10px;
              margin-top: 12px;
            }
            .gphoto {
              position: absolute;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 11px;
              font-weight: 600;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: var(--color-muted);
            }
            .gthumb {
              position: relative;
              overflow: hidden;
              aspect-ratio: 1;
              border-radius: 12px;
              border: 2px solid transparent;
              background: var(--color-cream-2);
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 10px;
              font-weight: 600;
              letter-spacing: 0.06em;
              text-transform: uppercase;
              color: var(--color-muted);
              transition: border-color .2s;
            }
            .gthumb[aria-pressed="true"] {
              border-color: var(--color-bean);
            }
            @media (max-width: 1024px) {
              .gallery {
                position: static;
              }
            }
            @media (max-width: 720px) {
              .gmain .bag-gallery {
                width: 58% !important;
              }
              .gscore {
                right: 12px;
                bottom: 12px;
                padding: 8px 12px;
              }
              .gscore-val {
                font-size: 22px;
              }
              .gscore-lbl {
                font-size: 10px;
              }
              .gthumbs {
                gap: 6px;
              }
            }
          `,
        }}
      />

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
