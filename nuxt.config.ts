// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    // 'nuxt-primevue'
    '@nuxt/content',
    '@nuxt/image'
  ],
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
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})