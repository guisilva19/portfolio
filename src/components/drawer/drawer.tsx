"use client";
import {
  Drawer as DrawerMain,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { IProject } from "../projects/data/projectsList";
import Link from "next/link";
import Image from "next/image";

export default function Drawer({
  children,
  project,
}: {
  children: any;
  project: IProject;
}) {
  return (
    <>
      <DrawerMain>
        <DrawerTrigger>{children}</DrawerTrigger>
        <DrawerContent className="bg-primary-black border-primary-black h-[500px] w-screen flex flex-col justify-between">
          <DrawerHeader className="relative flex lg:justify-center">
            <DrawerTitle>{project.title}</DrawerTitle>
            <DrawerClose className="absolute right-5 top-3">
              <X />
            </DrawerClose>
          </DrawerHeader>
          <div className=" w-full flex flex-col items-center justify-center gap-2 md:gap-4  lg:gap-8 md:flex-row">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={300}
              className="rounded-lg md:w-[400px] lg:w-[500px]"
            />
            <span className="flex flex-col h-full justify-between 2xl:w-[400px]">
              <DrawerDescription className="text-center w-72 md:text-start md:text-[15px] lg:text-lg ">
                {project.description}
              </DrawerDescription>
              <p className="mx-auto mt-3 md:mx-0">{project.date}</p>
            </span>
          </div>
          <DrawerFooter className="flex-row justify-center mt-4">
            {project.link_site !== undefined && (
              <Link
                target="_blank"
                href={project.link_site}
                className="flex justify-center items-center text-center text-sm md:text-base bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow px-5 py-3 rounded-lg hover:scale-105 transition-[400ms] font-semibold"
              >
                Acessar projeto
              </Link>
            )}
            <Link
              target="_blank"
              href={project.link_github}
              className="flex justify-center items-center text-center text-sm md:text-base bg-gradient-to-r from-primary-pink via-primary-orange to-primary-yellow px-5 py-3 rounded-lg hover:scale-105 transition-[400ms] font-semibold"
            >
              Acessar repositório
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </DrawerMain>
    </>
  );
}
