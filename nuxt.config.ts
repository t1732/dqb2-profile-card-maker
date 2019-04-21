import NuxtConfiguration from '@nuxt/config'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

const config: NuxtConfiguration = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "ドラゴンクエストビルダーズ2 じこしょうかいカード作成ツール",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "ドラゴンクエストビルダーズ2の公式配布ビルダーじこしょうかいカードの作成を支援するツールです"
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@euphton" },
      { name: "twitter:creator", content: "@euphton" },
      { property: "og:url", content: "https://dqb2-profile-card-maker.firebaseapp.com" },
      { property: "og:title", content: "ドラゴンクエストビルダーズ2 じこしょうかいカード作成メーカー" },
      { property: "og:description", content: "どんどんじこしょうかいしよう！" },
      { property: "og:image", content: "https://dqb2-profile-card-maker.firebaseapp.com/image/thumb.png" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
      { // M PLUS, Sawarabi Gothic, Noto Sans JP, Kosugi, Kosugi Maru
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=M+PLUS+1p|Sawarabi+Gothic|Noto+Sans+JP|Kosugi|Kosugi+Maru'
      },
      { // Nico Moji
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/earlyaccess/nicomoji.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/data-url-download',
    '@/plugins/date-format',
    '@/plugins/vue-konva',
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: process.env.GA_TRACKING_ID
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

export default config
