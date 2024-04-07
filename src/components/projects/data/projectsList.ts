import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { SiStyledcomponents } from "react-icons/si";

export interface IProject {
  title: string;
  date: string;
  image?: any;
  description: string;
  link_github: string;
  link_site: string;
  is_finish: boolean;
  libs: any[];
}

export const projectsList: IProject[] = [
  {
    title: "Quick Loan",
    date: "19 de Março de 2024",
    image: "https://i.ibb.co/NSq0MSH/image-2.png",
    description: "",
    link_github: "https://github.com/guisilva19/quick-loan",
    link_site: "https://github.com/guisilva19/quick-loan",
    is_finish: false,
    libs: [BiLogoTypescript, FaReact, SiStyledcomponents],
  },
  {
    title: "Quick Loan",
    date: "19 de Março de 2024",
    image: "https://i.ibb.co/NSq0MSH/image-2.png",
    description: "",
    link_github: "https://github.com/guisilva19/quick-loan",
    link_site: "https://github.com/guisilva19/quick-loan",
    is_finish: false,
    libs: [BiLogoTypescript, FaReact, SiStyledcomponents],
  },
];
