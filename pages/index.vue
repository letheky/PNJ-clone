<template>
  <div>
    <Carousel />
  </div>
</template>

<script setup>
import { ref } from "vue";
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
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
  .responsive-home-page-desktop,
  .responsive-home-page-tablet,
  .responsive-home-page-tablet-desktop {
    display: none;
  }
  .responsive-home-page-images {
    width: 200px !important;
    height: 100px !important;
  }
  .responsive-home-page-search-trend {
    width: -webkit-calc(100% / 3.3);
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .responsive-home-page-desktop,
  .responsive-home-page-mobile {
    display: none;
  }
  .responsive-home-page-search-trend {
    width: 300px;
  }
}
@media only screen and (min-width: 1024px) {
  .responsive-home-page-mobile,
  .responsive-home-page-tablet,
  .responsive-home-page-mobile-tablet {
    display: none;
  }
}
</style>
