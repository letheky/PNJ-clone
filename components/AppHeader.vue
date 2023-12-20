<template>
  <div class="app-header app-header-desktop">
    <v-container>
      <v-row align="center">
        <div class="d-flex contactive">
          <NuxtLink class="d-flex align-center" to="/" style="color: black">
            <Icon name="group" />
            <p class="text-subtitle-2 ml-1">Quan hệ cổ đông (IR)</p>
          </NuxtLink>
          <NuxtLink
            to="/about"
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
        <NuxtLink class="mx-auto" to="/">
          <v-img
            max-width="100"
            width="100"
            height="42"
            cover
            alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
            lazy-src="/images/logos/logo.png"
            src="/images/logos/logo.png"
          ></v-img>
        </NuxtLink>
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
          <v-col cols="8">
            <div class="header-menus d-flex align-center justify-space-between">
              <v-menu
                transition="scale-transition"
                width="1000"
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
          </v-col>
          <v-col cols="4">
            <v-menu
              transition="scale-transition"
              width="500"
              offset="10 10"
              location="bottom start"
              open-on-hover
            >
              <template v-slot:activator="{ props }">
                <div v-bind="props">
                  <v-text-field
                    v-model="searchText"
                    placeholder="Nhập thông tin bạn muốn tìm kiếm"
                    
                    append-inner-icon="mdi-magnify"
                    class=" mb-n6"
                    variant="outlined"
                    :rounded="true"
                  >
                  </v-text-field>
                </div>
              </template>
              <!-- <div v-for="(item, index) in accesTypes" :key="index">
                  <NuxtLink class="menu-link" to="/">{{ item }}</NuxtLink>
                </div> -->
              <v-sheet v-if="searchItems.pending || !searchItems.data">
                <div class="d-flex justify-center align-center">
                  <div class="char">L</div>
                  <div class="char">o</div>
                  <div class="char">a</div>
                  <div class="char">d</div>
                  <div class="char">i</div>
                  <div class="char">n</div>
                  <div class="char">g</div>
                  <div class="char">.</div>
                  <div class="char">.</div>
                  <div class="char">.</div>
                </div>
              </v-sheet>
              <v-sheet v-else :height="searchItems.data.total > 0 ? 300 : 70">
                <h4 class="pa-4 text-h3">
                  <p v-if="searchItems.data.total > 0">
                    Danh sách 10 trên tổng {{ searchItems.data.total }} kết quả
                  </p>
                  <p v-else class="text-error">Không tìm thấy sản phẩm</p>
                </h4>
                <div v-for="item in searchItems.data.results" class="px-5">
                  <NuxtLink
                    :to="`/san-pham/${item.id}`"
                    class="d-flex align-center justify-between cursor-pointer"
                  >
                    <div class="d-flex align-center">
                      <v-img
                        class="rounded-md"
                        width="80"
                        :alt="item.name"
                        :src="item.thumbnail"
                      />
                    </div>
                    <div class="d-flex flex-column">
                      <div>{{ item.name }}</div>
                      <div>{{ item.price.toLocaleString() }}đ</div>
                    </div>
                  </NuxtLink>
                </div>
              </v-sheet>
              <!-- <v-sheet class="mt-2" v-else height="50">
                <h3 class="text-center text-error text-h5 mt-3">Không tìm thấy sản phẩm</h3>
              </v-sheet> -->
            </v-menu>
          </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="app-header app-header-mobile-tablet">
    <v-container>
      <v-row align="center" class="d-flex justify-space-between pt-2 px-1">
        <NuxtLink to="/">
          <v-img
            max-width="65"
            width="65"
            height="30"
            cover
            alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
            lazy-src="/images/logos/logo.png"
            src="/images/logos/logo.png"
          ></v-img>
        </NuxtLink>

        <v-text-field
          placeholder="Tìm kiếm nhanh"
          append-inner-icon="mdi-magnify"
          class="mb-n6 mx-3 flex-grow-1"
          variant="outlined"
          density="compact"
          :rounded="true"
          @update:focused="searchDialog = true"
        ></v-text-field>
        <Icon name="phone" size="20" />
        <span>
          <v-badge class="mx-1" dot color="error" location="bottom right">
            <Icon name="handbag" size="20" />
          </v-badge>
        </span>
      </v-row>
    </v-container>
    <v-dialog v-model="searchDialog">
      <v-card class="mx-auto overflow-hidden" max-width="400">
        <v-text-field
          v-model="searchText"
          placeholder="Nhập thông tin tìm kiếm"
          style="max-width: 400px; min-width: 300px"
          append-inner-icon="mdi-close"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          single-line
          hide-details
          variant="plain"
          @click:append-inner="searchDialog = false"
        ></v-text-field>
      </v-card>
      <div style="min-height: 10px; background-color: transparent"></div>
      <v-card>
        <div
          v-if="searchItems.pending || !searchItems.data"
          class="d-flex justify-center align-center"
        >
          <div class="char">L</div>
          <div class="char">o</div>
          <div class="char">a</div>
          <div class="char">d</div>
          <div class="char">i</div>
          <div class="char">n</div>
          <div class="char">g</div>
          <div class="char">.</div>
          <div class="char">.</div>
          <div class="char">.</div>
        </div>
        <div v-else-if="searchText">
          <h4 class="pa-4 text-body-1 font-weight-bold">
            <p v-if="searchItems.data.total > 0">
              Danh sách 10 trên tổng {{ searchItems.data.total }} kết quả
            </p>
            <p v-else class="text-error">Không tìm thấy sản phẩm</p>
          </h4>
          <div v-for="item in searchItems.data.results" class="px-5">
            <NuxtLink
              :to="`/san-pham/${item.id}`"
              class="d-flex align-center justify-between cursor-pointer"
            >
              <div class="d-flex align-center">
                <v-img
                  class="rounded-md"
                  width="80"
                  :alt="item.name"
                  :src="item.thumbnail"
                />
              </div>
              <div class="d-flex flex-column">
                <div class="text-caption font-weight-bold">{{ item.name }}</div>
                <div class="text-secondary">
                  {{ item.price.toLocaleString() }}đ
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
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
  NUXT_APP_GEMSTONE_TYPES,
  NUXT_APP_GIFT_FOR,
} from "~/data/headermenu";

