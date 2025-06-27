// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [// 'nuxt-primevue'
    '@primevue/nuxt-module', '@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image', '@nuxtjs/seo', 'nuxt-security', '@nuxt/scripts', '@kgierke/nuxt-matomo'],
  content: {
    // Optional configurations
    // markdown: {
    //   anchorLinks: false,
    //   toc: {
    //     depth: 3,
    //     searchDepth: 3,
    //   },
    // },
    // documentDriven: true
  },
  primevue: {
    options: {
      unstyled: true,
      ripple: true
    }
  },
  matomo: {
    host: "https://matomo.qr-labs.com",
    siteId: 1,
    // router: nuxtApp.$router,
    enableLinkTracking: true,
    // requireConsent: false,
    // trackInitialView: true,
    disableCookies: true,
    // requireCookieConsent: false,
  },
  css: [
    'primeicons/primeicons.css',
  ],
  site: {
    url: 'https://quintessenceresearch.com',
    name: 'Quintessence Research B.V.',
    description: 'Applied Research Consultancy working on digital innovation and circular economy infrastructure',
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'https://*.tile.openstreetmap.org', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/'],
      }
    }
  },
})