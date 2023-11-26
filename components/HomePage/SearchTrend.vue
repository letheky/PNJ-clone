<template>
  <div>
    <v-row class="px-10 py-5">
      <h3 class="text-h4" style="color: #003468">Xu hướng tìm kiếm</h3>
      <v-sheet class="mx-auto" max-width="100%">
        <v-slide-group
          mobile-breakpoint="sm"
          class="responsive-home-page-desktop pa-4"
          show-arrows
        >
          <v-slide-group-item v-for="(item, index) in hotSearch" :key="index">
            <div
              class="mt-4 ml-10 d-flex flex-column align-center justify-center"
            >
              <v-img
                width="120"
                class="responsive-desktop-tablet-image"
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                lazy-src="/images/products/nhan-ecz.png"
                src="/images/products/nhan-ecz.png"
              ></v-img>
              <v-card-subtitle class="mt-4">{{ item }}</v-card-subtitle>
            </div>
          </v-slide-group-item>
        </v-slide-group>
        <v-row>
          <div
            class="mt-4 responsive-home-page-mobile-tablet scroll-container ga-2"
          >
            <div
              v-for="(item, index) in hotSearchEdit"
              :key="index"
              class="responsive-home-page-search-trend mt-4 d-flex flex-column align-center justify-center"
            >
              <div class="d-flex flex-column align-center justify-center">
                <v-img
                  width="75"
                  class="responsive-desktop-tablet-image"
                  alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                  lazy-src="/images/products/nhan-ecz.png"
                  src="/images/products/nhan-ecz.png"
                ></v-img>
                <v-card-subtitle class="my-2 text-center" style="width: 100%">{{
                  item[0]
                }}</v-card-subtitle>
              </div>
              <div class="d-flex flex-column align-center justify-center">
                <v-img
                  width="75"
                  class="responsive-desktop-tablet-image"
                  alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                  lazy-src="/images/products/nhan-ecz.png"
                  src="/images/products/nhan-ecz.png"
                ></v-img>
                <v-card-subtitle class="mt-2 text-center" style="width: 100%">{{
                  item[1]
                }}</v-card-subtitle>
              </div>
            </div>
          </div>
        </v-row>
      </v-sheet>
    </v-row>
  </div>
</template>

<script setup>
import {
  NUXT_APP_ACCESSORIES_TYPES,
  NUXT_APP_ACCESSORIES_LIST,
} from "~/data/headermenu";
const hotSearch = NUXT_APP_ACCESSORIES_TYPES.split(",");
const hotSearchEdit = [];

for (let i = 0; i < hotSearch.length; i += 2) {
  const pair = [hotSearch[i], hotSearch[i + 1]];
  hotSearchEdit.push(pair);
}

</script>

<style lang="scss" scoped></style>
