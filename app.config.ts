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
      phone:"ic:baseline-phone-in-talk",

      //overlay footer for mobile
      home:"material-symbols:home",
      coupon:"streamline:discount-percent-coupon",
      profile:"material-symbols:account-box",
      notification:"mdi:bell-outline",
      phoneCall:"uil:calling",
      menu:"material-symbols:lists-rounded",
      chevronRight:"tabler:chevron-right",
      chevronDown:"tabler:chevron-down",
      chevronUp:"tabler:chevron-up",
      back:"ic:baseline-keyboard-backspace",
      close:"material-symbols:close",
      closeCircle:"material-symbols:cancel-outline",
    },
  },
});
