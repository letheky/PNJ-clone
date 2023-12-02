<template>
  <div>
    <v-parallax src="/images/background/cuahangbanner.jpg">
      <NuxtLink
        class="d-flex flex-column fill-height justify-center align-center text-white"
        to="/stores"
      >
        <h1 class="text-h4 font-weight-thin mb-4">PNJ</h1>
        <h4 class="subheading">Xem cửa hàng của chúng tôi tại đây!</h4>
      </NuxtLink>
    </v-parallax>
    <div
      class="d-flex flex-column justify-center align-center text-white bg-grey-darken-4"
    >
      <v-img
        :aspect-ratio="6 / 1"
        width="90%"
        cover
        class="mb-3"
        alt="PNJ 35 năm"
        lazy-src="/images/background/Artboard1.jpg"
        src="/images/background/Artboard1.jpg"
      ></v-img>
      <!-- <NuxtImg
        sizes="200px xs:300px sm:500px md:700px lg:900px xl:1200px xxl:1500px"
        preset="banner"
        class="mb-2"
        alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
        title="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
        preload
        src="/images/background/Artboard1.jpg"
      ></NuxtImg> -->
      <v-sheet :height="responsiveHeight" style="width: 100%">
        <iframe
          src="https://www.youtube.com/embed/sv9ZjFedAJQ"
          loading="lazy"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
          width="100%"
          height="100%"
        ></iframe>
      </v-sheet>
    </div>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { mdAndUp, smAndUp } = useDisplay();
const responsiveHeight = mdAndUp.value ? 500 : smAndUp.value ? 400 : 300;
</script>

<style lang="scss" scoped></style>
