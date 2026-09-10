export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mitomkt.com";

// Última revisión real del contenido. Actualizar a mano sólo cuando se edite
// copy sustantiva: los buscadores con IA usan la recencia como señal, así que
// declarar una fecha que no corresponde a un cambio real es contraproducente.
// No atarlo a la fecha de build: rebuildear no es actualizar.
export const CONTENT_UPDATED = "2026-09-10";

export const business = {
  name: "Mito Marketing",
  legalName: "Mito Marketing",
  email: "producciones@mitomkt.com",
  phone: "+5491178870751",
  phoneDisplay: "+54 9 11 7887 0751",
  city: "Buenos Aires",
  country: "AR",
  sameAs: [
    "https://www.instagram.com/mitomkt.ok/",
    "https://www.linkedin.com/company/mitomkt/",
  ],
} as const;
