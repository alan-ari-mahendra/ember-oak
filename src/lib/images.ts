import type { Photo } from "./types";

// Shared style for every Google Flow prompt below.
const STYLE =
  "Warm natural light, soft shadows, cream and brown palette, editorial documentary photography, shallow depth of field, no text, no logos, no brand names, no watermarks.";

export const photos = {
  roasteryDrum: {
    src: "/images/roastery-drum.jpg",
    alt: "Roaster checking beans at the drum roaster",
    label: "Photo: roastery drum",
    position: "66% 50%",
    prompt: `A roaster in a canvas apron checking a sample of freshly roasted coffee beans beside a vintage cast-iron drum coffee roaster, small industrial roastery with brick wall and wooden shelves, morning light from a side window. ${STYLE}`,
  },
  greenBeans: {
    src: "/images/green-beans.jpg",
    alt: "Green coffee beans spilling from a jute sack",
    label: "Photo: green beans",
    position: "55% 60%",
    prompt: `Close-up of unroasted green coffee beans spilling from an open jute sack onto a wooden floor, plain unmarked sack, roastery storage room. ${STYLE}`,
  },
  cafeCounter: {
    src: "/images/cafe-counter.jpg",
    alt: "Ember and Oak cafe counter with espresso machine and pastries",
    label: "Photo: cafe counter",
    prompt: `Cozy specialty coffee cafe counter with a chrome espresso machine, ceramic cups, a glass case of pastries, oak wood counter and plants, afternoon light through large windows, no people facing camera. ${STYLE}`,
  },
  farmDryingBeds: {
    src: "/images/farm-drying-beds.jpg",
    alt: "Coffee cherries drying on raised beds in Guji",
    label: "Photo: raised drying beds, Guji",
    prompt: `Red and dark purple coffee cherries drying on raised mesh beds at a washing station in the highlands of Guji, Ethiopia, green hills in the background, golden hour. ${STYLE}`,
  },
  pdpBagBack: {
    src: "/images/pdp-bag-back.jpg",
    alt: "Back of the Guji Natural coffee bag on a cream backdrop",
    label: "Photo: bag back",
    prompt: `Back view of a plain cream kraft-paper coffee bag with a folded top and a blank paper label, standing on a cream linen backdrop, studio product shot, centered composition. ${STYLE}`,
  },
  pdpBeans: {
    src: "/images/pdp-beans-closeup.jpg",
    alt: "Close-up of light roasted Guji Natural coffee beans",
    label: "Photo: beans close-up",
    prompt: `Macro close-up of light roasted Ethiopian coffee beans, cinnamon-brown color with visible center seams, scattered on a cream ceramic plate. ${STYLE}`,
  },
  pdpCup: {
    src: "/images/pdp-brewed-cup.jpg",
    alt: "Pour-over cup of Guji Natural coffee next to a glass server",
    label: "Photo: brewed cup",
    position: "60% 50%",
    prompt: `A cup of pour-over coffee in a handmade cream ceramic cup next to a glass server and a pour-over dripper, light bright brew color, wooden table. ${STYLE}`,
  },
  pdpFarm: {
    src: "/images/pdp-farm.jpg",
    alt: "Smallholder coffee farm on the hills around Shakiso, Guji",
    label: "Photo: farm",
    prompt: `Smallholder coffee farm on rolling green hills around Shakiso, Guji, Ethiopia, coffee shrubs with ripe red cherries under shade trees, wide landscape, soft hazy light. ${STYLE}`,
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
