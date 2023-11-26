<template>
  <div>
    <v-row class="px-10 py-5">
      <h3 class="text-h4" style="color: #003468">{{ listTitle }}</h3>
      <v-sheet class="mt-10 d-flex mx-auto px-10 align-center" max-width="100%">
        <v-img
          width="400"
          cover
          class="responsive-desktop-tablet-image mb-10"
          style="
            box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.35);
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.35);
          "
          alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
          lazy-src="/images/banners/collection.jpg"
          src="/images/banners/collection.jpg"
        ></v-img>
        <div class="text-center">
          <v-slide-group mobile-breakpoint="sm" class="pa-4" show-arrows>
            <v-slide-group-item
              v-for="(item, index) in productList"
              :key="index"
            >
              <v-col>
                <ProductSimpleCardItem :product="item" />
              </v-col>
            </v-slide-group-item>
          </v-slide-group>
          <v-btn class="mt-n15" color="primary" variant="outlined"
            >Xem thêm</v-btn
          >
        </div>
      </v-sheet>
    </v-row>
  </div>
</template>

<script setup>
import { ProductSimpleCardItem } from "#components";
const props = defineProps({
  listTitle: String,
  productList: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
