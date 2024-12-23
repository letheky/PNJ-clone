import '@mdi/font/css/materialdesignicons.css'
import {
    createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import {
    PurpleTheme,
  } from "@/themes/LightTheme";
import '~/assets/scss/style.scss';

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi', // This is already the default value - only for display purposes
        },
        theme: {
            defaultTheme: "PurpleTheme",
            themes: {
                PurpleTheme,
            },
        },
        display: {
            mobileBreakpoint: 'sm',
            thresholds: {
                xs: 320,
                sm: 550,
                md: 768,
                lg: 1024,
                xl: 1280,
                xxl: 1920,
            },
        },
        srr: true,
    })
    nuxtApp.vueApp.use(vuetify)
    nuxtApp.vueApp.use(PerfectScrollbar);
})