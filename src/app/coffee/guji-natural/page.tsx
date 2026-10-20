import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/sections/Header";
import FarmStory from "@/components/sections/FarmStory";
import BrewGuide from "@/components/sections/BrewGuide";
import PdpReviews from "@/components/sections/PdpReviews";
import RelatedProducts from "@/components/sections/RelatedProducts";
import Footer from "@/components/sections/Footer";
import CartToast from "@/components/ui/CartToast";
import PdpClient from "./PdpClient";

export const metadata: Metadata = {
  title: "Guji Natural, Ethiopia | Ember & Oak Coffee Roasters",
  description:
    "Ethiopia Guji Natural: blueberry, jasmine and cocoa. Light roast, 88.5 cupping score, roasted to order. Whole bean or ground, 340 g or 1 kg, subscribe and save 15%.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Guji Natural, Ethiopia",
  brand: { "@type": "Brand", name: "Ember & Oak Coffee Roasters" },
  description:
    "Natural-process single-origin from Guji, Ethiopia. Blueberry, jasmine, cocoa. Light roast.",
  sku: "EO-ETH-GUJI-26",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "16.15",
    highPrice: "48.00",
    availability: "https://schema.org/InStock",
  },
};

export default function GujiNaturalPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .pdp {
              padding: 30px 0 90px;
            }
            .pdp > .wrap {
              display: grid;
              grid-template-columns: 1.05fr 0.95fr;
              gap: 60px;
              align-items: start;
            }
            .breadcrumb {
              font-size: 13px;
              color: var(--color-muted);
              padding: 18px 0 0;
            }
            .breadcrumb a {
              color: var(--color-muted);
              text-decoration: none;
              transition: color .2s;
            }
            .breadcrumb a:hover {
              color: var(--color-bean);
            }
            .breadcrumb .sep {
              margin: 0 8px;
              opacity: .5;
            }
            .breadcrumb .current {
              color: var(--color-bean);
              font-weight: 500;
            }
            @media (max-width: 1024px) {
              .pdp > .wrap {
                grid-template-columns: 1fr;
                gap: 40px;
              }
            }
            @media (max-width: 720px) {
              .pdp-page-wrap {
                padding-bottom: 80px;
              }
            }
          `,
        }}
      />

      <div className="pdp-page-wrap">
        <AnnouncementBar />
        <Header isProductPage />

        <main>
          {/* Breadcrumb */}
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep" aria-hidden="true">/</span>
              <a href="/#shop">Coffee</a>
              <span className="sep" aria-hidden="true">/</span>
              <a href="/#shop">Ethiopia</a>
              <span className="sep" aria-hidden="true">/</span>
              <span className="current">Guji Natural</span>
            </nav>
          </div>

          {/* PDP hero — client wrapper for shared price state */}
          <PdpClient />

          {/* Server-rendered sections */}
          <FarmStory />
          <BrewGuide />
          <PdpReviews />
          <RelatedProducts />
        </main>

        <Footer />
        <CartToast />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
