<template>
  <div>
    <v-container>
      <v-row class="px-5 py-5">
        <h3 class="text-h4" style="color: #003468">Thương hiệu nổi bật</h3>
      </v-row>
    </v-container>
    <v-sheet class="d-none d-sm-flex mx-auto" max-width="100%">
      <v-slide-group class="scroll-container pa-4" show-arrows>
        <v-slide-group-item
          v-for="(item, index) in activeBrandItems"
          :key="index"
        >
          <div
            class="mt-4 ml-10 d-flex flex-column align-center justify-center"
          >
            <v-img
              :src="item.src"
              :alt="item.title"
              :width="responsiveHeight"
              :height="responsiveHeight"
              :lazy-src="item.src"
              :title="item.title"
            />
            <v-img
              width="180"
              cover
              class="responsive-desktop-tablet-image mt-n5 rounded mb-3 elevation-2"
              alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
              lazy-src="/images/brands/pnj disney-01.png"
              src="/images/brands/pnj disney-01.png"
            ></v-img>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <v-carousel
      class="d-sm-none"
      hide-delimiter-background
      color="#E0E0E0"
      interval="5000"
      height="480px"
      :show-arrows="false"
      touch
    >
      <v-carousel-item
        v-for="(item, index) in activeBrandItems"
        :key="index"
        eager
        cover
      >
        <v-sheet class="d-flex flex-column align-center justify-center">
          <NuxtImg
            fit="cover"
            :src="item.src"
            :alt="item.title"
            :title="item.title"
            preload
            preset="product"
            width="380"
          />
          <v-img
            width="180"
            cover
            class="responsive-desktop-tablet-image mt-n5 rounded mb-3 elevation-2"
            alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
            lazy-src="/images/brands/pnj disney-01.png"
            src="/images/brands/pnj disney-01.png"
          ></v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { lgAndDown, lgAndUp, xlAndUp } = useDisplay();

const responsiveHeight = xlAndUp.value ? 380 : lgAndUp.value ? 300 : 240;

const { activeBrandItems } = defineProps({
  activeBrandItems: {
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
  max-width: 100vw;
}
</style>
