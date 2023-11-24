<template>
  <div class="overlay-footer-mobile-tablet">
    <v-footer :app="true" elevation="8" height="60" style="padding: 0">
      <v-row class="text-center">
        <v-col v-for="(item, i) in firstThree" :key="i">
          <NuxtLink :to="item.path">
            <div class="overlay-item" @click="setActive(item.iconName)">
              <IconCSS
                :name="item.iconName"
                :style="{
                  color: selectedItem === item.iconName ? '#003468' : '',
                }"
              />
              <p
                v-text="item.iconTitle"
                :style="{
                  color: selectedItem === item.iconName ? '#003468' : '',
                }"
              ></p>
            </div>
          </NuxtLink>
        </v-col>
        <v-col>
          <v-menu
            transition="scale-transition"
            location="bottom center"
            origin="top center"
            offset="15"
            open-on-click
          >
            <template v-slot:activator="{ props }">
              <div class="overlay-item" v-bind="props">
                <v-list-item-title>
                  <IconCSS :name="restArr[1].iconName" />
                </v-list-item-title>
                <v-list-item-subtitle v-text="restArr[1].iconTitle">
                </v-list-item-subtitle>
              </div>
            </template>
            <!-- <div v-for="(item, index) in accesTypes" :key="index">
                  <NuxtLink class="menu-link" to="/">{{ item }}</NuxtLink>
                </div> -->
            <v-card
              width="60px"
              class="d-flex justify-center align-center flex-column rounded-pill"
              style="gap: 10px; padding-top: 10px"
            >
              <v-img
                max-width="50"
                width="50"
                height="50"
                cover
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                src="/images/logos/messenger.svg"
              ></v-img>
              <v-img
                max-width="50"
                width="50"
                height="50"
                cover
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                src="/images/logos/hotline.svg"
              ></v-img>
              <v-img
                max-width="50"
                width="50"
                height="50"
                cover
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                src="/images/logos/zalo.svg"
              ></v-img>
            </v-card>
          </v-menu>
        </v-col>
        <v-col>
          <div class="overlay-item" @click.stop="menuDrawer = !menuDrawer">
            <v-list-item-title>
              <IconCSS :name="restArr[2].iconName" />
            </v-list-item-title>
            <v-list-item-subtitle v-text="restArr[2].iconTitle">
            </v-list-item-subtitle>
          </div>
          <!-- <div v-for="(item, index) in accesTypes" :key="index">
                  <NuxtLink class="menu-link" to="/">{{ item }}</NuxtLink>
                </div> -->
        </v-col>
      </v-row>
    </v-footer>
    <v-navigation-drawer
      v-model="menuDrawer"
      temporary
      location="right"
      order="2"
      width="250"
    >
      <v-btn
        icon
        flat
        elevation="0"
        class="ml-auto d-flex align-center"
        @click.stop="menuDrawer = !menuDrawer"
        ><Icon name="closeCircle" size="20"
      /></v-btn>
      <v-divider></v-divider>
      <v-container>
        <v-row v-for="(item, index) in menuTitle" :key="index">
          <div
            class="menu-title py-1 px-2 d-flex align-center flex-grow-1"
            @click.stop="openSubMenu(item)"
          >
            <h6>{{ item }}</h6>
            <v-spacer></v-spacer>
            <Icon name="chevronRight" />
          </div>
          <v-divider></v-divider>
        </v-row>
        <v-row v-for="(item, index) in menuSubTitle" :key="index">
          <NuxtLink
            class="py-2 px-2 d-flex align-center flex-grow-1"
            :to="item.path"
          >
            <h6>{{ item.subTitleName }}</h6>
          </NuxtLink>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <a class="text-subtitle-2 py-2 px-2" href="tel:1800545457"
            >Hotline:
            <span style="color: #003468; text-decoration: underline"
              >1800545457</span
            >
            (Miễn phí)</a
          >
        </v-row>
      </v-container>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="secondMenuDrawer"
      temporary
      location="right"
      order="1"
      width="250"
    >
      <div
        class="menu-title d-flex align-center"
        @click.stop="secondMenuDrawer = !secondMenuDrawer"
      >
        <v-btn icon flat elevation="0"><Icon name="back" size="20" /> </v-btn>
        <h5 class="text-center">{{ subMenuTitle }}</h5>
      </div>
      <v-divider></v-divider>
      <v-item-group>
        <v-container>
          <v-row
            class="d-flex flex-column"
            v-for="(item, index) in menuData"
            :key="index"
          >
            <v-item v-slot="{ isSelected, toggle }">
              <div
                class="menu-title py-1 px-2 d-flex align-center flex-grow-1"
                @click="toggle"
              >
                <h6>{{ item.title }}</h6>
                <v-spacer></v-spacer>
                <Icon :name="isSelected ? 'chevronUp' : 'chevronDown'" />
              </div>
              <div>
                <TransitionToggleFade>
                  <ul class="text-subtitle-2 px-5 pb-2" v-show="isSelected">
                    <li
                      v-for="(page, index) in item.listItem"
                      :key="page + index"
                    >
                      <NuxtLink :to="page" style="color: black">{{
                        page
                      }}</NuxtLink>
                    </li>
                  </ul>
                </TransitionToggleFade>
              </div>
            </v-item>
            <v-divider></v-divider>
          </v-row>
        </v-container>
      </v-item-group>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TransitionToggleFade } from "#components";
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

