import Carrousel from "@/components/carrousel/carrousel";

export default function Portfolio() {
  return (
    <>
      <main className="w-screen h-full flex flex-col bg-primary-black py-20">
        <div className="w-full flex justify-center">
          <h1 className="bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow bg-clip-text text-transparent font-black text-3xl md:text-5xl lg:text-6xl">
            {"<h1> Portfólio </h1>"}
          </h1>
        </div>
        <div className="w-full h-full pb-20 ">
          <Carrousel />
        </div>
      </main>
    </>
  );
}
