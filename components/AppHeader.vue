<template>
  <div v-if="!checkWindowResolution" class="app-header">
    <v-container>
      <v-row align="center">
        <div class="d-flex contactive">
          <NuxtLink class="d-flex align-center" to="/" style="color: black">
            <Icon name="group" />
            <p class="text-subtitle-2 ml-1">Quan hệ cổ đông (IR)</p>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="d-flex align-center ml-3"
            style="color: black"
          >
            <Icon name="locations" />
            <p class="text-subtitle-2 ml-1">Cửa hàng</p>
          </NuxtLink>
          <NuxtLink to="/" class="d-flex align-center ml-3">
            <IconCSS name="contact" style="color: #003468" />
            <p class="text-subtitle-2 ml-1" style="color: #003468">
              1800 54 54 57
            </p>
          </NuxtLink>
        </div>
        <v-img
          max-width="100"
          cover
          alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
          lazy-src="/images/logos/logo.png"
          src="/images/logos/logo.png"
          class="mx-auto"
        ></v-img>
        <div class="d-flex user-info align-self-center">
          <span class="d-flex align-center ml-3 light-blue-block">
            <Icon name="user" size="20" />
            <p class="text-subtitle-2 ml-1">Tài khoản của tôi</p>
          </span>
          <span class="d-flex align-center ml-3">
            <v-badge content="2" color="error" location="bottom right">
              <Icon name="handbag" />
            </v-badge>
            <p class="text-subtitle-2 ml-1">Giỏ hàng</p>
          </span>
        </div>
      </v-row>
    </v-container>
    <v-divider class="top-divider"></v-divider>
    <v-container>
      <v-row>
        <div
          class="header-menus d-flex align-center justify-space-between flex-grow-1"
        >
          <v-menu
            transition="scale-transition"
            width="10%"
            location="bottom start"
            open-on-hover
          >
            <template v-slot:activator="{ props }">
              <div
                class="d-flex justify-space-between hoverable flex-grow-1"
                v-bind="props"
              >
                <span v-for="(item, index) in menuTitle" :key="index">
                  <h5 class="text-h6 mr-5" @mouseover="setActiveItem(item)">
                    {{ item }}
                  </h5>
                </span>
              </div>
            </template>
            <!-- <div v-for="(item, index) in accesTypes" :key="index">
              <NuxtLink class="menu-link" to="/">{{ item }}</NuxtLink>
            </div> -->
            <component
              :is="
                activeItemComponent === 'PopHoverCard'
                  ? PopHoverCard
                  : activeItemComponent === 'PopHoverCardWithBanner'
                  ? PopHoverCardWithBanner
                  : PopHoverCardWithBrand
              "
              :menuData="menuData"
            />
          </v-menu>
        </div>
        <v-text-field
          placeholder="Nhập thông tin bạn muốn tìm kiếm"
          style="max-width: 400px"
          class="ml-10 mb-n6"
          variant="outlined"
          :rounded="true"
        >
          <template #append>
            <Icon class="ml-n16" name="search"></Icon>
          </template>
        </v-text-field>
      </v-row>
    </v-container>
  </div>
  <div v-else class="app-header">
    <v-container>
      <v-row align="center" class="d-flex justify-space-between py-2 px-5">
        <v-img
          max-width="100"
          height="42"
          cover
          alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
          lazy-src="/images/logos/logo.png"
          src="/images/logos/logo.png"
        ></v-img>
        <v-text-field
          placeholder="Nhập tên sản phẩm"
          style="max-width: 400px"
          class="ml-10 mb-n7"
          variant="outlined"
          :rounded="true"
        >
          <template #append>
            <Icon class="ml-n16" name="search"></Icon>
          </template>
        </v-text-field>
        <Icon
          name="phone"
          class="mx-2"
        />
        <span>
          <v-badge content="2" color="error" location="bottom right">
            <Icon name="handbag" />
          </v-badge>
        </span>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWindowResolution } from "~/stores/responsive";

/**
 * *Dynamic import pophover components
 */
import {
  PopHoverCard,
  PopHoverCardWithBanner,
  PopHoverCardWithBrand,
} from "#components";

/**
 * *Import categories for menu
 */
import {
  NUXT_APP_ACCESSORIES_TYPES,
  NUXT_APP_ACCESSORIES_MATERIALS,
  NUXT_APP_ACCESSORIES_LIST,
  NUXT_APP_ACCESSORIES_COLLECTIONS,
  NUXT_APP_WEDD_ACCESS_PURPOSES,
  NUXT_APP_WEDD_ACCESS_TYPES,
  NUXT_APP_WEDD_ACCESS_CATEGORIES,
  NUXT_APP_WEDD_ACCESS_MATERIALS,
  NUXT_APP_WEDD_ACCESS_COLLECTIONS,
  NUXT_APP_WATCH_SWED_BRANDS,
  NUXT_APP_WATCH_FASHION_BRANDS,
  NUXT_APP_WATCH_FAVOR_BRANDS,
  NUXT_APP_WATCH_ON_GENDERS,
  NUXT_APP_WATCH_TYPES,
  NUXT_APP_WATCH_MATERIALS,
  NUXT_APP_GIFT_FOR,
} from "~/data/headermenu";

