import { defineNuxtConfig } from "nuxt/config";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "PNJ - Công ty vàng bạc đá quý Phú Nhuận | Vàng, Bạc, Đá Quý",
      link: [
        { rel: "canonical", href: "https://haj-fe.vercel.app" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Khám phá thế giới tinh tế của PNJ, Công ty vàng bạc đá quý Phú Nhuận, mang đến bộ sưu tập đồ trang sức vàng, bạc và đá quý tuyệt vời. Khám phá sự tinh tế và sang trọng tại đỉnh cao nghệ thuật.",
        },
        {
          property: "og:title",
          content:
            "Khuyến Mãi, Ưu Đãi HOT Nhất Tại PNJ ☎️1800545457 (Miễn Phí)",
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://haj-fe.vercel.app/" },
        {
          property: "og:description",
          content:
            "Tổng Hợp Ưu Đãi, Khuyến Mãi Hot Nhất Tại PNJ ✔️Mua Online Nhanh Chóng, Tiện Lợi ✔️Miễn Phí Giao Hàng ❤️Gọi Ngay ☎️1800545457 (Miễn Phí)",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/logo.png",
        },
        {
          property: "og:sitename",
          content: "PNJ",
        },
        { name: "robots", content: "index, follow" },
        // Add other meta tags as needed
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: `
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "PNJ",
              "url": "https://haj-fe.vercel.app",
            }
          `,
        },
      ],
    },
  },
  //Config robots file

  // robots: {
  //   UserAgent: "*",
  //   Disallow: "/private/",
  //   Allow: "/",
  //   Sitemap: "https://haj-fe.vercel.app/sitemap.xml",
  // },

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
  plugins: [
    // { src: '~/plugins/device.server.js', ssr: true },
  ],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon",
    "@nuxtjs/robots",
    "@formkit/auto-animate/nuxt",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
