import Carrousel from "@/components/carrousel/carrousel";
import Skills from "@/components/skills/skills";
import Waves from "@/components/wave/wave";

export default function Portfolio() {
  return (
    <>
      <main className="w-screen h-full flex flex-col bg-primary-black py-20">
        <div className="w-full flex justify-center">
          <h1 className="bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow bg-clip-text text-transparent font-black text-3xl md:text-5xl lg:text-6xl">
            Certificados
          </h1>
        </div>
        <div className="w-full h-full">
          <Carrousel />
        </div>
        <Waves />
        <div className="">
          <Skills />
        </div>
      </main>
    </>
  );
}