import { API_POST_PRODUCTS } from "~/server/api/constant";

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
  "Đá quý",
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

const gemstoneMenuData = [
  {
    title: "Chủng loại",
    size: 2,
    listItem: NUXT_APP_GEMSTONE_TYPES.split(","),
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
    case "Đá quý":
      activeItemComponent.value = "PopHoverCard";
      menuData.value = gemstoneMenuData;
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
 * *Fetching data
 */
const { searchBody } = useProducts();
const searchText = ref("");
const searchItems = ref([]);
const searchDialog = ref(false);

const searchByName = useDebounce(async () => {
  searchItems.value = await useFetch(() => API_POST_PRODUCTS, {
    ...searchBody(1, searchText.value),
    transform: (data) => data.result,
  });
}, 1000);

watch(
  () => searchText.value,
  async () => {
    if (!searchText.value) {
      setTimeout(() => {
        searchItems.value = "";
        return;
      }, 500);
    }
    searchByName();
  }
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
.char {
  font-size: 30px;
  color: #5d87ff;
  display: inline-block;
  transition: all 0.9s;
  animation: animate 1.5s infinite;
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.5s;
  }
  &:nth-child(5) {
    animation-delay: 0.6s;
  }
  &:nth-child(6) {
    animation-delay: 0.8s;
  }
  &:nth-child(7) {
    animation-delay: 0.9s;
  }
  &:nth-child(8) {
    animation-delay: 1s;
  }
  &:nth-child(9) {
    animation-delay: 1.2s;
  }
  &:nth-child(10) {
    animation-delay: 1.4s;
  }
}
@keyframes animate {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}
@media only screen and (max-width: 767px) {
  .app-header-desktop {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .app-header-desktop {
    display: none;
  }
}
@media only screen and (min-width: 1024px) {
  .app-header-mobile-tablet {
    display: none;
  }
}
</style>
<style></style>
