// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module', // 'nuxt-primevue'
    '@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image', '@nuxtjs/seo', 'nuxt-security', '@nuxt/scripts'],
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
  scripts: {
    globals: {
      umamiAnalytics: {
        src: 'https://umami.dev.qr-labs.com/script.js',
        "data-website-id": 'e0fc1ed4-2c20-489e-a106-0c072a14a2f8'
      }
    }
  }
})