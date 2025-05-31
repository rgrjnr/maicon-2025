// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Maicon Douglas',
      meta: [
        { name: 'description', content: 'Maicon Douglas' }
      ]
    }
  },
  css: ['~/assets/scss/stylesheet.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
        }
      }
    }
  },
  googleFonts: {
    families: {
      'Azeret Mono': [300,600],
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'v-gsap-nuxt'
  ],

  i18n: {
    locales: [
      { code: 'pt', language: 'pt-BR' },
      { code: 'en', language: 'en-US' },
    ],
    defaultLocale: 'pt',
  }
})