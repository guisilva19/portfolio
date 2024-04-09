import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { SiStyledcomponents, SiNextdotjs, SiTailwindcss } from "react-icons/si";
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
    title: "Chatbot",
    date: "08 de Abril de 2024",
    image: "https://i.ibb.co/3dCCG3N/image.png",
    description:
      "Este chatbot utiliza tecnologias avançadas para oferecer uma experiência de conversação inteligente e natural. Através da integração com a API da OpenAI, garantindo interações mais humanizadas e relevantes. Além disso, nossa integração com a Vercel SDK AI nos permite enriquecer ainda mais a interação com funcionalidades específicas, tornando nosso chatbot mais inteligente e capaz de compreender melhor as necessidades dos usuários.",
    link_github: "https://github.com/guisilva19/chatbot",
    is_finish: false,
    libs: [SiNextdotjs, BiLogoTypescript, RiOpenaiFill, SiTailwindcss],
  },
  {
    title: "Quick Loan",
    date: "19 de Março de 2024",
    image: "https://i.ibb.co/NSq0MSH/image-2.png",
    description:
      "Quick Loan é uma iniciativa inovadora voltada para a criação de uma plataforma de empréstimo rápido, com foco na agilidade, transparência e facilidade de acesso aos serviços financeiros.",
    link_github: "https://github.com/guisilva19/quick-loan",
    is_finish: false,
    libs: [FaReact, BiLogoTypescript, SiStyledcomponents],
  },
];
