<template>
  <div>
    <v-card
      class="mx-auto"
      style="background: linear-gradient(to bottom, #fff 0%, #f7f7f7 100%)"
    >
      <div class="d-flex justify-center align-center">
        <NuxtImg
          fit="cover"
          :src="singleProduct.thumbnail"
          :alt="singleProduct.name"
          preload
          preset="product"
          sizes="xs:175px sm:225px xl:300px"
        />
      </div>
      <div class="px-3 px-sm-2 text-center">
        <div class="text-responsive text-subtitle-1 two-line-ellipsis">
          {{ singleProduct.name }}
        </div>
        <div>
          <span
            class="text-responsive text-subtitle-1 mb-1"
            style="color: #c48c46; font-weight: 900"
            >{{ singleProduct.price.toLocaleString() + " đ" }}</span
          >
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
const { singleProduct } = defineProps(["singleProduct"]);
</script>

<style lang="scss" scoped>


</style>
