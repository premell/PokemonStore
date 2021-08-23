const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  enableSvg: true,
  webpack(config, options) {
    return config;
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: ["raw.githubusercontent.com"],
    path: "/_next/image",
    loader: "default",
  },
});
