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
    slug: "coelsa-fiesta-fin-de-ano",
    client: "Coelsa",
    type: "Fiesta de fin de año",
    objective: "Celebrar el cierre de año con todo el equipo de Coelsa.",
    solution: "Producción integral del evento con un gran display audiovisual como eje central de la experiencia.",
    image: "/casos/coelsa.webp",
    instagramUrl: "https://www.instagram.com/p/DStHC5WCmsU/",
    capabilities: [
      "Producción integral",
      "Display audiovisual",
      "Ambientación",
      "Coordinación de proveedores",
    ],
  },
  {
    code: "M-02",
    slug: "red-hat-reunion-estrategica",
    client: "Red Hat",
    type: "Reunión estratégica",
    objective: "Analizar la trayectoria de la empresa y sus resultados junto a socios clave.",
    solution: "Encuentro íntimo y focalizado, con producción de contenido y ambientación acorde al tono estratégico del encuentro.",
    image: "/casos/redhat.webp",
    instagramUrl: "https://www.instagram.com/p/DX9ToPKDdsj/?img_index=3",
    capabilities: [
      "Producción de contenido",
      "Ambientación",
      "Formato íntimo",
      "Coordinación con socios",
    ],
  },
  {
    code: "M-03",
    slug: "elea-summit-de-expertos",
    client: "Elea",
    type: "Summit de expertos",
    objective: "Reunir a especialistas para presentar productos y servicios de la compañía.",
    solution: "Producción de un summit con paneles de expertos, puesta escénica y experiencia de marca de punta a punta.",
    image: "/casos/elea.webp",
    instagramUrl: "https://www.instagram.com/p/DWWT8HPDRur/",
    capabilities: [
      "Paneles de expertos",
      "Puesta escénica",
      "Experiencia de marca",
      "Producción general",
    ],
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

// `src` apunta a public/logos/clientes. Sin `src` se muestra el nombre como wordmark.
export const clients: { name: string; src?: string }[] = [
  { name: "Red Hat", src: "/logos/clientes/red-hat.svg" },
  { name: "COELSA", src: "/logos/clientes/coelsa.png" },
  { name: "Avalian", src: "/logos/clientes/avalian.png" },
  { name: "Herbalife", src: "/logos/clientes/herbalife.svg" },
  { name: "SAP", src: "/logos/clientes/sap.svg" },
  { name: "IBM", src: "/logos/clientes/ibm.svg" },
  { name: "Concentrix", src: "/logos/clientes/concentrix.svg" },
  { name: "Toyota", src: "/logos/clientes/toyota.svg" },
  { name: "Citi", src: "/logos/clientes/citi.png" },
  { name: "Oracle", src: "/logos/clientes/oracle.svg" },
  { name: "Cirion", src: "/logos/clientes/cirion.png" },
  { name: "Motorola", src: "/logos/clientes/motorola.svg" },
];

// Respuestas pensadas para ser citables: cada una se sostiene sola, sin
// depender del resto de la página. Alimentan la sección FAQ y el schema
// FAQPage, así que conviene que sean afirmaciones concretas y verificables.
export const faqs = [
  {
    question: "¿Qué tipo de eventos corporativos organiza Mito?",
    answer:
      "Mito produce lanzamientos de producto, encuentros empresariales, capacitaciones y jornadas, fiestas de fin de año, after office, summits con paneles de expertos, activaciones de marca y experiencias para clientes. En todos los casos la agencia cubre el diseño del concepto, la producción y la comunicación del evento.",
  },
  {
    question: "¿En qué zonas trabaja Mito?",
    answer:
      "La base de Mito está en Buenos Aires, Argentina. La agencia produce eventos en AMBA, viaja al interior del país y trabaja también en otros mercados de América Latina.",
  },
  {
    question: "¿Con cuánta anticipación hay que contratar la organización de un evento?",
    answer:
      "No hay un plazo único: depende del formato y de la escala del evento. Lo que suele definir el tiempo mínimo es la disponibilidad del venue y de los proveedores técnicos en la fecha elegida. La recomendación es escribir con la fecha tentativa lo antes posible para saber si es viable y con qué margen se trabaja.",
  },
  {
    question: "¿Cuánto cuesta organizar un evento corporativo?",
    answer:
      "Mito no maneja una lista de precios cerrada: cada evento se cotiza a medida. El presupuesto depende de la cantidad de asistentes, el venue, la producción técnica (sonido, iluminación y pantallas), la ambientación y la duración. Se arma una propuesta con el alcance definido antes de avanzar.",
  },
  {
    question: "¿Mito se ocupa solo de la producción o también de la comunicación?",
    answer:
      "De las dos cosas. Además de la producción integral del evento, Mito trabaja la comunicación previa y posterior: campañas digitales, email marketing, piezas gráficas, contenido para redes y estrategia B2B. La idea es que el evento no empiece ni termine el día del evento.",
  },
  {
    question: "¿Hay que contratar proveedores por separado?",
    answer:
      "No. Mito coordina la red de proveedores completa —venue, sonido, iluminación, pantallas, ambientación, catering y logística— y responde por la ejecución general. La empresa cliente tiene un solo interlocutor para todo el evento.",
  },
  {
    question: "¿Qué tamaño de evento puede producir Mito?",
    answer:
      "Mito trabaja tanto formatos íntimos, como una reunión estratégica con socios clave, como eventos de compañía entera, tipo una fiesta de fin de año con todo el equipo. El formato se define según el objetivo de comunicación, no según un mínimo de asistentes.",
  },
  {
    question: "¿Con qué empresas trabajó Mito?",
    answer:
      "Entre los clientes de Mito hay compañías como Red Hat, COELSA, Avalian, Herbalife, SAP, IBM, Concentrix, Toyota, Citi, Oracle, Cirion y Motorola.",
  },
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/mitomkt.ok/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mitomkt/?viewAsMember=true",
  },
  { label: "WhatsApp", href: "https://wa.me/5491178870751" },
];
