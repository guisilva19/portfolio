"use client"
import Hero from "@/components/hero/hero";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen">
        <NextUIProvider>
          <Hero />
        </NextUIProvider>
      </main>
    </>
  );
}
