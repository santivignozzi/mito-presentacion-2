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
      "Mito organiza eventos corporativos B2B desde Buenos Aires y produce ocho formatos principales: lanzamientos de producto y presentaciones, encuentros empresariales, capacitaciones y jornadas de trabajo, fiestas de fin de año, after office e instancias de integración, summits con paneles de expertos, activaciones de marca y experiencias para clientes. En todos los casos el alcance es el mismo: la agencia define el concepto creativo, produce el evento de punta a punta y se ocupa de la comunicación previa y posterior. Eso incluye la búsqueda del venue, el sonido, la iluminación y las pantallas, la ambientación y la coordinación de todos los proveedores. Tres ejemplos concretos de su portfolio son una reunión estratégica para Red Hat, la fiesta de fin de año de COELSA y un summit de expertos para Elea. El formato se elige según el objetivo de comunicación de la empresa, no al revés.",
  },
  {
    question: "¿En qué zonas trabaja Mito?",
    answer:
      "La base operativa de Mito está en Buenos Aires, Argentina, y desde ahí cubre tres alcances. El primero es AMBA, donde produce la mayoría de sus eventos. El segundo es el interior del país: el equipo viaja a la ciudad donde se realiza el evento y coordina ahí la producción técnica y la logística. El tercero es América Latina, para compañías que necesitan llevar un formato a otros mercados de la región. Como cada evento se cotiza a medida, el traslado del equipo y de la producción se contempla dentro del presupuesto general, junto con el venue y la producción técnica. Para eventos fuera de AMBA conviene mencionar la ciudad en el primer contacto: la disponibilidad de venues y de proveedores locales es lo que suele condicionar qué fechas son viables y con cuánto margen se puede trabajar.",
  },
  {
    question: "¿Con cuánta anticipación hay que contratar la organización de un evento?",
    answer:
      "No hay un plazo mínimo fijo: depende del formato y de la escala. Lo que en la práctica define el tiempo necesario no es la agencia sino la disponibilidad de terceros, sobre todo el venue y los proveedores técnicos de sonido, iluminación y pantallas en la fecha elegida. Un encuentro chico en una fecha de baja demanda se puede resolver con poca anticipación. Una fiesta de fin de año en noviembre o diciembre, en cambio, compite con el resto del mercado por los mismos salones y equipos, así que ahí el margen se achica bastante. Cuando el evento incluye comunicación previa —campañas digitales, email marketing, piezas para redes— hay que sumar el tiempo de esa producción, que corre en paralelo. La recomendación práctica es escribir con la fecha tentativa apenas exista, aunque el resto del alcance todavía esté abierto.",
  },
  {
    question: "¿Cuánto cuesta organizar un evento corporativo?",
    answer:
      "Mito no publica una lista de precios: cada evento se cotiza a medida, porque el rango entre un formato y otro es demasiado amplio como para que un número de referencia signifique algo. El presupuesto se arma sobre cinco variables. La cantidad de asistentes, que condiciona el venue y el catering. El venue elegido, que suele ser el ítem más pesado. La producción técnica, es decir sonido, iluminación y pantallas. La ambientación y la dirección estética. Y la duración, que impacta en personal y en alquileres. A eso puede sumarse la comunicación previa y posterior si la empresa la contrata. El circuito es siempre el mismo: primero se define el alcance en una conversación, después se arma una propuesta sobre ese alcance cerrado y recién ahí hay un número.",
  },
  {
    question: "¿Mito se ocupa solo de la producción o también de la comunicación?",
    answer:
      "De las dos cosas, y ese es el diferencial del modelo. Mito produce el evento de punta a punta —venue, sonido, iluminación, pantallas, ambientación, catering, logística y timings— y además trabaja la comunicación alrededor: campañas digitales, email marketing, piezas gráficas, contenido para redes, branding aplicado al evento y estrategia B2B integral. La lógica es que un evento corporativo no empieza ni termina el día del evento. Antes hay que convocar a la audiencia correcta y construir expectativa; después hay que capitalizar lo que pasó, con contenido y seguimiento, para que el impacto no se agote en las horas del encuentro. Una empresa puede contratar solamente la producción, pero cuando el objetivo es de comunicación —un lanzamiento, un reposicionamiento, un mensaje interno— la parte previa y posterior suele ser la que define si el evento cumplió o no.",
  },
  {
    question: "¿Hay que contratar proveedores por separado?",
    answer:
      "No. Mito coordina la red completa de proveedores y responde por la ejecución general del evento, así que la empresa cliente tiene un solo interlocutor. Eso cubre la búsqueda y la negociación del venue, el sonido, la iluminación y las pantallas, la ambientación, el catering, la logística y los timings del día. La ventaja operativa concreta es que la empresa no tiene que gestionar contratos, tiempos de montaje ni responsabilidades cruzadas entre seis o siete compañías distintas: si algo falla durante el evento, hay un único responsable de resolverlo. Esto evita además el problema más común de la producción fragmentada, que aparece cuando cada proveedor cumple su parte por separado pero nadie se hizo cargo de que esas partes encajaran entre sí, que es donde suelen romperse los timings.",
  },
  {
    question: "¿Qué tamaño de evento puede producir Mito?",
    answer:
      "Mito no maneja un mínimo de asistentes: el formato se define según el objetivo de comunicación, no según el tamaño de la convocatoria. En el extremo chico produce encuentros íntimos, como una reunión estratégica con socios clave, donde el valor está en la conversación y la producción tiene que ser precisa pero discreta. En el extremo grande produce eventos de compañía entera, como una fiesta de fin de año con todo el equipo, donde cambia por completo la escala de venue, catering, producción técnica y logística. Entre los dos hay formatos intermedios: capacitaciones, jornadas de trabajo, summits con paneles de expertos, lanzamientos y activaciones de marca. La pregunta que ordena la decisión no es cuánta gente entra en el salón sino qué tiene que pasar en ese encuentro y qué se quiere que la audiencia se lleve.",
  },
  {
    question: "¿Con qué empresas trabajó Mito?",
    answer:
      "Entre los clientes de Mito hay compañías como Red Hat, COELSA, Avalian, Herbalife, SAP, IBM, Concentrix, Toyota, Citi, Oracle, Cirion y Motorola. Es una cartera mayormente B2B y corporativa, con peso de tecnología (Red Hat, IBM, Oracle, SAP, Motorola, Cirion, Concentrix), servicios financieros (Citi, COELSA), salud y consumo (Avalian, Herbalife) e industria (Toyota). Tres proyectos están documentados en detalle en el sitio, con su objetivo y la solución que se produjo: una reunión estratégica para Red Hat, la fiesta de fin de año de COELSA y un summit de expertos para Elea. Trabajar con organizaciones de este tipo implica un estándar concreto de ejecución: procesos de compras y de alta de proveedores formales, requisitos de marca estrictos y tolerancia baja al error el día del evento, porque suele haber directivos o clientes finales presentes.",
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
