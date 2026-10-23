import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/sections/Header";
import FarmStory from "@/components/sections/FarmStory";
import BrewGuide from "@/components/sections/BrewGuide";
import PdpReviews from "@/components/sections/PdpReviews";
import RelatedProducts from "@/components/sections/RelatedProducts";
import Footer from "@/components/sections/Footer";
import CartToast from "@/components/ui/CartToast";
import { photos } from "@/lib/images";
import { photoExists } from "@/lib/photo-exists";
import type { GalleryPhoto } from "@/lib/types";
import PdpClient from "./PdpClient";
import "./page.css";

const galleryPhotos: GalleryPhoto[] = [
  { thumbLabel: "Front", photo: photos.pdpBagFront, framed: true },
  { thumbLabel: "Back", photo: photos.pdpBagBack },
  { thumbLabel: "Beans", photo: photos.pdpBeans },
  { thumbLabel: "Cup", photo: photos.pdpCup },
  { thumbLabel: "Farm", photo: photos.pdpFarm },
].map((p) => ({ ...p, available: photoExists(p.photo.src) }));

const title = "Guji Natural, Ethiopia | Ember & Oak Coffee Roasters";
const description =
  "Ethiopia Guji Natural: blueberry, jasmine and cocoa. Light roast, 88.5 cupping score, roasted to order. Whole bean or ground, 340 g or 1 kg, subscribe and save 15%.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "Ember & Oak Coffee Roasters",
    locale: "en_US",
    url: "/coffee/guji-natural",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
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
          <PdpClient galleryPhotos={galleryPhotos} />

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
