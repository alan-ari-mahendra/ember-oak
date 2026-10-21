export type RoastLevel = 1 | 2 | 3 | 4;
export type RoastLabel = "Light" | "Medium-light" | "Medium" | "Dark";
export type GrindOption = "whole" | "espresso" | "filter" | "french" | "aero";
export type Cadence = 1 | 2 | 4;

export type ProductVariation = {
  size: number;
  sizeLabel: string;
  price: number;
  cups: number;
};

export type Product = {
  slug: string;
  name: string;
  origin: string;
  originFull?: string;
  notes: string;
  notesList?: string[];
  noteColors?: string[];
  roast: RoastLevel;
  roastLabel: RoastLabel;
  variations: ProductVariation[];
  tag: string;
  tagStyle: "new" | "default" | "";
  filterClasses: string[];
  bagBg: string;
  bagFg: string;
  sku?: string;
  lot?: string;
  process?: string;
  altitude?: string;
  variety?: string;
  cuppingScore?: number;
  description?: string;
  subscription: {
    discountPercent: number;
    cadenceOptions: Cadence[];
  };
};

export type Review = {
  author: string;
  context: string;
  quote: string;
  rating: number;
  verified: boolean;
  avatarColor?: string;
  title?: string;
};

export type BrewMethod = {
  name: string;
  params: { label: string; value: string }[];
  tip: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ValueCard = {
  title: string;
  description: string;
  icon: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type BundleBag = {
  origin: string;
  name: string;
  bg: string;
};

export type ReviewHistogramBar = {
  stars: number;
  count: number;
  percent: number;
};

export type FarmData = {
  stationName: string;
  region: string;
  paragraphs: string[];
  meta: { label: string; value: string }[];
};

export type Photo = {
  src: string;
  alt: string;
  label: string;
  prompt: string;
  /** CSS object-position for the crop, e.g. "65% 50%". Defaults to center. */
  position?: string;
};

export type GalleryPhoto = {
  thumbLabel: string;
  photo: Photo;
  available: boolean;
};

export type CoffeeDetail = {
  label: string;
  value: string;
};

export type StoreInfo = {
  name: string;
  tagline: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  priceRange: string;
};
