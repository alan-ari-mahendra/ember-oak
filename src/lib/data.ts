import type {
  Product,
  Review,
  BrewMethod,
  FaqItem,
  ValueCard,
  NavLink,
  FooterColumn,
  BundleBag,
  ReviewHistogramBar,
  FarmData,
  CoffeeDetail,
  StoreInfo,
} from "./types";

export const storeInfo: StoreInfo = {
  name: "Ember & Oak Coffee Roasters",
  tagline: "Coffee Roasters",
  address: "2214 SE Division St",
  city: "Portland",
  state: "OR",
  zip: "97202",
  country: "US",
  phone: "+1-503-555-0188",
  priceRange: "$$",
};

export const navLinks: NavLink[] = [
  { label: "Shop", href: "#shop" },
  { label: "Bundles", href: "#bundle" },
  { label: "Subscribe", href: "#subscribe" },
  { label: "Roastery", href: "#story" },
  { label: "Visit", href: "#cafe" },
];

export const products: Product[] = [
  {
    slug: "guji-natural",
    name: "Guji Natural",
    origin: "Ethiopia",
    notes: "Blueberry, jasmine, cocoa",
    roast: 1,
    roastLabel: "Light",
    variations: [
      { size: 340, sizeLabel: "340 g", price: 19, cups: 22 },
      { size: 1000, sizeLabel: "1 kg", price: 48, cups: 66 },
    ],
    tag: "New",
    tagStyle: "new",
    filterClasses: ["light"],
    image: "/images/guji-natural.jpg",
    subscription: { discountPercent: 15, cadenceOptions: [1, 2, 4] },
  },
  {
    slug: "huila-honey",
    name: "Huila Honey",
    origin: "Colombia",
    notes: "Red apple, caramel, florals",
    roast: 2,
    roastLabel: "Medium-light",
    variations: [
      { size: 340, sizeLabel: "340 g", price: 18, cups: 22 },
      { size: 1000, sizeLabel: "1 kg", price: 46, cups: 66 },
    ],
    tag: "",
    tagStyle: "",
    filterClasses: ["light"],
    image: "/images/huila-honey.jpg",
    subscription: { discountPercent: 15, cadenceOptions: [1, 2, 4] },
  },
  {
    slug: "hearth-blend",
    name: "Hearth Blend",
    origin: "Brazil · Guatemala",
    notes: "Milk chocolate, hazelnut, brown sugar",
    roast: 3,
    roastLabel: "Medium",
    variations: [
      { size: 340, sizeLabel: "340 g", price: 17, cups: 22 },
      { size: 1000, sizeLabel: "1 kg", price: 44, cups: 66 },
    ],
    tag: "Best seller",
    tagStyle: "default",
    filterClasses: ["medium", "blend"],
    image: "/images/hearth-blend.jpg",
    subscription: { discountPercent: 15, cadenceOptions: [1, 2, 4] },
  },
  {
    slug: "nyeri-aa",
    name: "Nyeri AA",
    origin: "Kenya",
    notes: "Blackcurrant, grapefruit, syrupy",
    roast: 2,
    roastLabel: "Medium-light",
    variations: [
      { size: 340, sizeLabel: "340 g", price: 21, cups: 22 },
      { size: 1000, sizeLabel: "1 kg", price: 52, cups: 66 },
    ],
    tag: "",
    tagStyle: "",
    filterClasses: ["light"],
    image: "/images/nyeri-aa.jpg",
    subscription: { discountPercent: 15, cadenceOptions: [1, 2, 4] },
  },
  {
    slug: "kochere-washed",
    name: "Kochere Washed",
    origin: "Ethiopia",
    notes: "Bergamot, peach, black tea",
    roast: 1,
    roastLabel: "Light",
    variations: [
      { size: 340, sizeLabel: "340 g", price: 19, cups: 22 },
      { size: 1000, sizeLabel: "1 kg", price: 48, cups: 66 },
    ],
    tag: "",
    tagStyle: "",
    filterClasses: ["light"],
    image: "/images/kochere-washed.jpg",
    subscription: { discountPercent: 15, cadenceOptions: [1, 2, 4] },
  },
  {
    slug: "midnight-espresso",
    name: "Midnight Espresso",
    origin: "Blend",
    notes: "Dark chocolate, molasses, dried fig",
    roast: 4,
    roastLabel: "Dark",
    variations: [
      { size: 340, sizeLabel: "340 g", price: 17, cups: 22 },
      { size: 1000, sizeLabel: "1 kg", price: 44, cups: 66 },
    ],
    tag: "",
    tagStyle: "",
    filterClasses: ["dark", "blend"],
    image: "/images/midnight-espresso.jpg",
    subscription: { discountPercent: 15, cadenceOptions: [1, 2, 4] },
  },
  {
    slug: "narino-decaf",
    name: "Nariño Decaf",
    origin: "Colombia · EA sugarcane",
    notes: "Toffee, orange, soft body",
    roast: 3,
    roastLabel: "Medium",
    variations: [
      { size: 340, sizeLabel: "340 g", price: 18, cups: 22 },
      { size: 1000, sizeLabel: "1 kg", price: 46, cups: 66 },
    ],
    tag: "Decaf",
    tagStyle: "default",
    filterClasses: ["medium", "decaf"],
    image: "/images/narino-decaf.jpg",
    subscription: { discountPercent: 15, cadenceOptions: [1, 2, 4] },
  },
  {
    slug: "la-esperanza",
    name: "La Esperanza",
    origin: "Guatemala",
    notes: "Baked apple, almond, cocoa nib",
    roast: 3,
    roastLabel: "Medium",
    variations: [
      { size: 340, sizeLabel: "340 g", price: 18, cups: 22 },
      { size: 1000, sizeLabel: "1 kg", price: 46, cups: 66 },
    ],
    tag: "",
    tagStyle: "",
    filterClasses: ["medium"],
    image: "/images/la-esperanza.jpg",
    subscription: { discountPercent: 15, cadenceOptions: [1, 2, 4] },
  },
];

