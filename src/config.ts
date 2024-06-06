import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://beresiarte.vercel.app", // replace this with your deployed domain
  author: "Juan Beresiarte",
  desc: "Blog de programación web.",
  title: "Beresiarte",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
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
