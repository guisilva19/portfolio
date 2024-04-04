"use client";
import { Button, Input } from "@nextui-org/react";
import {
  CaseSensitive,
  Phone,
  MessageSquareText,
  AtSign,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import { ButtonRedirect } from "../hero/hero";

export default function Form() {
  const [corName, setCorName] = useState("#FFFFFF");
  const [corEmail, setCorEmail] = useState("#FFFFFF");
  const [corTel, setCorTel] = useState("#FFFFFF");
  const [corMessage, setCorMessage] = useState("#FFFFFF");

  return (
    <>
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
        <Button className="font-semibold text-white bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow mt-5">
          Enviar
        </Button>
      </form>
      <div className="w-full flex justify-center">
        <span className="bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow bg-clip-text text-transparent font-black text-xl">
          Ou
        </span>
      </div>
      <div className="flex flex-col mx-auto justify-center gap-5 w-10/12 pb-10">
        <span className="text-center">
          Entre em contato através das redes sociais
        </span>
        <div className="flex justify-center gap-5">
          <ButtonRedirect path={process.env.NEXT_PUBLIC_WHATSAPP as string}>
            <SiWhatsapp className="icon" size={25} />
          </ButtonRedirect>
          <ButtonRedirect path={process.env.NEXT_PUBLIC_GITHUB as string}>
            <Github className="icon" />
          </ButtonRedirect>
          <ButtonRedirect path={process.env.NEXT_PUBLIC_LINKEDIN as string}>
            <Linkedin className="icon" />
          </ButtonRedirect>
          <ButtonRedirect path={process.env.NEXT_PUBLIC_INSTAGRAM as string}>
            <Instagram className="icon" />
          </ButtonRedirect>
        </div>
      </div>
    </>
  );
}
