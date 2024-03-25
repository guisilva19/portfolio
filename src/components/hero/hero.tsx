import SliderAnimation from "../slider/slider";
import MySplineComponent from "../spline/spline";
import { FaTelegramPlane } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import "./style.css";

export default function Hero() {
  return (
    <>
      <section className="w-full flex items-center justify-between">
        <div className="w-full flex flex-col items-center py-14">
          <h1 className="text-[55px] font-semibold">Olá!👋🏻</h1>
          <h1 className="text-[55px] font-bold">
            Sou{" "}
            <strong className="bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow text-transparent bg-clip-text">
              Gui Silva
            </strong>
          </h1>
          <div className="flex flex-col gap-5 items-center">
            <span className="flex gap-3 w-full mx-auto items-center justify-center text-lg">
              <div className="h-1 w-3/12 bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow" />
              Desenvolvedor Full Stack
            </span>
            <span className="w-[85%] text-center">
              Apaixonado por criar soluções inovadoras que impulsionam
              experiências digitais excepcionais. Conheça meu portfólio agora!
            </span>
            <div className="flex justify-between w-[85%]">
              <button className="flex items-center justify-center gap-3 px-4 h-14 bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow rounded-lg">
                Contrate-me
                <FaTelegramPlane />
              </button>
              <div className="h-[56px] flex items-center justify-center bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow rounded-lg">
                <button className="items-center m-[1px] h-[98%] px-10 flex gap-1 bg-primary-black rounded-lg ">
                  Ver CV
                  <HiDocumentText />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-6/12 h-full bg-blue-600">
          <MySplineComponent />
        </div>
      </section>
      <div className="position-relative mt-10">
        <SliderAnimation />
      </div>
    </>
  );
}
