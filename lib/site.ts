export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mitomkt.com";

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
