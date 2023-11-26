<template>
  <v-container>
    <v-row class="px-10 py-5">
      <h3 class="text-h4" style="color: #003468">Thương hiệu nổi bật</h3>
      <v-sheet class="mx-auto" max-width="100%">
        <v-slide-group
          class="responsive-home-page-tablet-desktop pa-4"
          mobile-breakpoint="sm"
          show-arrows
        >
          <v-slide-group-item v-for="n in 4" :key="n">
            <div
              class="mt-4 ml-10 d-flex flex-column align-center justify-center"
            >
              <NuxtImg
                fit="cover"
                src="https://cdn.pnj.io/images/promo/148/block-brands-disney.png"
                alt="Disney|PNJ"
                preload
                preset="product"
                sizes="140px xs:200px md:246px xl:380px"
              />
              <v-img
                width="180"
                cover
                class="responsive-desktop-tablet-image mt-n5 rounded mb-3 elevation-2"
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                lazy-src="/images/brands/pnj disney-01.png"
                src="/images/brands/pnj disney-01.png"
              ></v-img>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
    <v-row fluid>
      <v-carousel
        class="responsive-home-page-mobile"
        cycle
        hide-delimiter-background
        color="#fff"
        interval="5000"
        height="200"
        :show-arrows="false"
        touch
      >
        <v-carousel-item
          v-for="i in 4"
          :key="i"
          height="375"
          src="https://cdn.pnj.io/images/promo/191/sanrio-t11-1200x1200.jpg"
          lazy-src="https://cdn.pnj.io/images/promo/191/sanrio-t11-1200x1200.jpg"
          cover
        >
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
