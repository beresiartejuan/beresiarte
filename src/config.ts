import type { Site, SocialObjects, ProjectsObject } from "./types";

export const SITE: Site = {
  website: "https://beresiarte.vercel.app", // replace this with your deployed domain
  author: "Juan Beresiarte",
  desc: "Blog de programación web.",
  title: "Beresiarte",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 17 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN", "es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/beresiartejuan",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/beresiartejuan",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/juanberesiarte",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:juanberesiarte@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
];

export const PROJECTS: ProjectsObject = [
  {
    name: "Fancy Clock",
    repo: "https://github.com/beresiartejuan/fancy-clock",
    link: "https://fancy-clock.vercel.app/",
    description: "Cronometro y reloj minimalistas.",
  },
  {
    name: "Typing Check",
    repo: "https://github.com/beresiartejuan/typing-check",
    link: "https://beresiartejuan.github.io/typing-check/",
    description:
      "Un test de mecanografía que usa frases del Don Quijote. Desarrollado con React y TailwindCSS.",
  },
  {
    name: "My Simple Todo List",
    repo: "https://github.com/beresiartejuan/MyTasks",
    link: "https://mysimpletodolist.vercel.app/",
    description:
      "Una lista de tareas con un diseño limpio y sencillo.Facíl de usar. Desarrollada con React y Material Tailwind.",
  },
  {
    name: "Just",
    description: "Editor de texto sencillo y limpio para tomar notas rápidas.",
    link: "https://just-editor.vercel.app/",
    repo: "https://github.com/beresiartejuan/just",
  },
];
