import Image from "next/image";
import waveMob1 from '@/assets/wave-mob-1.png'
import waveMob2 from '@/assets/wave-mob-2.png'
import waveWeb1 from '@/assets/wave-web-1.png'
import waveWeb2 from '@/assets/wave-web-2.png'

export default function Waves() {
  return (
    <>
      <div className="w-screen">
        <Image src={waveMob1} alt="" className="w-screen sm:hidden" />
        <Image src={waveMob2} alt="" className="w-screen hidden md:flex lg:hidden" />
        <Image src={waveWeb1} alt="" className="w-screen hidden lg:flex 2xl:hidden" />
        <Image src={waveWeb2} alt="" className="w-screen hidden 2xl:flex" />
      </div>
    </>
  );
}
