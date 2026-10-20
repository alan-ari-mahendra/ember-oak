import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ember & Oak Coffee Roasters | Small-batch specialty coffee, roasted in Portland",
  description:
    "Ember & Oak roasts single-origin and blended specialty coffee in small batches every week in Portland, Oregon. Shop beans, build a bundle or subscribe and never run out.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} antialiased`}
    >
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
