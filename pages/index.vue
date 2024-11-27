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
    <ProductsList
      class="mobile-border-bottom"
      v-if="firstProductList"
      :productList="firstProductList"
      listTitle="Sản phẩm bán chạy"
    />
    <ProductsList
      class="mobile-border-bottom"
      v-if="secondProductList"
      :productList="secondProductList"
      listTitle="Sản phẩm mới"
    />
    <ProductListWithCollection
      v-if="thirdProductList"
      :productList="thirdProductList"
      listTitle="Bộ sưu tập mới"
    />
    <ProductListCard :productList="productListCardItems" />
    <StoreDetail />
    <WhyUs />
  </div>
</template>

<script setup>
import { NUXT_APP_ACCESSORIES_LIST } from "~/data/headermenu";

import { API_POST_PRODUCTS } from "~/server/api/constant";

/**
 * Fetching data
 */
const { postBody } = useProducts();

const { data: firstProductList } = await useFetch(() => API_POST_PRODUCTS, {
  ...postBody(1, 10),
  transform: (data) => data.result.results,
});

const { data: secondProductList } = await useFetch(() => API_POST_PRODUCTS, {
  ...postBody(2, 10),
  transform: (data) => data.result.results,
});

const { data: thirdProductList } = await useFetch(() => API_POST_PRODUCTS, {
  ...postBody(3, 10),
  transform: (data) => data.result.results,
});

/**
 * * Hard code items for home page
 */
const carouselItems = [
  {
    src: "https://cdn.pnj.io/images/promo/193/16-blackfridayonline.jpg",
    title: "HAJ big sale cho Black Friday",
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
    title: "Phiếu quà tặng HAJ E-Gift",
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
    title: "Style by HAJ",
  },
  {
    src: "https://cdn.pnj.io/images/promo/148/block-brands-disney.png",
    title: "Disney|HAJ",
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

const accessoryTypes = NUXT_APP_ACCESSORIES_LIST.split(",");
const accessoryImages = [
  "https://cdn.pnj.io/images/promo/191/kimcuong-t11-1200x450CTA.jpg",
  "https://cdn.pnj.io/images/promo/191/ecz-t11-1200x450-cta.jpg",
  "https://cdn.pnj.io/images/promo/191/day-chuyen-t11-1200x450-CTA.jpg",
  "https://cdn.pnj.io/images/promo/191/ngoc-trai-t11-1200x450-2.jpg",
  "https://cdn.pnj.io/images/promo/189/Banner_Trang-suc-Cuoi__1200x450_.png",
  "https://cdn.pnj.io/images/promo/187/phong-thuy-t10-1200x450-CTA.jpg",
];
const productListCardItems = accessoryTypes.map((element, index) => {
  return {
    title: element,
    src: accessoryImages[index],
    productList:
      index % 2 === 0
        ? firstProductList
        : index % 3 === 0
        ? secondProductList
        : thirdProductList,
  };
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1023px) {
  .mobile-border-bottom {
    border-bottom: 5px solid #f1f1f1;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
}
</style>
