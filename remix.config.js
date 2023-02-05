/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  future: {
    v2_routeConvention: true,
  },
  serverDependenciesToBundle: [
    'swiper',
    'swiper/css',
    'swiper/swiper.min.css',
    'swiper/react',
    'swiper/react/swiper-react.js',
    'ssr-window',
    'ssr-window/ssr-window.esm.js',
    'dom7',
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
}
