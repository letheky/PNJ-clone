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
    <v-sheet
      class="d-flex flex-column fill-height justify-center align-center text-white bg-grey-darken-4"
    >
      <v-img
        width="90%"
        cover
        class="responsive-desktop-tablet-image mb-10"
        alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
        lazy-src="/images/background/Artboard1.jpg"
        src="/images/background/Artboard1.jpg"
      ></v-img>
      <iframe
        class="mb-10 mt-n10"
        width="1200"
        height="450"
        src="https://www.youtube.com/embed/sv9ZjFedAJQ"
        title="PNJ 35 NĂM - GIỮ TRỌN NIỀM TIN, TÔN VINH VẺ ĐẸP"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </v-sheet>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
