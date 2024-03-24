import SliderAnimation from "@/components/slider/slider";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen bg-primary-black">
        <div className="w-screen h-[500px]"></div>
        <div className="position-relative mt-10">
          <SliderAnimation />
        </div>
      </main>
    </>
  );
}
