import Image from "next/image";
import Drawer from "../drawer/drawer";
import { IProject, projectsList } from "./data/projectsList";

export default function Projects() {
  return (
    <>
      <main className="mt-28 h-full flex flex-col justify-center items-center gap-5">
        <h1 className="md:h-20 bg-blue-500 bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow bg-clip-text text-transparent font-black text-3xl md:text-5xl lg:text-6xl">
          Projetos
        </h1>
        <div className="w-full">
          <ul className="flex flex-wrap justify-center gap-10">
            {projectsList.map((project: IProject, index: number) => (
              <>
                <Drawer project={project}>
                  <li
                    key={index}
                    className="w-[350px] lg:w-[450px] min-[1280px]:w-[500px] bg-cover bg-center rounded-lg relative md:hover:scale-125 hover:z-50 transition-[1s]"
                  >
                    <div className="absolute left-0 top-0 w-full h-full bg-black/50 flex flex-col justify-center items-center">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <ul className="flex gap-2">
                        {project.libs.map((Lib, index) => (
                          <Lib key={index} size={30} color="#FF8A56" />
                        ))}
                      </ul>
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full rounded-lg"
                      width={300}
                      height={300}
                    />
                  </li>
                </Drawer>
              </>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
