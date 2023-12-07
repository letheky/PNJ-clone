<template>
  <div v-if="productInPage.pending">
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
    <v-breadcrumbs :items="['Trang chủ', 'Nhẫn']"></v-breadcrumbs>
    <v-container fluid>
      <v-row class="d-flex justify-center align-center">
        <v-col
          v-for="(product, index) in productInPage.data.results"
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
      :size="mdAndUp ? 'default' : 'x-small'"
      :length="Math.ceil(productInPage.data.total / 10)"
      :total-visible="mdAndUp ? 10 : smAndUp ? 7 : 5"
    ></v-pagination>
  </div>
</template>

<script setup>
import { ProductSimpleCardItem } from "#components";
import { API_POST_PRODUCTS } from "~/server/api/constant";
import { useDisplay } from "vuetify";

const route = useRoute()
const productInPage = ref(null);
const page = ref(1);
const { postBody } = useProducts();
const { mdAndUp, smAndUp } = useDisplay();

// const route = useRoute();
// const name = route.fullPath.substring(route.fullPath.lastIndexOf("/") + 1);

/**
 * *Init value on first load
 */
productInPage.value = await useFetch(() => API_POST_PRODUCTS, {
  ...postBody(page.value - 1),
  transform: (data) => data.result,
});

/**
 * *watch when change page
 */
watch(page, async () => {
  productInPage.value = await useFetch(() => API_POST_PRODUCTS, {
    ...postBody(page.value - 1),
    transform: (data) => data.result,
  });
});

useSeoMeta({
  title: route.path.slice(1)
})
</script>

<style lang="scss" scoped></style>
