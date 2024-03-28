import { FaTelegramPlane } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { Github, Linkedin, Instagram } from "lucide-react";
import SliderAnimation from "../slider/slider";
import MySplineComponent from "../spline/spline";
import Link from "next/link";
import "./style.css";

export default function Hero() {
  return (
    <>
      <section className="w-full flex items-center justify-between xl:justify-center z-50">
        <div className="w-full flex flex-col items-center py-14 mx-auto xl:w-4/12 xl:items-start xl:mx-0">
          <h1 className="text-[55px] lg:text-6xl font-bold lg:font-black lg:py-2">Olá!👋🏻</h1>
          <h1 className="text-[55px] lg:text-6xl font-bold lg:font-black">
            Sou{" "}
            <strong className="bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow text-transparent bg-clip-text">
              Gui Silva
            </strong>
          </h1>
          <div className="flex flex-col gap-5 items-center xl:items-start">
            <span className="flex gap-3 w-full mx-auto items-center justify-center text-lg xl:justify-start mt-1">
              <div className="h-1 w-3/12 xl:w-4/12 bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow" />
              Desenvolvedor Full Stack
            </span>
            <span className="w-[85%] text-center xl:text-start xl:w-[430px]">
              Apaixonado por criar soluções inovadoras que impulsionam
              experiências digitais excepcionais. Conheça meu portfólio agora!
            </span>
            <div className="flex justify-center gap-1 w-[85%] min-[425px]:gap-5 xl:justify-start">
              <button className="flex items-center justify-center gap-3 px-4 h-14 bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow rounded-lg button-hide-me">
                Contrate-me
                <FaTelegramPlane />
              </button>
              <div className="h-[56px] flex items-center justify-center bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow rounded-lg button-hide-me">
                <button className="items-center m-[1px] h-[54px] px-10 flex gap-1 bg-primary-black rounded-lg ">
                  Ver CV
                  <HiDocumentText />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 w-10/12 md:w-full xl:items-start">
              <span className="">Siga-me:</span>
              <div className="flex gap-5">
                <ButtonRedirect path={process.env.NEXT_PUBLIC_GITHUB as string}>
                  <Github className="icon" />
                </ButtonRedirect>
                <ButtonRedirect
                  path={process.env.NEXT_PUBLIC_LINKEDIN as string}
                >
                  <Linkedin className="icon" />
                </ButtonRedirect>
                <ButtonRedirect
                  path={process.env.NEXT_PUBLIC_INSTAGRAM as string}
                >
                  <Instagram className="icon" />
                </ButtonRedirect>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex w-[640px] h-[600px]">
          <MySplineComponent />
        </div>
      </section>
      <div className="position-relative">
        <SliderAnimation />
      </div>
    </>
  );
}

const ButtonRedirect = ({
  children,
  path,
}: {
  children: any;
  path: string;
}) => {
  return (
    <>
      <button className="w-14 h-14 bg-gradient-to-br from-primary-pink via-primary-orange to-primary-yellow rounded-full  flex justify-center items-center group hover:hover-button">
        <Link
          href={path}
          target="_blank"
          className="w-[52px] h-[52px] bg-primary-black rounded-full flex justify-center items-center"
        >
          {children}
        </Link>
      </button>
    </>
  );
};
