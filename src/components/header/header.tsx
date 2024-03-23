"use client";
import { Avatar } from "@nextui-org/react";
import DropdownMobile from "../dropdown/dropdown";

export default function Header() {
  return (
    <>
      <header className="w-screen h-16 flex items-center justify-between px-5 bg-primary-black border-b border-white/20">
        <div className="flex gap-3 items-center">
          <Avatar
            name="GS"
            classNames={{
              base: "bg-gradient-to-r from-primary-purple via-primary-pink to-primary-orange",
              name: "text-white font-semibold text-lg",
            }}
          />
          <h1 className="text-white font-bold">Gui Silva</h1>
        </div>
        <nav>
          <DropdownMobile />
        </nav>
      </header>
    </>
  );
}
