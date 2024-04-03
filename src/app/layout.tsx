import Header from "@/components/header/header";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gui Silva",
  description:
    "O projeto 'Portfólio Multifuncional de Guilherme Silva Fernandes' é uma plataforma digital personalizada desenvolvida para destacar os talentos, habilidades e conquistas de Guilherme de uma forma única e impactante. Este portfólio é projetado para oferecer uma visão abrangente do seu trabalho e personalidade, demonstrando sua expertise e criatividade de maneira cativante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={plus.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
