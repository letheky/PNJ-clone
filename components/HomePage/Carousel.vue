<template>
  <div>
    <v-carousel
      hide-delimiter-background
      :show-arrows="mdAndUp ? true : false"
      color="#fff"
      interval="5000"
      :height="device()"
      touch
    >
      <v-carousel-item
        v-for="(item, i) in carouselItems"
        :height="device()"
        :aspect-ratio="1972/640"
        :key="i"
        :src="item.src"
        :lazy-src="item.src"
        :alt="item.title"
        :fill="xxlAndUp ? true : false"
        :cover="xxlAndUp ? false : true"
        eager
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-carousel-item>
    </v-carousel>
    <!-- <v-carousel
      class="d-none d-md-flex d-lg-none"
      cycle
      height="300"
      hide-delimiter-background
      color="#fff"
      interval="5000"
      touch
    >
      <v-carousel-item
        v-for="(item, i) in carouselItems"
        :key="i"
        :src="item.src"
        :alt="item.title"
        :title="item.title"
        cover
      >
      </v-carousel-item>
    </v-carousel>
    <v-carousel
      class="d-flex d-sm-none"
      cycle
      hide-delimiter-background
      :show-arrows="false"
      color="#fff"
      interval="5000"
      touch
    >
      <v-carousel-item
        v-for="(item, i) in carouselItems"
        min-height="140"
        sizes=""
        :key="i"
        :src="item.src"
        :lazy-src="item.src"
        :alt="item.title"
        :aspect-ratio="493 / 160"
        cover
        eager
      >
      </v-carousel-item>
    </v-carousel> -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useDisplay } from "vuetify";

const { smAndDown, smAndUp, mdAndUp, xlAndUp , xxlAndUp } = useDisplay();

const device = () => {
    return xlAndUp.value
    ? "50vh"
    : mdAndUp.value
    ? "30vh"
    : smAndUp.value
    ? "250px"
    : smAndDown.value
    ? "140px"
    : "100px";
};

// import { onMounted } from "vue";
// import { useDisplay } from "vuetify";

// const { width, mobile } = useDisplay();

// onMounted(() => {
//   console.log(width.value); // 960
//   console.log(mobile.value); // true
// });
const carouselItems = [
  {
    src: "https://cdn.pnj.io/images/promo/192/T11_-_CT_BLACK_FRIDAY-1972x640CTA.jpg",
    title: "PNJ big sale cho Black Friday",
  },
  {
    src: "https://cdn.pnj.io/images/promo/192/T11_-_CT_BLACK_FRIDAY-1972x640CTA.jpg",
    title: "BÙNG NỔ ƯU ĐÃI - CHỚP DEAL SIÊU ĐỈNH",
  },
  {
    src: "https://cdn.pnj.io/images/promo/191/tabsale-chung-t11-1972x640-CTA.png",
    title: "ĐÓN ƯU ĐÃI VÔ CỰC – HÒA SẮC CÙNG THẦN TƯỢNG 2023",
  },
  {
    src: "https://cdn.pnj.io/images/promo/192/pnjfast-1972x640CTA.jpg",
    title: "Sở hữu trang sức yêu thích chỉ trong 3h",
  },
  {
    src: "https://cdn.pnj.io/images/promo/173/egift-t7-1972x640CTA__1_.jpg",
    title: "Phiếu quà tặng PNJ E-Gift",
  },
];
</script>

<style lang="scss" scoped></style>