export const gujiNatural: Product & {
  originFull: string;
  notesList: string[];
  noteColors: string[];
  sku: string;
  lot: string;
  process: string;
  altitude: string;
  variety: string;
  cuppingScore: number;
  description: string;
} = {
  ...products[0],
  originFull: "Ethiopia · Guji Zone · Natural process",
  notesList: ["Blueberry", "Jasmine", "Cocoa"],
  noteColors: ["#5B5F9B", "#E6C9D8", "#6B3E2E"],
  sku: "EO-ETH-GUJI-26",
  lot: "Lot 26-041",
  process: "Natural",
  altitude: "2,100 m",
  variety: "Heirloom",
  cuppingScore: 88.5,
  description:
    "A sun-dried natural from smallholder farms around Shakiso, at 2,100 m. Big blueberry up front, jasmine as it cools, and a cocoa finish that lasts. Roasted light to keep the fruit intact.",
};

export const relatedProducts: Product[] = [
  products[4], // Kochere Washed
  products[3], // Nyeri AA
  products[1], // Huila Honey
  products[2], // Hearth Blend
];

export const homeReviews: Review[] = [
  {
    author: "Lena P.",
    context: "Guji Natural, subscriber",
    quote:
      "“The Guji Natural is the first coffee that made my partner stop adding milk. We are on our fourth bag.”",
    rating: 5,
    verified: true,
  },
  {
    author: "Marcus D.",
    context: "Hearth Blend, 1 kg",
    quote:
      "“Roast date on the bag, shipped two days later. I have ordered from a lot of roasters and most do not manage that.”",
    rating: 5,
    verified: true,
    avatarColor: "var(--color-sage)",
  },
  {
    author: "Priya N.",
    context: "Office subscription",
    quote:
      "“Switched our office subscription here. Every two weeks, never late, and the decaf is actually good.”",
    rating: 5,
    verified: true,
    avatarColor: "var(--color-mustard)",
  },
];

export const pdpReviews: Review[] = [
  {
    author: "Jordan K.",
    context: "340 g, whole bean",
    title: "Blueberry is not a marketing word here",
    quote:
      "Brewed on a V60 at day 7 and the fruit is unmistakable. Clean, no ferment funk. Best natural I have had this year.",
    rating: 5,
    verified: true,
  },
  {
    author: "Sam R.",
    context: "1 kg, subscription",
    title: "Fourth bag on subscription",
    quote:
      "Arrives every two weeks like clockwork, roast date always within the week. The 1 kg bag is the better deal if you drink daily.",
    rating: 5,
    verified: true,
  },
  {
    author: "Elena M.",
    context: "340 g, espresso grind",
    title: "Great filter, tricky espresso",
    quote:
      "Took me a week of dialing in on espresso, but as pour over it is excellent. Follow their brew guide, it is accurate.",
    rating: 4,
    verified: true,
  },
];

export const pdpReviewSummary = {
  rating: 4.9,
  count: 312,
  histogram: [
    { stars: 5, count: 284, percent: 91 },
    { stars: 4, count: 22, percent: 7 },
    { stars: 3, count: 5, percent: 1.5 },
    { stars: 2, count: 1, percent: 0.3 },
    { stars: 1, count: 0, percent: 0 },
  ] as ReviewHistogramBar[],
};

