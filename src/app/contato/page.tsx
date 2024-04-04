"use client";
import { Input, NextUIProvider } from "@nextui-org/react";

export default function Contato() {
  return (
    <>
      <NextUIProvider>
        <main className="w-screen h-screen py-10 md:py-20">
          <div className="w-full flex justify-center">
            <h1 className="bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow bg-clip-text text-transparent font-black text-3xl md:text-5xl lg:text-6xl">
              Entre em contato
            </h1>
          </div>
          <form className="w-full flex flex-col items-center">
            <fieldset>
              <Input
                isClearable
                type="email"
                label="Email"
                variant="underlined"
                className=""
                color="primary"
              />
            </fieldset>
          </form>
        </main>
      </NextUIProvider>
    </>
  );
}
