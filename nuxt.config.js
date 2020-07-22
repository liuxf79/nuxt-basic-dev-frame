export default {
  loading: '~/components/ui/loading.vue',
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    serverUrl: process.env.SERVER_URL,
  },
  privateRuntimeConfig: {},
  mode: 'universal',
  target: 'server',
  head: {
    title: 'y-closet',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        hid: 'viewport',
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'fashion,clothes,china,commercial',
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
  plugins: ['~/plugins/axios-interceptors', '~/plugins/meta-cleaner'], //前端请求拦截器
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
    [
      '@nuxtjs/component-cache',
      {
        max: 100,
        maxAge: 1000 * 60,
      },
    ],
  ],
  axios: {},
  // devtools: 'source-map',
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
    extend(config, { isClient }) {
      if (isClient) {
        const SpritesmithPlugin = require('webpack-spritesmith')
        const path = require('path')
        config.plugins.push(
          new SpritesmithPlugin({
            src: {
              cwd: path.resolve(__dirname, 'assets/sprs'),
              glob: '*.png',
            },
            target: {
              image: path.resolve(__dirname, 'static/img/spr.png'),
              css: [
                [
                  path.resolve(__dirname, 'static/stylus/spr.styl'),
                  {
                    format: 'spritesmithTemplate',
                  },
                ],
              ],
            },
            apiOptions: {
              cssImageRef: '~static/img/spr.png',
            },
            customTemplates: {
              spritesmithTemplate: spritesmithTemplate,
            },
            spritesmithOptions: {
              padding: 4,
            },
          })
        )
      }
    },
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

function spritesmithTemplate(data) {
  const fs = require('fs')
  const _ = require('lodash')
  var tpl = fs.readFileSync('./assets/tools/sprites.tpl')
  data.sprites.forEach((item) => {
    let match = item.name.match(/@(2|3)(?=x)/g)
    if (match) {
      match = match[0].replace(/@/g, '')
    } else {
      match = 1
    }
    item.name = item.name.replace(/@(2|3)x/g, '')
    item.pxr = {}
    Object.keys(item.px).forEach((key) => {
      item.pxr[key] =
        parseFloat(item.px[key].replace(/px/g, '') / match, 2) + 'px'
    })
  })
  var compiled = _.template(tpl)
  return compiled({
    sprites: data.sprites,
  })
}
