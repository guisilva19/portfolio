import { AlignCenter } from "lucide-react";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
} from "@nextui-org/react";

export default function DropdownMobile() {
  return (
    <>
      <Dropdown
        backdrop="blur"
        className="bg-gradient-to-br from-primary-orange to-primary-pink"
      >
        <DropdownTrigger>
          <AlignCenter color="#ffff" width={40} height={40} />
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">
          <DropdownItem href="#home" key="home" className="text-white">
            Home
          </DropdownItem>
          <DropdownItem href="#about" key="about" className="text-white">
            About
          </DropdownItem>
          <DropdownItem href="" key="services" className="text-white">
            Services
          </DropdownItem>
          <DropdownItem href="" key="portifolio" className="text-white">
            Portifolio
          </DropdownItem>
          <DropdownItem href="" key="blog" className="text-white">
            Blog
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
