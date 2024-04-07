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
import { Button } from "@nextui-org/react";
import { X } from "lucide-react";
import { IProject } from "../projects/data/projectsList";
import Link from "next/link";

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
        <DrawerContent className="bg-primary-black border-primary-black h-96 w-screen">
          <DrawerHeader className="relative">
            <DrawerTitle>{project.title}</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
            <DrawerClose className="absolute right-5 top-3">
              <X />
            </DrawerClose>
          </DrawerHeader>
          <DrawerFooter className="flex-row justify-center">
            <Link href={project.link_github}>Acessar projeto</Link>
            <Link href={project.link_site}>Acessar repositório</Link>
          </DrawerFooter>
        </DrawerContent>
      </DrawerMain>
    </>
  );
}
