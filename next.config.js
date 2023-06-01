// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  basePath: "",
  experimental: {
    appDir: true,
    mdxRs: true
  }
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
