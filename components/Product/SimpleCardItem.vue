<template>
  <div>
    <NuxtLink :to="`/san-pham/${singleProduct.id}`">
      <v-card
        class="mx-auto"
        style="background: linear-gradient(to bottom, #fff 0%, #f7f7f7 100%)"
      >
        <div class="d-flex justify-center align-center">
          <NuxtImg
            v-if="singleProduct.thumbnailFullPath"
            :src="singleProduct.thumbnailFullPath"
            :alt="singleProduct.name"
            :title="singleProduct.name"
            preset="product"
            width="150"
            height="150"
          />
        </div>
        <div class="px-2 px-sm-3 text-center">
          <h3
            class="text-md-subtitle-1 text-subtitle-2 two-line-ellipsis text-wrap"
          >
            {{ singleProduct.name }}
          </h3>
          <p>
            <span
              class="text-md-subtitle-1 text-subtitle-2 mb-1"
              style="color: #c48c46; font-weight: 900"
              >{{ singleProduct.price.toLocaleString() + " đ" }}</span
            >
          </p>
        </div>
      </v-card>
    </NuxtLink>
  </div>
</template>

<script setup>
const { singleProduct } = defineProps(["singleProduct"]);
</script>

<style lang="scss" scoped></style>
