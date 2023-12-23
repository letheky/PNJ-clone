<template>
  <div>
    <v-container>
      <v-row class="d-flex flex-column px-5 py-5">
        <h3 class="text-h4" style="color: #003468">Xu hướng tìm kiếm</h3>
        <v-sheet class="mx-auto" max-width="100%">
          <v-slide-group class="d-none d-md-flex" show-arrows>
            <v-slide-group-item v-for="(item, index) in hotSearch" :key="index">
              <div
                class="mt-4 ml-10 d-flex flex-column align-center justify-center"
              >
                <v-img
                  width="120"
                  class="responsive-desktop-tablet-image bg-grey200 rounded-pill"
                  alt="HAJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                  :lazy-src="item.imgPath"
                  :src="item.imgPath"
                ></v-img>
                <v-card-subtitle class="mt-4">{{ item.name }}</v-card-subtitle>
              </div>
            </v-slide-group-item>
          </v-slide-group>
          <div class="mt-4 d-md-none scroll-container ga-2">
            <v-col
              v-for="(item, index) in hotSearchEdit"
              :key="index"
              class="responsive-home-page-search-trend mt-4 d-flex flex-column align-center justify-center"
            >
              <div class="d-flex flex-column align-center justify-center">
                <v-img
                  :width="mobile ? 50 : mdAndUp ? 100 : 75"
                  class="responsive-desktop-tablet-image bg-grey200 rounded-pill"
                  alt="HAJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                  :lazy-src="item[0].imgPath"
                  :src="item[0].imgPath"
                ></v-img>
                <v-card-subtitle
                  class="my-2 text-body-2 text-center"
                  style="width: 100%"
                  >{{ item[0].name }}
                </v-card-subtitle>
              </div>
              <div class="d-flex flex-column align-center justify-center">
                <v-img
                  :width="mobile ? 50 : mdAndUp ? 100 : 75"
                  class="responsive-desktop-tablet-image bg-grey200 rounded-pill"
                  alt="HAJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                  :lazy-src="item[1].imgPath"
                  :src="item[1].imgPath"
                ></v-img>
                <v-card-subtitle
                  class="mt-2 text-body-2 text-center"
                  style="width: 100%"
                  >{{ item[1].name }}</v-card-subtitle
                >
              </div>
            </v-col>
          </div>
        </v-sheet>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { NUXT_APP_PRODUCT_TYPE_ONE_ONE } from "~/data/headermenu";
import { useDisplay } from "vuetify";

const { mobile, mdAndUp } = useDisplay();

const hotSearch = NUXT_APP_PRODUCT_TYPE_ONE_ONE;
const listImg = [
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/114/gn0000w001540-nhan-vang-trang-y-18k-dinh-da-pnj-1.png",
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/194/sp-gd0000y009480-day-chuyen-vang-y-18k-pnj-1.png",
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/192/sp-gmpfxmw000294-mat-day-chuyen-vang-trang-14k-dinh-ngoc-trai-freshwater-pnj-1.png",
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/193/sp-gb0000y002749-bong-tai-vang-18k-pnj-1.png",
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/130/glxm00w000249-lac-tay-vang-trang-10k-dinh-da-ecz-pnj-01.png",
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/192/sp-svxmxmw060012-vong-tay-bac-dinh-da-pnjsilver-1.png",
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/191/sp-gi0000y060318-hat-charm-vang-14k-disney-pnj-mickey-1.png",
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/194/sp-gcxmxmh000071-day-co-vang-10k-dinh-da-ecz-style-by-pnj-1.png",
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/184/sp-ghxmxmy000036-kieng-cuoi-vang-18k-dinh-da-ecz-pnj-trau-cau-1.png",
  "https://cdn.pnj.io/images/thumbnails/300/300/detailed/92/gz0000y000305-vang-mieng-0.5-chi-24k-pnj-ong-tai-7.png",
];
hotSearch.forEach((el, index) => {
  el.imgPath = listImg[index];
});

const hotSearchEdit = [];

for (let i = 0; i < hotSearch.length; i += 2) {
  const pair = [hotSearch[i], hotSearch[i + 1]];
  hotSearchEdit.push(pair);
}
</script>

<style lang="scss" scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: darkgray lightgray;
  white-space: nowrap;
  width: 100%; /* Adjust width to fill the available space */
}
@media only screen and (max-width: 767px) {
  .responsive-home-page-search-trend {
    min-height: 82px;
    min-width: initial;
    width: 100%;
    max-width: 82px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .responsive-home-page-search-trend {
    width: 300px;
  }
}
</style>
