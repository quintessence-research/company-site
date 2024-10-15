// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss', // 'nuxt-primevue'
  '@nuxt/content', '@nuxt/image', '@nuxtjs/seo', 'nuxt-security'],
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
  devtools: { enabled: true }
})