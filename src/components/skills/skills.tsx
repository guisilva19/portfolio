import Image from "next/image";
import { Skill, skillsList } from "./data/skillsList";

export default function Skills() {
  return (
    <>
      <main className="w-screen h-full pt-20 flex flex-col gap-20">
        <div className="w-full flex justify-center">
          <h1 className="bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow bg-clip-text text-transparent font-black text-3xl md:text-5xl lg:text-6xl">
            Habilidades
          </h1>
        </div>
        <div className="w-full h-full flex justify-center">
          <ul className="flex gap-5 gap-y-10 justify-center w-10/12 flex-wrap min-[1400px]:w-[1166px]">
            {skillsList.map((skill: Skill, index) => (
              <Card key={index} title={skill.title} image={skill.image} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

const Card = ({ title, image }: { title: string; image: any }) => {
  return (
    <>
      <li className="w-32 h-36 bg-[#1c1b19] hvr-card">
        <div className="flex flex-col items-center justify-center my-auto gap-1">
          <Image src={image} alt={title} width={70} className="img" />
          <p className="text-sm text-center font-semibold">{title}</p>
        </div>
      </li>
    </>
  );
};
