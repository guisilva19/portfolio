"use client";
import { Input, NextUIProvider } from "@nextui-org/react";
import {
  Mail,
  CaseSensitive,
  Phone,
  MessageSquareText,
  AtSign,
} from "lucide-react";
import { useState } from "react";

export default function Contato() {
  const [corName, setCorName] = useState("#FFFFFF");
  const [corEmail, setCorEmail] = useState("#FFFFFF");
  const [corTel, setCorTel] = useState("#FFFFFF");
  const [corMessage, setCorMessage] = useState("#FFFFFF");

  return (
    <>
      <NextUIProvider>
        <main className="w-screen h-screen flex flex-col py-10 md:py-20 gap-10">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <h1 className="bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow bg-clip-text text-transparent font-black text-3xl md:text-5xl lg:text-6xl">
              Entre em contato
            </h1>
            <span className="text-xs w-7/12 mx-auto text-center">
              Preencha com nome, email, telefone e deixe sua mensagem!
            </span>
          </div>
          <form className="w-8/12 mx-auto flex flex-col gap-4 items-center min-[425px]:w-[285px]">
            <fieldset className="w-full">
              <Input
                isClearable
                type="text"
                label="Nome"
                variant="underlined"
                color="warning"
                autoComplete="off"
                startContent={<CaseSensitive color={corName} />}
                onFocus={() => setCorName("#FF8A56")}
                onBlur={() => setCorName("#FFFFFF")}
              />
            </fieldset>
            <fieldset className="w-full">
              <Input
                isClearable
                type="text"
                label="Email"
                variant="underlined"
                color="warning"
                autoComplete="off"
                startContent={<AtSign color={corEmail} />}
                onFocus={() => setCorEmail("#FF8A56")}
                onBlur={() => setCorEmail("#FFFFFF")}
              />
            </fieldset>
            <fieldset className="w-full">
              <Input
                isClearable
                type="text"
                label="Telefone"
                variant="underlined"
                color="warning"
                autoComplete="off"
                startContent={<Phone color={corTel} />}
                onFocus={() => setCorTel("#FF8A56")}
                onBlur={() => setCorTel("#FFFFFF")}
              />
            </fieldset>
            <fieldset className="w-full">
              <Input
                isClearable
                type="text"
                label="Mensagem"
                variant="underlined"
                color="warning"
                autoComplete="off"
                startContent={<MessageSquareText color={corMessage} />}
                onFocus={() => setCorMessage("#FF8A56")}
                onBlur={() => setCorMessage("#FFFFFF")}
              />
            </fieldset>
          </form>
        </main>
      </NextUIProvider>
    </>
  );
}
