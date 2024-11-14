const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { loader: "custom" },
  transpilePackages: ["next-image-export-optimizer"],
  basePath: "/natai-blog",
};

export default nextConfig;
