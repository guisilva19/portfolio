"use client";
import Form from "@/components/form/form";
import { NextUIProvider } from "@nextui-org/react";

export default function Contato() {
  return (
    <>
      <NextUIProvider>
        <main className="w-screen h-full flex flex-col py-10 md:py-20 gap-5">
          <Form />
          
        </main>
      </NextUIProvider>
    </>
  );
}
