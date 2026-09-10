/** @type {import('next').NextConfig} */
const nextConfig = {
  // Con STATIC_EXPORT=1 genera HTML plano en out/ para subir a hosting Apache.
  output: process.env.STATIC_EXPORT ? "export" : undefined,
  // Genera `casos/<slug>/index.html` en vez de `casos/<slug>.html`. Apache no
  // resuelve URLs sin extensión salvo que tenga MultiViews, pero sí sirve el
  // index.html de un directorio.
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
