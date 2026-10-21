import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Values from "@/components/sections/Values";
import ShopGrid from "@/components/sections/ShopGrid";
import Bundle from "@/components/sections/Bundle";
import Subscription from "@/components/sections/Subscription";
import Story from "@/components/sections/Story";
import Reviews from "@/components/sections/Reviews";
import CafeFaq from "@/components/sections/CafeFaq";
import Footer from "@/components/sections/Footer";
import CartToast from "@/components/ui/CartToast";

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Ember & Oak Coffee Roasters",
  description:
    "Small-batch specialty coffee roasted weekly in Portland, Oregon. Direct trade, scored by a Q Grader, shipped within 48 hours.",
  url: "https://www.emberandoak.coffee",
  telephone: "+1-503-555-0188",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2214 SE Division St",
    addressLocality: "Portland",
    addressRegion: "OR",
    postalCode: "97202",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.5048,
    longitude: -122.6424,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2100",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When do you roast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We roast Monday to Thursday and ship within 48 hours of roasting, so your coffee arrives in its best window, usually 4 to 7 days after roast.",
      },
    },
    {
      "@type": "Question",
      name: "How does the subscription work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pick a coffee or let us choose, set a cadence of every 1, 2 or 4 weeks, and save 15% on every bag. Pause, skip or cancel anytime from your account.",
      },
    },
    {
      "@type": "Question",
      name: "Do you ship outside the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We currently ship to the US and Canada. Orders over $40 ship free within the US.",
      },
    },
    {
      "@type": "Question",
      name: "Whole bean or ground?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every bag is available whole bean or ground for espresso, filter, French press or AeroPress. Whole bean stays fresh longest.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Values />
        <ShopGrid />
        <Bundle />
        <Subscription />
        <Story />
        <Reviews />
        <CafeFaq />
      </main>
      <Footer />
      <CartToast />
    </>
  );
}