export const brewGuide: BrewMethod[] = [
  {
    name: "V60 / pour over",
    params: [
      { label: "Dose", value: "15 g" },
      { label: "Water", value: "250 g" },
      { label: "Temp", value: "94 °C" },
      { label: "Time", value: "2:45 to 3:00" },
    ],
    tip: "Bloom 45 g for 40 seconds. Two more pours. Fruit shows best slightly cooler, so let it sit a minute.",
  },
  {
    name: "AeroPress",
    params: [
      { label: "Dose", value: "14 g" },
      { label: "Water", value: "200 g" },
      { label: "Temp", value: "90 °C" },
      { label: "Time", value: "1:45" },
    ],
    tip: "Inverted, stir 10 seconds, press slow. Dilute with 50 g water if you want it lighter.",
  },
  {
    name: "Espresso",
    params: [
      { label: "Dose", value: "18 g" },
      { label: "Yield", value: "42 g" },
      { label: "Temp", value: "93 °C" },
      { label: "Time", value: "30 to 34 s" },
    ],
    tip: "Light roast, so go finer and longer than usual. Rest the beans at least 10 days first.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "When do you roast?",
    answer:
      "We roast Monday to Thursday and ship within 48 hours of roasting, so your coffee arrives in its best window, usually 4 to 7 days after roast.",
  },
  {
    question: "How does the subscription work?",
    answer:
      "Pick a coffee or let us choose, set a cadence of every 1, 2 or 4 weeks, and save 15% on every bag. Pause, skip or cancel anytime from your account.",
  },
  {
    question: "Do you ship outside the US?",
    answer:
      "We currently ship to the US and Canada. Orders over $40 ship free within the US.",
  },
  {
    question: "Whole bean or ground?",
    answer:
      "Every bag is available whole bean or ground for espresso, filter, French press or AeroPress. Whole bean stays fresh longest.",
  },
];

export const valueCards: ValueCard[] = [
  {
    title: "Direct trade",
    description:
      "We buy from 11 farms across 5 countries and pay an average of 2.4x the commodity price.",
    icon: "plant",
  },
  {
    title: "Roasted to order",
    description:
      "Nothing sits on a shelf. Your bag is roasted after you order and ships within 48 hours.",
    icon: "clock",
  },
  {
    title: "Scored, not guessed",
    description:
      "Every lot is cupped and scored by our in-house Q Grader before it goes on the menu.",
    icon: "pencil",
  },
  {
    title: "Low-impact bags",
    description:
      "Compostable packaging and carbon-neutral shipping on every order, no upcharge.",
    icon: "leaf",
  },
];

export const tickerItems: string[] = [
  "Direct trade",
  "Roasted to order",
  "Carbon-neutral shipping",
  "Q Grader on staff",
  "Compostable bags",
  "Est. 2016",
];

export const bundleBags: BundleBag[] = [
  { name: "Guji Natural", image: "/images/guji-natural.jpg" },
  { name: "Huila Honey", image: "/images/huila-honey.jpg" },
  { name: "Hearth Blend", image: "/images/hearth-blend.jpg" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Shop",
    links: [
      { label: "All coffee", href: "/#shop" },
      { label: "Bundles", href: "/#bundle" },
      { label: "Subscriptions", href: "/#subscribe" },
      { label: "Brewing gear", href: "#" },
      { label: "Gift cards", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our roastery", href: "/#story" },
      { label: "Sourcing", href: "#" },
      { label: "Wholesale", href: "#" },
      { label: "Journal", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & returns", href: "#" },
      { label: "Track order", href: "#" },
      { label: "FAQ", href: "/#cafe" },
      { label: "Contact", href: "#" },
    ],
  },
];

export const paymentMethods = ["VISA", "MC", "AMEX", "APPLE PAY", "PAYPAL"];

export const farmData: FarmData = {
  stationName: "Buku Abel",
  region: "Shakiso",
  paragraphs: [
    "This lot comes from around 340 smallholder families farming heirloom varieties on plots of less than two hectares, delivered as cherry to the Buku Abel station.",
    "Cherries are floated, sorted and dried on raised beds for 18 days, turned every few hours. This is our fourth year buying from the station and the second year we have visited in person.",
  ],
  meta: [
    { label: "Farm gate price", value: "2.6x commodity" },
    { label: "Relationship", value: "4th harvest" },
    { label: "Importer", value: "Direct, via Addis" },
    { label: "Arrived Portland", value: "September 2026" },
  ],
};

export const coffeeDetails: CoffeeDetail[] = [
  {
    label: "Producer",
    value: "Shakiso smallholders via Buku Abel washing station",
  },
  { label: "Region", value: "Guji Zone, Oromia, Ethiopia" },
  { label: "Harvest", value: "December 2025 to January 2026" },
  { label: "Process", value: "Natural, 18 days on raised beds" },
  {
    label: "Roast profile",
    value: "Light, 9:40 total, first crack at 8:05",
  },
  { label: "Best from", value: "Day 5 to day 30 after roast" },
];
