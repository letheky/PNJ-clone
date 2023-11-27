<template>
  <div>
    <v-container class="px-5 py-5">
      <h3 class="text-h4" style="color: #003468">{{ listTitle }}</h3>
      <v-row align="center">
        <v-col cols="12" md="4">
          <v-img
            cover
            class="my-5"
            style="
              box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.35);
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.35);
            "
            alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
            :lazy-src="dynamicSrc"
            :src="dynamicSrc"
          ></v-img>
        </v-col>
        <v-col cols="12" md="8" class="d-flex justify-center-align-center ga-10 flex-column">
          <v-sheet class="mx-auto d-none d-lg-flex" max-width="100%">
            <v-slide-group class="pa-4" show-arrows>
              <v-slide-group-item
                v-for="(item, index) in productList"
                :key="index"
              >
                <v-col style="max-width: 200px">
                  <ProductSimpleCardItem :singleProduct="item" />
                </v-col>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
          <div class="scroll-container mx-auto d-lg-none">
            <v-col
              style="max-width: 200px"
              v-for="(item, index) in productList"
              :key="index"
            >
              <ProductSimpleCardItem :singleProduct="item" />
            </v-col>
          </div>
          <div class="mx-auto">
            <v-btn color="primary" variant="outlined" > Xem thêm</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ProductSimpleCardItem } from "#components";
import { useDisplay } from "vuetify";

const { width, mdAndDown } = useDisplay();
const responsiveHeight = Math.floor(width.value / 2);

const dynamicSrc = mdAndDown.value
  ? "https://cdn.pnj.io/images/promo/192/BANNER_OMNI_SUNNYVA__750x375_.jpg"
  : "/images/banners/collection.jpg";

const props = defineProps({
  listTitle: String,
  productList: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: darkgray lightgray;
  white-space: nowrap;
  width: 100%; /* Adjust width to fill the available space */
  max-width: 1500px;
}
</style>
