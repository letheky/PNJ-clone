<template>
  <div v-if="pending">
    <v-progress-linear
      class="my-5"
      color="light-blue-darken-3"
      indeterminate
      rounded
      rounded-bar
      height="6"
    ></v-progress-linear>
    <h2 class="text-center">Đang lấy sản phẩm ...</h2>
  </div>
  <div class="d-flex flex-column justify-center align-center" v-else>
    <v-breadcrumbs :items="['Trang chủ', 'Nhẫn']"></v-breadcrumbs>
    <v-container fluid>
      <v-row class="d-flex justify-center align-center">
        <v-col
          v-for="(product, index) in products.result.results"
          :key="product.name + index"
          sm="3"
          xs="6"
          lg="2"
          cols="6"
        >
          <ProductSimpleCardItem :singleProduct="product" />
        </v-col>
      </v-row>
    </v-container>
    <v-pagination
      class="mt-5"
      v-model="page"
      :length="Math.ceil(products.result.total / 10)"
      :total-visible="10"
    ></v-pagination>
  </div>
</template>

<script setup>
import { ProductSimpleCardItem } from "#components";
import { ref } from "vue";
import { API_POST_PRODUCTS } from "~/server/api/products";

const runTimeConfig = useRuntimeConfig();
const page = ref(0);
// const route = useRoute();
// const name = route.fullPath.substring(route.fullPath.lastIndexOf("/") + 1);

const {
  pending,
  data: products,
  refresh,
} = await useFetch(API_POST_PRODUCTS, {
  baseURL: runTimeConfig.public.apiBase,
  method: "POST",
  body: {
    pageNum: page,
    pageSize: 10,
    productGroupId: 1,
    subGroupId: 1,
    productTypeId: 1,
  },
});
</script>

<style lang="scss" scoped></style>
