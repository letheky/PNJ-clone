<template>
  <div>
    <v-row class="px-10 py-5">
      <span class="d-flex flex-grow-1">
        <h3 class="text-h4" style="color: #003468">{{ listTitle }}</h3>
        <v-spacer></v-spacer>
        <span
          class="d-flex align-center"
          style="border-bottom: 1px solid #424242"
        >
          <NuxtLink class="text-h5" style="color: #424242" to="/"
            >Xem thêm</NuxtLink
          >
          <IconCSS name="chevronRight" class="mr-n2" />
        </span>
      </span>
      <v-sheet class="mx-auto" max-width="100%">
        <v-slide-group mobile-breakpoint="sm" class="pa-4" show-arrows>
          <v-slide-group-item v-for="(item, index) in productList" :key="index">
            <v-col>
              <ProductSimpleCardItem :product="item" />
            </v-col>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
  </div>
</template>

<script setup>
import { ProductSimpleCardItem } from "#components";
const { listTitle, productList } = defineProps({
  listTitle: String,
  productList: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
