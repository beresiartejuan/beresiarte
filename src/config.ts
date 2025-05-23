import type { Site, SocialObjects } from "./types";

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

export const EXPERIENCE = [
  {
    name: "🛍️ Unica",
    date: "03/2025 - 05/2025",
    rol: "Sistema de gestión para tienda de ropa",
    description:
      "Este proyecto lo hice para una tienda de ropa que llevaba todo su stock en una libreta. Les desarrollé una app donde pueden ver sus productos, cambiar precios, agregar nueva mercadería y hasta imprimir etiquetas sin complicaciones. Pensé mucho en que fuera fácil de usar, porque sabía que iba a ser una herramienta que usaran todos los días. También armé un sistema que guarda información en memoria para que no se sobrecargue, y todo funcione más rápido. Gracias a esto, dejaron de hacer todo a mano y ganaron tiempo y orden.",
  },
  {
    name: "🚗 Automóviles Atuel",
    rol: "Sitio autoadministrable para concesionaria",
    date: "09/2024 - 01/2025",
    description:
      "Esta web la hice para una concesionaria de autos. El objetivo era que pudieran cargar sus vehículos, subir fotos y editarlos sin depender de nadie. También agregué filtros para buscar por marca, modelo o año. Si bien por temas de presupuesto no se terminó usando a largo plazo, el sitio sigue online y funcionando. Fue una experiencia que me ayudó a entender cómo adaptarme a lo que un cliente necesita sin perder de vista los recursos disponibles.",
  },
  {
    name: "⌨️ Typing Check",
    date: "02/2023 - hoy",
    rol: "App para practicar tipeo en español",
    description:
      'Me gusta escribir rápido, así que se me ocurrió hacer una app para practicar eso, pero con un toque diferente: en vez de medir "palabras por minuto", mide cuántos caracteres sos capaz de escribir por minuto. Usé textos literarios en español y la idea fue mantener todo bien simple, sin registro ni configuraciones. Me sirvió para experimentar con formas distintas de detectar lo que el usuario escribe, sin usar los típicos formularios.',
  },
  {
    name: "🧀 La Quesería",
    date: "01/2025 - 02/2025",
    rol: "Software de ventas para negocio local",
    description:
      "Este sistema lo hice desde cero para un comercio de barrio que vende quesos y fiambres. Les permite registrar productos escaneando el código de barras, hacer cobros y generar tickets para los clientes. Lo organicé en módulos bien simples para que cualquier persona que trabaje en el local pueda entender cómo usarlo sin necesitar capacitación. Lo usan todos los días y les facilita muchísimo la atención al público.",
  },
  {
    name: "🪻 Just",
    date: "06/2024 - hoy",
    rol: "Editor de texto minimalista para notas rápidas",
    description:
      "JUST nació de una necesidad muy personal: quería un lugar donde escribir rápido, sin distracciones y que me permita guardar o exportar lo que escribía. Todas las apps que encontraba eran demasiado cargadas o no me gustaban visualmente. Así que me hice una propia. Escribís, elegís si querés descargarlo como PDF o Markdown, y listo. La uso todos los días para anotar ideas, pensamientos o incluso planificar proyectos.",
  },
  {
    name: "🧑‍🏫 Clases particulares",
    rol: "Tutorías personalizadas en desarrollo web",
    date: "09/2023 - 03/2024",
    description:
      "Durante un tiempo di clases particulares de programación. Enseñaba desde los primeros pasos, como escribir una página web desde cero, hasta temas más avanzados. Siempre adapté las clases a cada persona, y lo que más me gustó fue poder transmitir mi entusiasmo por crear cosas y ver cómo los demás también empezaban a disfrutarlo. Fue una etapa donde crecí mucho, no solo enseñando, sino también aprendiendo a comunicarme mejor.",
  },
];
