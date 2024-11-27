<template>
  <div class="overlay-footer-mobile-tablet">
    <v-footer app elevation="8" height="60" style="padding: 0">
      <v-row class="text-center">
        <v-col col="6">
          <!-- {{ firtItem }} -->
          <NuxtLink :to="firtItem.path">
            <div class="overlay-item" @click="setActive(firtItem.iconName)">
              <IconCSS
                :name="firtItem.iconName"
                :style="{
                  color: selectedItem === firtItem.iconName ? '#003468' : '',
                }"
              />
              <p
                v-text="firtItem.iconTitle"
                :style="{
                  color: selectedItem === firtItem.iconName ? '#003468' : '',
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
                  <IconCSS :name="restArr[0].iconName" />
                </v-list-item-title>
                <v-list-item-subtitle v-text="restArr[0].iconTitle">
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
              <NuxtLink target="_blank" :to="contactInfo.result[0].url">
                <v-img
                  max-width="50"
                  width="50"
                  height="50"
                  cover
                  alt="HAJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                  src="/images/logos/messenger.svg"
                ></v-img>
              </NuxtLink>
              <NuxtLink target="_blank" :to="contactInfo.result[1].url">
                <v-img
                  max-width="50"
                  width="50"
                  height="50"
                  cover
                  alt="HAJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                  src="/images/logos/zalo.svg"
                ></v-img>
              </NuxtLink>
            </v-card>
          </v-menu>
        </v-col>
        <v-col>
          <div class="overlay-item" @click.stop="menuDrawer = !menuDrawer">
            <v-list-item-title>
              <IconCSS :name="restArr[restArr.length - 1].iconName" />
            </v-list-item-title>
            <v-list-item-subtitle
              v-text="restArr[restArr.length - 1].iconTitle"
            >
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
            <h6>{{ item.name }}</h6>
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
        <h5 class="text-center">{{ subMenuTitle.name }}</h5>
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
                <h6>{{ item.name }}</h6>
                <v-spacer></v-spacer>
                <Icon :name="isSelected ? 'chevronUp' : 'chevronDown'" />
              </div>
              <div>
                <TransitionToggleFade>
                  <ul class="text-subtitle-2 px-5 pb-2" v-show="isSelected">
                    <li
                      v-for="(page, index) in item.listItem"
                      :key="page + index"
                      class="py-1"
                    >
                      <NuxtLink
                        prefetch
                        :to="vnUrl(page.name)"
                        @click="setProductCats(item, page)"
                        style="color: black"
                        >{{ page.name }}</NuxtLink
                      >
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
import {
  NUXT_APP_PRODUCT_GROUP,
  NUXT_APP_PRODUCT_SUBGROUP_ONE,
  NUXT_APP_PRODUCT_SUBGROUP_TWO,
  NUXT_APP_PRODUCT_SUBGROUP_THREE,
  NUXT_APP_PRODUCT_SUBGROUP_FOUR,
  NUXT_APP_PRODUCT_TYPE_ONE_ONE,
  NUXT_APP_PRODUCT_TYPE_ONE_TWO,
  NUXT_APP_PRODUCT_TYPE_ONE_THREE,
  NUXT_APP_PRODUCT_TYPE_ONE_FOUR,
  NUXT_APP_PRODUCT_TYPE_TWO_ONE,
  NUXT_APP_PRODUCT_TYPE_TWO_TWO,
  NUXT_APP_PRODUCT_TYPE_TWO_THREE,
  NUXT_APP_PRODUCT_TYPE_TWO_FOUR,
  NUXT_APP_PRODUCT_TYPE_TWO_FIVE,
  NUXT_APP_PRODUCT_TYPE_THREE_ONE,
  NUXT_APP_PRODUCT_TYPE_THREE_TWO,
  NUXT_APP_PRODUCT_TYPE_THREE_THREE,
  NUXT_APP_PRODUCT_TYPE_FOUR_ONE,
  NUXT_APP_PRODUCT_TYPE_FOUR_TWO,
  NUXT_APP_PRODUCT_TYPE_FOUR_THREE,
  NUXT_APP_PRODUCT_TYPE_FOUR_FOUR,
  NUXT_APP_PRODUCT_TYPE_FOUR_FIVE,
} from "~/data/headermenu";

//import product categories store
import { useProductCat } from "~/stores/productCat";
const productCats = useProductCat();

const { vnUrl } = slugifyUrl();
const route = useRoute();

