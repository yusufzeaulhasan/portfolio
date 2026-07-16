/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for production builds only — `output: "export"` breaks
  // dynamic routes on the dev server even with generateStaticParams.
  ...(process.env.NODE_ENV === "production" ? { output: "export" } : {}),
  trailingSlash: true,           // /work/slug/ -> out/work/slug/index.html on GitHub Pages
  images: { unoptimized: true }, // required for static export
  // Set NEXT_PUBLIC_BASE_PATH=/portfolio when building for GitHub Pages
  // (the deploy workflow does this automatically).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;
