import Link from "next/link";
import Waves from "../wave/wave";
import { Github, Instagram, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <div className="mt-10">
        <Waves />
      </div>
      <main className="w-screen h-full flex flex-col justify-center items-center px-10 pt-5 gap-10 relative ">
        <div className="absolute top-0 items-center flex justify-end px-10 xl:px-0 gap-3 w-full xl:w-[1280px]">
          <Link target="_blank" href={process.env.NEXT_PUBLIC_WHATSAPP as string}>
            <SiWhatsapp size={20} />
          </Link>
          <Link target="_blank" href={process.env.NEXT_PUBLIC_GITHUB as string}>
            <Github />
          </Link>
          <Link target="_blank" href={process.env.NEXT_PUBLIC_LINKEDIN as string}>
            <Linkedin />
          </Link>
          <Link target="_blank" href={process.env.NEXT_PUBLIC_INSTAGRAM as string}>
            <Instagram />
          </Link>
        </div>
        <section className="pt-5 w-full xl:w-[1280px]">
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-white/60" >Home</Link>
            <Link href="/portfólio" className="text-white/60" >Portfólio</Link>
            <Link href="/contato" className="text-white/60" >Contato</Link>
            <Link href="/sobre" className="text-white/60" >Sobre</Link>
          </div>
          <div></div>
        </section>
        <section className="border-t-2 border-white/20 h-14 flex items-center justify-center w-full xl:w-[1280px]">
          <p className="text-sm text-white/50">© 2024 guisilva.com.br</p>
        </section>
      </main>
    </>
  );
}
