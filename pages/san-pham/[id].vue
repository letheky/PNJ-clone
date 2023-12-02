<template>
  <div>
    <h1>This is a product number {{ productDetail }}</h1>
  </div>
</template>

<script setup>
import { API_GET_PRODUCT_DETAIL } from "~/server/api/constant";

const route = useRoute();
const index = route.params.id
const { getByID } = useProducts();

const { data: productDetail } = await useFetch(() => API_GET_PRODUCT_DETAIL, {
  ...getByID(index)
});


</script>

<style lang="scss" scoped></style>
