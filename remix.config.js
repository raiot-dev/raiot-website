/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'src',
  assetsBuildDirectory: 'build/public/assets',
  serverBuildPath: 'build/index.js',
  publicPath: '/build/',
  future: {
    unstable_tailwind: true, // will eventually become stable
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  routes: async (defineRoutes) =>
    defineRoutes((route) => {
      route('/:lang/', 'routes/$lang/welcome.tsx');
      route('/:lang/error', 'routes/$lang/error.tsx');
    }),
};
