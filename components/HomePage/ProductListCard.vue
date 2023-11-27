<template>
  <div>
    <v-container>
      <v-row v-for="(item, index) in productList" class="px-5 py-5">
        <v-img
          width="100%"
          cover
          class="mb-10"
          style="
            box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.35);
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.35);
          "
          :alt="item.title"
          :lazy-src="item.src"
          :src="item.src"
        ></v-img>
        <h3 class="text-h4 mx-auto" style="color: #003468">{{ item.title }}</h3>

        <v-sheet class="mx-auto d-none d-lg-flex" max-width="100%">
          <v-slide-group class="pa-4" show-arrows>
            <v-slide-group-item
              v-for="(childItem, index) in getProductListCopy(item.productList)"
              :key="index"
            >
              <v-col style="max-width: 200px">
                <ProductSimpleCardItem :singleProduct="childItem" />
              </v-col>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
        <div class="scroll-container mx-auto d-lg-none">
          <v-col
            style="max-width: 200px"
            v-for="(childItem, index) in getProductListCopy(item.productList)"
            :key="index"
          >
            <ProductSimpleCardItem :singleProduct="childItem" />
          </v-col>
        </div>
        <div class="mx-auto">
          <v-btn class="mt-5" color="primary" variant="outlined"
            >Xem thêm</v-btn
          >
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ProductSimpleCardItem } from "#components";

const getProductListCopy = (list) => {
  return list.value.map((childItem) => {
    return { ...childItem };
  });
};

const { productList } = defineProps({
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
