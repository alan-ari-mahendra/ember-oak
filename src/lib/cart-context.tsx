"use client";

import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react";

type CartContextType = {
  count: number;
  toastName: string;
  toastVisible: boolean;
  addToCart: (name: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(2);
  const [toastName, setToastName] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const addToCart = useCallback((name: string) => {
    setCount((c) => c + 1);
    setToastName(name + " added to cart");
    setToastVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToastVisible(false), 2600);
  }, []);

  return (
    <CartContext value={{ count, toastName, toastVisible, addToCart }}>
      {children}
    </CartContext>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
