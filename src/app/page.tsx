"use client"
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <main className="w-screen h-full">
        <NextUIProvider>
          <Hero />
          <Projects />
        </NextUIProvider>
      </main>
    </>
  );
}
