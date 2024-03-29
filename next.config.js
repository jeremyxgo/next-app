/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
