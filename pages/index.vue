<template>
  <div>
    <div class="mobile-border-bottom">
      <Carousel :carouselItems="carouselItems" />
      <ImageSlider :imageSliderItems="imageSliderItems" />
    </div>
    <SearchTrend class="mobile-border-bottom" />
    <ActiveBrand
      class="mobile-border-bottom"
      :activeBrandItems="activeBrandItems"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

import {
  ActiveBrand,
  Carousel,
  ImageSlider,
  ProductListCard,
  ProductListWithCollection,
  ProductsList,
  SearchTrend,
  StoreDetail,
  WhyUs,
  ProductCardItemNew,
  ProductSimpleCardItem,
} from "#components";

import { API_POST_PRODUCTS } from "~/server/api/products";
import {
  NUXT_APP_ACCESSORIES_TYPES,
  NUXT_APP_ACCESSORIES_LIST,
} from "~/data/headermenu";
import { HOT_SALE, NEW_SALE } from "~/data/products";

const runTimeConfig = useRuntimeConfig();
const { lgAndDown } = useDisplay();


const hotSearch = NUXT_APP_ACCESSORIES_TYPES.split(",");
const hotSearchEdit = [];

for (let i = 0; i < hotSearch.length; i += 2) {
  const pair = [hotSearch[i], hotSearch[i + 1]];
  hotSearchEdit.push(pair);
}
const topSale = HOT_SALE;
const newSale = NEW_SALE;
const renderList = NUXT_APP_ACCESSORIES_LIST.split(",");

const { data: products } = await useFetch(() => API_POST_PRODUCTS, {
  baseURL: runTimeConfig.public.apiBase,
  method: "POST",
  body: {
    pageNum: 1,
    pageSize: 10,
    productGroupId: 1,
    subGroupId: 1,
    productTypeId: 1,
  },
});
const { data: products2 } = await useFetch(() => API_POST_PRODUCTS, {
  baseURL: runTimeConfig.public.apiBase,
  method: "POST",
  body: {
    pageNum: 2,
    pageSize: 10,
    productGroupId: 1,
    subGroupId: 1,
    productTypeId: 1,
  },
});
const carouselItems = [
  {
    src: "https://cdn.pnj.io/images/promo/193/16-blackfridayonline.jpg",
    title: "PNJ big sale cho Black Friday",
  },
  {
    src: "https://cdn.pnj.io/images/promo/192/T11_-_CT_BLACK_FRIDAY-1972x640CTA.jpg",
    title: "BÙNG NỔ ƯU ĐÃI - CHỚP DEAL SIÊU ĐỈNH",
  },
  {
    src: "https://cdn.pnj.io/images/promo/191/tabsale-chung-t11-1972x640-CTA.png",
    title: "ĐÓN ƯU ĐÃI VÔ CỰC – HÒA SẮC CÙNG THẦN TƯỢNG 2023",
  },
  {
    src: "https://cdn.pnj.io/images/promo/192/pnjfast-1972x640CTA.jpg",
    title: "Sở hữu trang sức yêu thích chỉ trong 3h",
  },
  {
    src: "https://cdn.pnj.io/images/promo/173/egift-t7-1972x640CTA__1_.jpg",
    title: "Phiếu quà tặng PNJ E-Gift",
  },
];

const imageSliderItems = [
  {
    src: "https://cdn.pnj.io/images/promo/191/combo-t11-fix-banner.jpg",
    title: "Ưu đãi combo trang sức",
  },
  {
    src: "https://cdn.pnj.io/images/promo/184/Banner_BST_Trau_Cau__494x247_.png",
    title: "BST TRẦU CAU",
  },
  {
    src: "https://cdn.pnj.io/images/promo/191/sanrio-t11-494x247.jpg",
    title: "BST Hello Kitty Vol 3",
  },
];
const activeBrandItems = [
  {
    src: "https://cdn.pnj.io/images/promo/166/style-t5-1200x1200.png",
    title: "Style by PNJ",
  },
  {
    src: "https://cdn.pnj.io/images/promo/148/block-brands-disney.png",
    title: "Disney|PNJ",
  },
  {
    src: "https://cdn.pnj.io/images/promo/191/sanrio-t11-1200x1200.jpg",
    title: "HELLO KITTY",
  },
  {
    src: "https://cdn.pnj.io/images/promo/148/block-brands-watch.png",
    title: "Watch",
  },
];
</script>

<style lang="scss" scoped>

@media only screen and (max-width:1023px) {
  .mobile-border-bottom {
  border-bottom: 5px solid #f1f1f1;
  padding-bottom: 10px;
  box-sizing: border-box;
}
}
</style>
