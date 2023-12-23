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
    <h2 class="text-h5 text-md-h3 text-center">
      Đang đọc thông tin sản phẩm ...
    </h2>
  </div>
  <div class="d-flex flex-column justify-center align-center" v-else>
    <v-breadcrumbs :items="breadCrumbItems"></v-breadcrumbs>
    <v-container fluid>
      <v-row
        v-if="productInPage.result.results.length > 0"
        class="d-flex justify-center align-center"
      >
        <v-col
          v-for="(product, index) in productInPage.result.results"
          :key="product.name + index"
          sm="3"
          xs="6"
          lg="2"
          cols="6"
        >
          <ProductSimpleCardItem :singleProduct="product" />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <h3 class="text-center text-error text-h5">
            Hiện chưa có sản phẩm nào cho danh mục này
          </h3>
        </v-col>
      </v-row>
    </v-container>
    <v-pagination
      v-model="page"
      class="mt-5"
      :size="mdAndUp ? 'default' : 'x-small'"
      :length="Math.ceil(productInPage.result.total / 48)"
      :total-visible="mdAndUp ? 10 : smAndUp ? 7 : 5"
    ></v-pagination>
  </div>
</template>

<script setup>
import { ProductSimpleCardItem } from "#components";
import { API_POST_PRODUCTS } from "~/server/api/constant";
import { useDisplay } from "vuetify";
import { useProductCat } from "~/stores/productCat";
const productCats = useProductCat();

const route = useRoute();
const page = ref(1);
// const productInPage = ref(null);
const { postBody } = useProducts();
const { mdAndUp, smAndUp } = useDisplay();

/**
 * *Init value on first load
 */
const { data: productInPage, pending } = await useAsyncData(
  "products",
  () =>
    $fetch(API_POST_PRODUCTS, {
      ...postBody(
        page.value - 1,
        48,
        productCats.productGroup.id,
        productCats.productSubGroup.id,
        productCats.productType.id
      ),
    }),
  {
    watch: [page],
  }
);
const breadCrumbItems = [
  "Trang chủ",
  productCats.productGroup.name,
  productCats.productSubGroup.name,
  productCats.productType.name,
];
// productInPage.value = await useFetch(() => API_POST_PRODUCTS, {
//   ...postBody(
//     page - 1,
//     productCats.productGroup,
//     productCats.productSubGroup,
//     productCats.productType
//   ),
//   transform: (data) => data.result,
// });

/**
 * *watch when change page
 */
// watch(page, async () => {
//   productInPage.value = await useFetch(() => API_POST_PRODUCTS, {
//     ...postBody(page.value - 1),
//     transform: (data) => data.result,
//   });
// });

useSeoMeta({
  title: `HAJ - ${
    productCats.productGroup.name +
    " " +
    productCats.productSubGroup.name +
    " " +
    productCats.productType.name
  }`,
});
</script>

<style lang="scss" scoped></style>
