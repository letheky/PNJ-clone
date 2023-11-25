<template>
  <v-card
    class="mx-auto my-12"
    max-width="290"
    style="background: linear-gradient(to bottom, #fff 0%, #f7f7f7 100%)"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="250" :lazy-src="product.src" :src="product.src"></v-img>
    <v-row class="d-flex justify-space-between mt-n10">
      <v-col>
        <v-img
          v-if="product.isInstallment"
          class="ml-n7"
          height="30"
          :lazy-src="traGopImg"
          :src="traGopImg"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          v-if="product.isFastDeli"
          class="ml-8"
          height="30"
          :lazy-src="giaoHangNhanhImg"
          :src="giaoHangNhanhImg"
        ></v-img>
      </v-col>
    </v-row>
    <v-card-item class="text-center">
      <v-card-title class="text-subtitle-1 text-wrap">{{
        product.name + " " + product.code
      }}</v-card-title>

      <v-card-subtitle>
        <span
          class="text-subtitle-1"
          style="color: #c48c46; font-weight: 900"
          >{{ product.price.toLocaleString() + " đ" }}</span
        >
        <p
          class="mt-1 text-subtitle-2"
          style="color: #d50000; font-weight: 600"
        >
          {{ product.discount }}
        </p>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="d-flex align-center">
          <v-rating
            :length="1"
            :model-value="0.8"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>
          <p class="text-center text-grey ms-1">4.5 ({{ product.rateNum }})</p>
        </div>
        <v-spacer></v-spacer>
        <p class="text-subtitle-2 text-center text-grey ms-1">
          {{ product.sold }}+ đã bán
        </p>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
const { product } = defineProps(["product"]);

const traGopImg = "/images/others/icon-tragop.svg";
const giaoHangNhanhImg = "/images/others/icon-giaohang.svg";
</script>

<style lang="scss" scoped></style>
