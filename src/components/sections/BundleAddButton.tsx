"use client";

import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";

export default function BundleAddButton() {
  const { addToCart } = useCart();

  return (
    <Button
      variant="terra"
      className="eo-btn-bundle-add"
      onClick={() => addToCart("3-Bag Bundle")}
    >
      Add 3-bag bundle
    </Button>
  );
}
