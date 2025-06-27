// export default defineNuxtPlugin((nuxtApp) => {

// })


import VueMatomo from 'vue-matomo'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueMatomo, {
        host: 'https://matomo.qr-labs.com',
        siteId: 1,
        router: nuxtApp.$router,
        enableLinkTracking: true,
        requireConsent: false,
        trackInitialView: true,
        disableCookies: true,
        requireCookieConsent: false,
    })
})