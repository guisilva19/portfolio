import SliderAnimation from "@/components/slider/slider";
import MySplineComponent from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen">
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
              <span className="w-[85%] text-[14px] text-base">
                Apaixonado por criar soluções
                inovadoras que impulsionam experiências digitais excepcionais.
                Conheça meu portfólio agora!
              </span>
            </div>
          </div>
          <div className="hidden w-6/12 h-full bg-blue-600">
            <MySplineComponent />
          </div>
        </section>
        <div className="position-relative mt-10">
          <SliderAnimation />
        </div>
      </main>
    </>
  );
}
