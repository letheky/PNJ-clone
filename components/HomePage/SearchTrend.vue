<template>
  <div>
    <v-container>
      <v-row class="d-flex flex-column px-5 py-5">
        <h3 class="text-h4" style="color: #003468">Xu hướng tìm kiếm </h3>
        <v-sheet class="mx-auto" max-width="100%">
          <v-slide-group class="d-none d-md-flex" show-arrows>
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
            <div class="mt-4 d-md-none scroll-container ga-2">
              <v-col
                v-for="(item, index) in hotSearchEdit"
                :key="index"
                class="responsive-home-page-search-trend mt-4 d-flex flex-column align-center justify-center"
              >
                <div class="d-flex flex-column align-center justify-center">
                  <v-img
                    :width="mobile ? 50 : mdAndUp ? 100 : 75"
                    class="responsive-desktop-tablet-image"
                    alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                    lazy-src="/images/products/nhan-ecz.png"
                    src="/images/products/nhan-ecz.png"
                  ></v-img>
                  <v-card-subtitle
                    class="my-2 text-body-2 text-center"
                    style="width: 100%"
                    >{{ item[0] }}
                  </v-card-subtitle>
                </div>
                <div class="d-flex flex-column align-center justify-center">
                  <v-img
                    :width="mobile ? 50 : mdAndUp ? 100 : 75"
                    class="responsive-desktop-tablet-image"
                    alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                    lazy-src="/images/products/nhan-ecz.png"
                    src="/images/products/nhan-ecz.png"
                  ></v-img>
                  <v-card-subtitle
                    class="mt-2 text-body-2 text-center"
                    style="width: 100%"
                    >{{ item[1] }}</v-card-subtitle
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
import {
  NUXT_APP_ACCESSORIES_TYPES,
  NUXT_APP_ACCESSORIES_LIST,
} from "~/data/headermenu";
import { useDisplay } from "vuetify";

const { mobile, mdAndUp, lgAndUp } = useDisplay();

const hotSearch = NUXT_APP_ACCESSORIES_TYPES.split(",");
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
