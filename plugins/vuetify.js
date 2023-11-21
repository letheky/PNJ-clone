import {
    createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '~/assets/scss/style.scss';

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        srr: true,
    })
    nuxtApp.vueApp.use(vuetify)
})