import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiTailwindcss, SiNextui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiSupabaseLine } from "react-icons/ri";

export interface IProject {
  title: string;
  date: string;
  image?: any;
  description: string;
  link_github?: string;
  link_site?: string;
  is_finish: boolean;
  libs: any[];
}

export const projectsList: IProject[] = [
  {
    title: "Vitality",
    date: "17 de Abril de 2024",
    image:
      "https://wnfefssrdfiqmagujqwf.supabase.co/storage/v1/object/public/docs/vitality.png?t=2024-04-18T02%3A57%3A36.657Z",
    description:
      "Apresentando Vitality: Onde cada movimento é intencional e a energia é contagiante. Bem-vindo a um espaço onde a paixão pela saúde se encontra com a determinação pessoal. Aqui, o ginásio vibra com atividade, e cada pessoa se move com um propósito claro.",
    link_github: "https://github.com/guisilva19/shop-gym",
    link_site: "https://shop-gym.vercel.app/",
    is_finish: true,
    libs: [SiNextdotjs, BiLogoTypescript, SiTailwindcss, TbBrandFramerMotion],
  },
  {
    title: "The LandDepot",
    date: "02 de Outubro de 2023",
    image:
      "https://wnfefssrdfiqmagujqwf.supabase.co/storage/v1/object/public/docs/landdepot.png?t=2024-04-18T03%3A18%3A34.751Z",
    description:
      "The Land Depot: Uma plataforma para otimizar o gerenciamento e administração de investimentos.",
    link_site: "https://thelanddepot.com",
    is_finish: true,
    libs: [SiNextdotjs, SiNextui, TbBrandFramerMotion, RiSupabaseLine],
  },
  {
    title: "Sleek Ui",
    date: "09 de Abril de 2024",
    image:
      "https://wnfefssrdfiqmagujqwf.supabase.co/storage/v1/object/public/docs/sleek-ui.png?t=2024-04-16T19%3A12%3A22.462Z",
    description:
      "Explore a elegância digital com Sleek UI. Transforme ideias em experiências memoráveis. Bem-vindo ao futuro do design de interfaces.",
    link_github: "https://github.com/guisilva19/sleek-ui",
    link_site: "https://sleek-ui-vert.vercel.app/",
    is_finish: true,
    libs: [SiNextdotjs, BiLogoTypescript, SiTailwindcss],
  },
];
