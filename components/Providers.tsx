"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      cancelUrl="/"
      successUrl="/"
      cartMode="client-only"
      mode="payment"
      stripe={process.env.STRIPE_PUBLIC_KEY as string}
      shouldPersist
      currency="BRL"
    >
      {children}
    </USCProvider>
  );
}
