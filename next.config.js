const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages, {}]], {
  reactStrictMode: true,
  optimizeImages: false,
  exportPathMap: async () => ({
    "/": { page: "/" },
    "/config": { page: "/config" },
    "/mobile": { page: "/mobile" },
    "/panel": { page: "/panel" },
    "/video_overlay": { page: "/video_overlay" },
  }),
});
