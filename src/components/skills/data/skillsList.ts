import {
  html,
  next,
  react,
  css,
  javascript,
  nest,
  node,
  postgresql,
  tailwindcss,
  typescript,
  git,
  jest,
  express,
  styledcomponets,
  sass,
} from "./imports";

export interface Skill {
  title: string;
  image: any;
}

export const skillsList: Skill[] = [
  {
    title: "Node.js",
    image: node,
  },
  {
    title: "Next.js",
    image: next,
  },
  {
    title: "React.js",
    image: react,
  },
  {
    title: "TypeScript",
    image: typescript,
  },
  {
    title: "JavaScript",
    image: javascript,
  },
  {
    title: "Nest.js",
    image: nest,
  },
  {
    title: "Express.js",
    image: express,
  },
  {
    title: "React Native",
    image: react,
  },
  {
    title: "PostgreSQL",
    image: postgresql,
  },
  {
    title: "TailwindCSS",
    image: tailwindcss,
  },
  {
    title: "Styled Components",
    image: styledcomponets,
  },
  {
    title: "Sass",
    image: sass,
  },
  {
    title: "Jest",
    image: jest,
  },
  {
    title: "GIT",
    image: git,
  },
  {
    title: "HTML",
    image: html,
  },
  {
    title: "CSS",
    image: css,
  },
];
