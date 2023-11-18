import { defineNuxtConfig } from "nuxt/config";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    // Product page generated on-demand, revalidates in background
    "/products/**": { swr: 3600 },
    // Blog post generated on-demand once until next deploy
    "/blog/**": { isr: true },
    // Admin dashboard renders only on client-side
    "/admin/**": { ssr: false },
    // Add cors headers on API routes
    "/api/**": { cors: true },
    // Redirects legacy urls
    "/old-page": { redirect: "/new-page" },
  },
  runtimeConfig: {
    public: {
      accesTypes: process.env.NUXT_APP_ACCESSORIES_TYPES,
    },
  },
  components: [
    // ~/calendar-module/components/event/Update.vue => <EventUpdate />
    { path: "~/calendar-module/components" },

    // ~/components/MenuCard/UserDeleteDialog.vue => <UserDeleteDialog />
    { path: "~/components/MenuCard", pathPrefix: false },

    // ~/components/special-components/Btn.vue => <SpecialBtn />
    // { path: "~/components/special-components", prefix: "Special" },

    // It's important that this comes last if you have overrides you wish to apply
    // to sub-directories of `~/components`.
    //
    // ~/components/Btn.vue => <Btn />
    // ~/components/base/Btn.vue => <BaseBtn />
    "~/components",
  ],
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "nuxt-icon"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
