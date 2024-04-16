import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import {
  SiStyledcomponents,
  SiNextdotjs,
  SiTailwindcss,
  SiNextui,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";

export interface IProject {
  title: string;
  date: string;
  image?: any;
  description: string;
  link_github: string;
  link_site?: string;
  is_finish: boolean;
  libs: any[];
}

export const projectsList: IProject[] = [
  {
    title: "Sleek Ui",
    date: "09 de Abril de 2024",
    image:
      "https://wnfefssrdfiqmagujqwf.supabase.co/storage/v1/object/public/docs/sleek-ui.png?t=2024-04-16T19%3A12%3A22.462Z",
    description:
      "Explore a elegância digital com Sleek UI. Transforme ideias em experiências memoráveis. Bem-vindo ao futuro do design de interfaces.",
    link_github: "https://github.com/guisilva19/chatbot",
    link_site: "https://sleek-ui-vert.vercel.app/",
    is_finish: true,
    libs: [SiNextdotjs, BiLogoTypescript, SiTailwindcss],
  },
  {
    title: "Sleek Ui",
    date: "09 de Abril de 2024",
    image:
      "https://wnfefssrdfiqmagujqwf.supabase.co/storage/v1/object/public/docs/sleek-ui.png?t=2024-04-16T19%3A12%3A22.462Z",
    description:
      "Explore a elegância digital com Sleek UI. Transforme ideias em experiências memoráveis. Bem-vindo ao futuro do design de interfaces.",
    link_github: "https://github.com/guisilva19/chatbot",
    link_site: "https://sleek-ui-vert.vercel.app/",
    is_finish: true,
    libs: [SiNextdotjs, BiLogoTypescript, SiTailwindcss],
  },
  {
    title: "Sleek Ui",
    date: "09 de Abril de 2024",
    image:
      "https://wnfefssrdfiqmagujqwf.supabase.co/storage/v1/object/public/docs/sleek-ui.png?t=2024-04-16T19%3A12%3A22.462Z",
    description:
      "Explore a elegância digital com Sleek UI. Transforme ideias em experiências memoráveis. Bem-vindo ao futuro do design de interfaces.",
    link_github: "https://github.com/guisilva19/chatbot",
    link_site: "https://sleek-ui-vert.vercel.app/",
    is_finish: true,
    libs: [SiNextdotjs, BiLogoTypescript, SiTailwindcss],
  },
  {
    title: "Sleek Ui",
    date: "09 de Abril de 2024",
    image:
      "https://wnfefssrdfiqmagujqwf.supabase.co/storage/v1/object/public/docs/sleek-ui.png?t=2024-04-16T19%3A12%3A22.462Z",
    description:
      "Explore a elegância digital com Sleek UI. Transforme ideias em experiências memoráveis. Bem-vindo ao futuro do design de interfaces.",
    link_github: "https://github.com/guisilva19/chatbot",
    link_site: "https://sleek-ui-vert.vercel.app/",
    is_finish: true,
    libs: [SiNextdotjs, BiLogoTypescript, SiTailwindcss],
  },
  {
    title: "Sleek Ui",
    date: "09 de Abril de 2024",
    image:
      "https://wnfefssrdfiqmagujqwf.supabase.co/storage/v1/object/public/docs/sleek-ui.png?t=2024-04-16T19%3A12%3A22.462Z",
    description:
      "Explore a elegância digital com Sleek UI. Transforme ideias em experiências memoráveis. Bem-vindo ao futuro do design de interfaces.",
    link_github: "https://github.com/guisilva19/chatbot",
    link_site: "https://sleek-ui-vert.vercel.app/",
    is_finish: true,
    libs: [SiNextdotjs, BiLogoTypescript, SiTailwindcss],
  },
  {
    title: "Sleek Ui",
    date: "09 de Abril de 2024",
    image:
      "https://wnfefssrdfiqmagujqwf.supabase.co/storage/v1/object/public/docs/sleek-ui.png?t=2024-04-16T19%3A12%3A22.462Z",
    description:
      "Explore a elegância digital com Sleek UI. Transforme ideias em experiências memoráveis. Bem-vindo ao futuro do design de interfaces.",
    link_github: "https://github.com/guisilva19/chatbot",
    link_site: "https://sleek-ui-vert.vercel.app/",
    is_finish: true,
    libs: [SiNextdotjs, BiLogoTypescript, SiTailwindcss],
  },
];
