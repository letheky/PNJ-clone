<template>
  <div>
    <v-container>
      <v-row class="px-5 py-5">
        <span class="d-flex flex-grow-1 align-center">
          <p class="text-h4" style="color: #003468">{{ listTitle }}</p>
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
          <v-col style="max-width: 200px" v-for="(item, index) in productList" :key="index">
            <ProductSimpleCardItem :singleProduct="item" />
          </v-col>
        </div>
      </v-row>
    </v-container>
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