/**
 * *Logic and variables for dynamic menu start from here
 */
const activeItem = ref("");
const menuData = ref([]);
const activeItemComponent = ref("");

const setActiveItem = (item) => {
  activeItem.value = item;
};

const menuTitle = [
  "Trang sức",
  "Trang sức cưới",
  "Đồng hồ",
  "Quà tặng",
  "Thương hiệu",
];
const accessMenuData = [
  {
    title: "Chủng loại",
    size: 3,
    listItem: NUXT_APP_ACCESSORIES_TYPES.split(","),
  },
  {
    title: "Chất liệu",
    size: 2,
    listItem: NUXT_APP_ACCESSORIES_MATERIALS.split(","),
  },
  {
    title: "Dòng hàng",
    size: 4,
    listItem: NUXT_APP_ACCESSORIES_LIST.split(","),
  },
  {
    title: "Bộ sưu tập",
    size: 2,
    listItem: NUXT_APP_ACCESSORIES_COLLECTIONS.split(","),
  },
];
const weddAccessMenuData = [
  {
    title: "Theo mục đích",
    size: 2,
    listItem: NUXT_APP_WEDD_ACCESS_PURPOSES.split(","),
  },
  {
    title: "Chủng loại",
    size: 2,
    listItem: NUXT_APP_WEDD_ACCESS_TYPES.split(","),
  },
  {
    title: "Dòng trang sức",
    size: 3,
    listItem: NUXT_APP_WEDD_ACCESS_CATEGORIES.split(","),
  },
  {
    title: "Chất liệu",
    size: 2,
    listItem: NUXT_APP_WEDD_ACCESS_MATERIALS.split(","),
  },
  {
    title: "Bộ sưu tập",
    size: 3,
    listItem: NUXT_APP_WEDD_ACCESS_COLLECTIONS.split(","),
  },
];

const watchMenuData = [
  {
    title: "Thương hiệu Thụy sĩ",
    size: 2,
    listItem: NUXT_APP_WATCH_SWED_BRANDS.split(","),
  },
  {
    title: "Thương hiệu thời trang",
    size: 2,
    listItem: NUXT_APP_WATCH_FASHION_BRANDS.split(","),
  },
  {
    title: "Thương hiệu yêu thích",
    size: 2,
    listItem: NUXT_APP_WATCH_FAVOR_BRANDS.split(","),
  },
  {
    title: "Giới tính",
    size: 1,
    listItem: NUXT_APP_WATCH_ON_GENDERS.split(","),
  },
  {
    title: "Chủng loại",
    size: 2,
    listItem: NUXT_APP_WATCH_TYPES.split(","),
  },
  {
    title: "Chất liệu dây",
    size: 3,
    listItem: NUXT_APP_WATCH_MATERIALS.split(","),
  },
];
const giftMenuData = [
  {
    title: "Quà tặng",
    size: 3,
    listItem: NUXT_APP_GIFT_FOR.split(","),
  },
];

watch(activeItem, (newValue) => {
  switch (newValue) {
    case "Trang sức":
      activeItemComponent.value = "PopHoverCard";
      menuData.value = accessMenuData;
      break;
    case "Trang sức cưới":
      activeItemComponent.value = "PopHoverCardWithBanner";
      menuData.value = weddAccessMenuData;
      break;
    case "Đồng hồ":
      activeItemComponent.value = "PopHoverCard";
      menuData.value = watchMenuData;
      break;
    case "Quà tặng":
      activeItemComponent.value = "PopHoverCardWithBanner";
      menuData.value = giftMenuData;
      break;
    case "Thương hiệu":
      activeItemComponent.value = "PopHoverCardWithBrand";
      break;
    default:
      activeItemComponent.value = "PopHoverCard";
      menuData.value = accessMenuData;
  }
});

/**
 * TODO: config responsive header commencing from now
 */
const responsiveStore = useWindowResolution();

const checkWindowResolution = computed(
  () => responsiveStore.isLaptop || responsiveStore.isMobile
);

</script>

<style lang="scss" scoped>
//CSS NUXTLINK COMPONENT
a,
h6 {
  cursor: pointer;
  font-size: 12px;
  color: #282828;
  position: relative;
  -moz-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-transform: capitalize;
  &:hover {
    color: #caaa6e;
  }
}
.app-header {
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
  padding-bottom: 6px;
  .contactive {
    .text-subtitle-2 {
      font-size: 13px !important;
    }
  }
  .top-divider {
    width: 80vw;
    margin: auto;
    padding-bottom: 5px;
  }
  .header-menus {
    // max-width: calc(100% - 400px);

    .hoverable {
      h5 {
        text-transform: capitalize;
        line-height: 40px;
        text-indent: 0;
        position: relative;
        color: #000;
        background: linear-gradient(0deg, #c48c44, #c48c46) 0 100% no-repeat;
        transition: background-size 0.5s;
        background-size: 0 2px;

        // &:not(:last-child):hover {
        &:hover {
          cursor: pointer;
          background-size: 100% 2px;
          color: #c48c46;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
