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
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
