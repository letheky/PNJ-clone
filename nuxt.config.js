import {
  defineNuxtConfig
} from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "PNJ - Công ty vàng bạc đá quý Phú Nhuận | Vàng, Bạc, Đá Quý",
      link: [{
          rel: "canonical",
          href: "https://haj-fe.vercel.app"
        },
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        },
      ],
      meta: [{
          hid: "description",
          name: "description",
          content: "Khám phá thế giới tinh tế của PNJ, Công ty vàng bạc đá quý Phú Nhuận, mang đến bộ sưu tập đồ trang sức vàng, bạc và đá quý tuyệt vời. Khám phá sự tinh tế và sang trọng tại đỉnh cao nghệ thuật.",
        },
        {
          property: "og:title",
          content: "Khuyến Mãi, Ưu Đãi HOT Nhất Tại PNJ ☎️1800545457 (Miễn Phí)",
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: "https://haj-fe.vercel.app/"
        },
        {
          property: "og:description",
          content: "Tổng Hợp Ưu Đãi, Khuyến Mãi Hot Nhất Tại PNJ ✔️Mua Online Nhanh Chóng, Tiện Lợi ✔️Miễn Phí Giao Hàng ❤️Gọi Ngay ☎️1800545457 (Miễn Phí)",
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
        {
          name: "robots",
          content: "index, follow"
        },
        // Add other meta tags as needed
      ],
      script: [{
        type: "application/ld+json",
        innerHTML: `
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "PNJ",
              "url": "https://haj-fe.vercel.app",
            }
          `,
      }, ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in"
    },
  },
  //Config robots file

  robots: {
    UserAgent: "*",
    Disallow: "/server/",
    Allow: "/public",
  },

  css: ["vuetify/lib/styles/main.sass"],
  routeRules: {
    // Homepage pre-rendered at build time
    "/": {
      prerender: true
    },
    // Product page generated on-demand, revalidates in background
    "/products/**": {
      swr: 3600
    },
    // Blog post generated on-demand once until next deploy
    "/blog/**": {
      isr: true
    },
    // Admin dashboard renders only on client-side
    "/admin/**": {
      ssr: false
    },
    // Add cors headers on API routes
    "/api/**": {
      cors: true
    },
    // Redirects legacy urls
    "/old-page": {
      redirect: "/new-page"
    },
  },
  runtimeConfig: {
    public: {
      accesTypes: process.env.NUXT_APP_ACCESSORIES_TYPES,
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  components: [
    // ~/calendar-module/components/event/Update.vue => <EventUpdate />
    {
      path: "~/calendar-module/components"
    },

    // ~/components/MenuCard/UserDeleteDialog.vue => <UserDeleteDialog />
    {
      path: "~/components/MenuCard",
      pathPrefix: false
    },
    {
      path: "~/components/HomePage",
      pathPrefix: false
    },

    // ~/components/special-components/Btn.vue => <SpecialBtn />
    // { path: "~/components/special-components", prefix: "Special" },

    // It's important that this comes last if you have overrides you wish to apply
    // to sub-directories of `~/components`.
    //
    // ~/components/Btn.vue => <Btn />
    // ~/components/base/Btn.vue => <BaseBtn />
    "~/components",
  ],
  plugins: [{
      src: '~/plugins/apexcharts.client.js',
      mode: 'client'
    },
    // { src: '~/plugins/device.server.js', ssr: true },
  ],
  modules: [
    async (options, nuxt) => {
        nuxt.hooks.hook("vite:extendConfig", (config) =>
          config.plugins.push(vuetify())
        );
      },
      "@pinia/nuxt",
      "@pinia-plugin-persistedstate/nuxt",
      "nuxt-icon",
      "@nuxtjs/robots",
      "@formkit/auto-animate/nuxt",
      "@nuxt/image",
      "nuxt-lodash"
  ],
  build: {
    transpile: ["vuetify"],
  },
  image: {
    presets: {
      product: {
        modifiers: {
          format: "webp",
          fit: "cover",
          quality: "auto:best",
        },
      },
      banner: {
        modifiers: {
          format: "webp",
          fit: "cover",
          quality: "80",
        },
      },
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});