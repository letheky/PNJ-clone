<template>
  <div>
    <v-card width="80vw">
      <v-card-title class="d-flex justify-center align-center py-5 mx-5">
        <v-row>
          <v-col v-for="(item, index) in menuData" :key="item + index">
            <h6 class="text-h6">{{ item.name }}</h6>
            <ul>
              <li
                v-for="(childItem, index) in item.listItem"
                :key="childItem + index"
              >
                <NuxtLink
                  prefetch
                  :to="vnUrl(childItem.name)"
                  @click="setProductCats(item, childItem)"
                  >{{ childItem.name }}</NuxtLink
                >
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
  </div>
</template>

<script setup>
import { useProductCat } from "~/stores/productCat";
const productCats = useProductCat();
const { menuData } = defineProps(["menuData"]);
const { vnUrl } = slugifyUrl();

const setProductCats = (item1, item2) => {
  productCats.productSubGroup = item1;
  productCats.productType = item2;
};
</script>

<style lang="scss" scoped>
a,
h6 {
  cursor: pointer;
  font-size: 12px;
  color: #282828;
  position: relative;
  -moz-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-transform: capitalize;
  &:hover {
    color: #caaa6e;
  }
}
</style>
