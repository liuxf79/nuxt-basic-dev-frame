export default {
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    serverUrl: process.env.SERVER_URL,
  },
  privateRuntimeConfig: {},
  mode: 'universal',
  target: 'server',
  head: {
    title: 'my-title',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  pageTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  plugins: ['~/plugins/axios-interceptors'], //前端请求拦截器
  components: true,
  router: {
    middleware: ['router'],
  },
  serverMiddleware: ['~/server-middleware/log.js'], //服务器日志中间件
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
  ],
  axios: {},
  devtools: 'source-map',
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-aspect-ratio-mini': {},
        'postcss-write-svg': { utf8: false },
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {},
        'postcss-px-to-viewport': {
          viewportWidth: 375, // (Number) The width of the viewport.
          unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
          viewportUnit: 'vw', // (String) Expected units.
          fontViewportUnit: 'vw', // 字体使用的视窗单位
          selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
          minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
          mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
        },
        'postcss-viewport-units': {
          silence: true,
        },
      },
      preset: {
        stage: 3,
        autoprefixer: {
          grid: true,
        },
      },
    },
    babel: {},
  },
  styleResources: {
    css: '~assets/css/main.css',
    stylus: '~/assets/stylus/variable.styl',
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
      },
      {
        code: 'fr',
        file: 'fr-FR.js',
      },
      {
        code: 'zh',
        file: 'zh-CN.js',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/',
  },
}