const route = useRoute();

const iconList = [
  { iconName: "home", iconTitle: "Trang chủ", path: "/" },
  { iconName: "coupon", iconTitle: "Khuyến mãi", path: "/coupon" },
  { iconName: "profile", iconTitle: "Cá nhân", path: "/profile" },
  { iconName: "notification", iconTitle: "Thông báo" },
  { iconName: "phoneCall", iconTitle: "Liên hệ" },
  { iconName: "menu", iconTitle: "Danh mục" },
];

const firstThree = computed(() => iconList.slice(0, 3));
const restArr = computed(() => iconList.slice(-3));

//Set active item in overlayfooter
let selectedItem = ref();
const setActive = (item) => {
  selectedItem = item;
};
const firstActiveRoute = () => {
  switch (route.path) {
    case "/coupon":
      setActive("coupon");
      break;
    case "/profile":
      setActive("profile");
      break;
    case "/":
      setActive("home");
      break;
    default:
      setActive("");
      break;
  }
};
firstActiveRoute();

/**
 * * setup for menu onclick
 */
const menuDrawer = ref(false);
const secondMenuDrawer = ref(false);
const subMenuTitle = ref("");
const menuData = ref([]);
const openSubMenu = (item) => {
  secondMenuDrawer.value = true;
  subMenuTitle.value = item;
};

watch(subMenuTitle, (newValue) => {
  switch (newValue) {
    case "Trang sức":
      menuData.value = accessMenuData;
      break;
    case "Trang sức cưới":
      menuData.value = weddAccessMenuData;
      break;
    case "Đá quý":
      menuData.value = gemstoneMenuData;
      break;
    case "Quà tặng":
      menuData.value = giftMenuData;
      break;
    case "Thương hiệu":
      break;
  }
});

const menuTitle = [
  "Trang sức",
  "Trang sức cưới",
  "Đá quý",
  "Quà tặng",
  "Thương hiệu",
];
const menuSubTitle = [
  { subTitleName: "Blog", path: "/blog" },
  { subTitleName: "Khuyến mãi", path: "/coupon" },
  { subTitleName: "Dịch vụ", path: "/services" },
  { subTitleName: "Hệ thống cửa hàng", path: "/stores" },
  { subTitleName: "Về PNJ", path: "/about" },
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
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
}
@media only screen and (min-width: 1024px) {
  .overlay-footer-mobile-tablet {
    display: none;
  }
}

.v-list-item-subtitle {
  font-size: 0.7rem !important;
}
.v-col {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay-item {
  &:hover {
    cursor: pointer;
  }

  p {
    font-size: 12px;
  }
}
a {
  color: inherit;
  text-decoration: none;
}
.active-item {
  color: #003468;
  background-color: #003468;
}

.menu-title {
  &:hover {
    cursor: pointer;
  }
}

</style>