const iconList = [
  { iconName: "home", iconTitle: "Trang chủ", path: "/" },
  { iconName: "phoneCall", iconTitle: "Liên hệ" },
  { iconName: "menu", iconTitle: "Danh mục" },
];

const firtItem = computed(() => iconList[0]);
const restArr = computed(() => iconList.slice(-2));

//Set active item in overlayfooter
let selectedItem = ref();
const setActive = (item) => {
  selectedItem = item;
};
const firstActiveRoute = () => {
  switch (route.path) {
    case "/":
      setActive("home");
      break;
    default:
      setActive("");
      break;
  }
};
firstActiveRoute();

const { getContactInfo } = useContact();
const { data: contactInfo } = await getContactInfo();
/**
 * * setup for menu onclick
 */
const menuDrawer = ref(false);
const secondMenuDrawer = ref(false);
const subMenuTitle = ref("");
const menuData = ref([]);
const openSubMenu = (item) => {
  secondMenuDrawer.value = true;
  subMenuTitle.value = item.name;
  productCats.productGroup = item;
};
const setProductCats = (item1, item2) => {
  productCats.productSubGroup = item1;
  productCats.productType = item2;
};

watch(subMenuTitle, (newValue) => {
  switch (newValue) {
    case "Trang sức":
      menuData.value = accessMenuData;
      break;
    case "Trang sức cưới":
      menuData.value = weddAccessMenuData;
      break;
    case "Đá quý tự nhiên":
      menuData.value = gemstoneMenuData;
      break;
    case "Quà tặng":
      menuData.value = giftMenuData;
      break;
    default:
      menuData.value = accessMenuData;
      break;
  }
});

const menuTitle = NUXT_APP_PRODUCT_GROUP;
const menuSubTitle = [
  // { subTitleName: "Blog", path: "/blog" },
  // { subTitleName: "Khuyến mãi", path: "/coupon" },
  // { subTitleName: "Dịch vụ", path: "/services" },
  // { subTitleName: "Hệ thống cửa hàng", path: "/stores" },
  { subTitleName: "Về PNJ", path: "/about" },
];

/**
 * *group: 1
 */
const productTypeOne = [
  NUXT_APP_PRODUCT_TYPE_ONE_ONE,
  NUXT_APP_PRODUCT_TYPE_ONE_TWO,
  NUXT_APP_PRODUCT_TYPE_ONE_THREE,
  NUXT_APP_PRODUCT_TYPE_ONE_FOUR,
];

const accessMenuData = NUXT_APP_PRODUCT_SUBGROUP_ONE.map((el, index) => {
  return {
    ...el,
    listItem: productTypeOne[index],
  };
});
/**
 * *group: 2
 */
const productTypeTwo = [
  NUXT_APP_PRODUCT_TYPE_TWO_ONE,
  NUXT_APP_PRODUCT_TYPE_TWO_TWO,
  NUXT_APP_PRODUCT_TYPE_TWO_THREE,
  NUXT_APP_PRODUCT_TYPE_TWO_FOUR,
  NUXT_APP_PRODUCT_TYPE_TWO_FIVE,
];

const weddAccessMenuData = NUXT_APP_PRODUCT_SUBGROUP_TWO.map((el, index) => {
  return {
    ...el,
    listItem: productTypeTwo[index],
  };
});

/**
 * *group: 3
 */
const productTypeThree = [
  NUXT_APP_PRODUCT_TYPE_THREE_ONE,
  NUXT_APP_PRODUCT_TYPE_THREE_TWO,
  NUXT_APP_PRODUCT_TYPE_THREE_THREE,
];

const gemstoneMenuData = NUXT_APP_PRODUCT_SUBGROUP_THREE.map((el, index) => {
  return {
    ...el,
    listItem: productTypeThree[index],
  };
});

/**
 * *group: 4
 */
const productTypeFour = [
  NUXT_APP_PRODUCT_TYPE_FOUR_ONE,
  NUXT_APP_PRODUCT_TYPE_FOUR_TWO,
  NUXT_APP_PRODUCT_TYPE_FOUR_THREE,
  NUXT_APP_PRODUCT_TYPE_FOUR_FOUR,
  NUXT_APP_PRODUCT_TYPE_FOUR_FIVE,
];

const giftMenuData = NUXT_APP_PRODUCT_SUBGROUP_FOUR.map((el, index) => {
  return {
    ...el,
    listItem: productTypeFour[index],
  };
});
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
