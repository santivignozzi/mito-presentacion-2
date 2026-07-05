export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  accent: "purple" | "orange" | "yellow" | "blue";
  icon: "sparkles" | "calendar" | "megaphone" | "star";
};

export const services: ServiceItem[] = [
  {
    title: "Eventos corporativos",
    description:
      "Diseñamos encuentros que comunican lo que tu marca quiere decir y lo que querés que se recuerde.",
    bullets: [
      "Lanzamientos y presentaciones",
      "Encuentros empresariales",
      "Capacitaciones y jornadas",
      "After office e integración",
      "Experiencias para clientes",
      "Activaciones de marca",
    ],
    accent: "purple",
    icon: "calendar",
  },
  {
    title: "Producción integral",
    description:
      "Coordinamos cada pieza de la producción para que la experiencia suceda con fluidez y nivel de detalle.",
    bullets: [
      "Búsqueda de venues",
      "Sonido, iluminación y pantallas",
      "Ambientación y dirección estética",
      "Coordinación de proveedores",
      "Producción general del evento",
      "Logística y timings",
    ],
    accent: "orange",
    icon: "sparkles",
  },
  {
    title: "Marketing & comunicación",
    description:
      "Acompañamos con estrategia B2B, contenido y comunicación antes, durante y después del evento.",
    bullets: [
      "Campañas digitales",
      "Email marketing y piezas",
      "Comunicación previa y posterior",
      "Contenido para redes",
      "Branding aplicado al evento",
      "Estrategia B2B integral",
    ],
    accent: "yellow",
    icon: "megaphone",
  },
  {
    title: "Experiencias de marca",
    description:
      "Construimos momentos que conectan a las personas con la marca y dejan huella en la audiencia.",
    bullets: [
      "Concepto creativo",
      "Storytelling del evento",
      "Dinámicas para equipos",
      "Acciones de engagement",
      "Experiencias personalizadas",
      "Momentos memorables",
    ],
    accent: "blue",
    icon: "star",
  },
];

export const process = [
  {
    step: "01",
    title: "Entendemos el objetivo",
    description:
      "Escuchamos qué quiere lograr la empresa: comunicar, celebrar, capacitar, lanzar, fidelizar o conectar.",
  },
  {
    step: "02",
    title: "Diseñamos la experiencia",
    description:
      "Creamos una propuesta pensada para la marca, el público y el contexto. Concepto, narrativa y estética.",
  },
  {
    step: "03",
    title: "Planificamos cada detalle",
    description:
      "Definimos locación, proveedores, tiempos, recursos, comunicación y producción.",
  },
  {
    step: "04",
    title: "Ejecutamos con precisión",
    description:
      "Coordinamos el evento para que la experiencia suceda de forma prolija, fluida y profesional.",
  },
  {
    step: "05",
    title: "Potenciamos el impacto",
    description:
      "Acompañamos con contenido, comunicación y acciones posteriores para extender el valor del evento.",
  },
];

export const needs = [
  {
    title: "Necesito organizar un evento para mi equipo",
    description:
      "Solución: eventos internos, jornadas, capacitaciones, after office y experiencias de integración.",
    accent: "purple",
  },
  {
    title: "Necesito presentar una marca, producto o servicio",
    description:
      "Solución: lanzamientos, activaciones, storytelling, branding y producción.",
    accent: "orange",
  },
  {
    title: "Necesito comunicar mejor antes y después del evento",
    description:
      "Solución: campañas digitales, email marketing, piezas gráficas, contenido y comunicación B2B.",
    accent: "yellow",
  },
  {
    title: "Necesito resolver todo con un solo equipo",
    description:
      "Solución: planificación, proveedores, producción, coordinación y ejecución integral.",
    accent: "blue",
  },
];

export const manifesto = [
  "Cada evento comunica.",
  "Cada detalle habla de tu marca.",
  "Cada experiencia construye percepción.",
  "Cada encuentro puede convertirse en una oportunidad.",
  "La diferencia está en cómo hacés sentir a las personas.",
];

export const cases = [
  {
    code: "M-01",
    client: "Coelsa",
    type: "Fiesta de fin de año",
    objective: "Celebrar el cierre de año con todo el equipo de Coelsa.",
    solution: "Producción integral del evento con un gran display audiovisual como eje central de la experiencia.",
    image: "/casos/coelsa.jpg",
    instagramUrl: "https://www.instagram.com/p/DStHC5WCmsU/",
  },
  {
    code: "M-02",
    client: "Red Hat",
    type: "Reunión estratégica",
    objective: "Analizar la trayectoria de la empresa y sus resultados junto a socios clave.",
    solution: "Encuentro íntimo y focalizado, con producción de contenido y ambientación acorde al tono estratégico del encuentro.",
    image: "/casos/redhat.jpg",
    instagramUrl: "https://www.instagram.com/p/DX9ToPKDdsj/?img_index=3",
  },
  {
    code: "M-03",
    client: "Elea",
    type: "Summit de expertos",
    objective: "Reunir a especialistas para presentar productos y servicios de la compañía.",
    solution: "Producción de un summit con paneles de expertos, puesta escénica y experiencia de marca de punta a punta.",
    image: "/casos/elea.jpg",
    instagramUrl: "https://www.instagram.com/p/DWWT8HPDRur/",
  },
];

export const reasons = [
  "Unimos creatividad, producción y comunicación.",
  "Pensamos experiencias a medida.",
  "Entendemos el mundo corporativo.",
  "Cuidamos la estética y la ejecución.",
  "Tenemos red de proveedores.",
  "Acompañamos de punta a punta.",
  "Diseñamos eventos con intención, no solo con logística.",
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/mitomkt.ok/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mitomkt/?viewAsMember=true",
  },
  { label: "WhatsApp", href: "https://wa.me/5491178870751" },
];
