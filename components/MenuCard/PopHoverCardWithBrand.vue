<template>
  <div>
    <v-card width="70vw">
      <v-card-title class="pt-5 mx-5">
        <h6 class="text-h6">Thương hiệu</h6>
      </v-card-title>
      <v-card-subtitle class="pb-5 mx-5 d-flex align-center">
        <v-img
          v-for="(item, index) in 6"
          :key="index"
          max-width="70"
          cover
          alt="PNJ - Thương hiệu đồng hồ"
          lazy-src="/images/products/watch.svg"
          src="/images/products/watch.svg"
        ></v-img>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script setup></script>

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
