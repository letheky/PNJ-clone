// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    size: "24px", // default <Icon> size applied
    class: "nuxt-icon", // default <Icon> class applied
    aliases: {
      //menu header icon
      group: "ion:people-outline",
      locations: "solar:point-on-map-linear",
      contact:
        "streamline:interface-help-customer-support-1-customer-headset-help-microphone-phone-support",
      user: "ooui:user-avatar-outline",
      handbag: "ph:handbag",
      search: "material-symbols:search-rounded",
      phone: "ic:baseline-phone-in-talk",

      //overlay footer for mobile
      home: "material-symbols:home",
      coupon: "streamline:discount-percent-coupon",
      profile: "material-symbols:account-box",
      notification: "mdi:bell-outline",
      phoneCall: "uil:calling",
      menu: "material-symbols:lists-rounded",
      chevronRight: "tabler:chevron-right",
      chevronDown: "tabler:chevron-down",
      chevronUp: "tabler:chevron-up",
      back: "ic:baseline-keyboard-backspace",
      close: "material-symbols:close",
      closeCircle: "material-symbols:cancel-outline",

      //product detail
      multiImg: "fa6-regular:images",
      checked: "lets-icons:done-ring-round-fill",

      //admin page
      dashboard: "ic:outline-dashboard",
      typography: "tabler:typography",
      shadow: "fluent:square-shadow-20-regular",
      register: "lucide:user-plus",
      login: "octicon:sign-in",
      sample: "ph:aperture",
      avatar: "carbon:user-avatar-filled",
      task: "fluent:task-list-20-filled",
      mail: "ic:baseline-mail-outline",
      circle: "mdi:circle-outline",
      currency: "mdi:currency-usd",
      increase: "solar:arrow-left-up-outline",
      decrease: "solar:arrow-right-down-outline",
    },
  },
});