<template>
  <div>
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      color="#fff"
      interval="5000"
      touch
    >
      <v-carousel-item
        v-for="(item, i) in carouselItems"
        :key="i"
        :src="item"
        :lazy-src="item"
        cover
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
    <v-container>
      <v-row width="80%">
        <v-col v-for="index in 3" :key="index">
          <v-img
            max-width="100%"
            height="200"
            class="responsive-desktop-tablet-image"
            cover
            alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
            lazy-src="/images/banners/subbanner.jpg"
            src="/images/banners/subbanner.jpg"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="px-10 py-5">
        <h3 class="text-h4" style="color: #003468">Xu hướng tìm kiếm</h3>
        <v-sheet class="mx-auto" max-width="100%">
          <v-slide-group mobile-breakpoint="sm" class="pa-4" show-arrows>
            <v-slide-group-item v-for="(item, index) in hotSearch" :key="index">
              <div
                class="mt-4 ml-10 d-flex flex-column align-center justify-center"
              >
                <v-img
                  width="120"
                  class="responsive-desktop-tablet-image"
                  alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                  lazy-src="/images/products/nhan-ecz.png"
                  src="/images/products/nhan-ecz.png"
                ></v-img>
                <v-card-subtitle class="mt-4">{{ item }}</v-card-subtitle>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-row>
      <v-row class="px-10 py-5">
        <h3 class="text-h4" style="color: #003468">Thương hiệu nổi bật</h3>
        <v-sheet class="mx-auto" max-width="100%">
          <v-slide-group mobile-breakpoint="sm" class="pa-4" show-arrows>
            <v-slide-group-item v-for="n in 4" :key="n">
              <div
                class="mt-4 ml-10 d-flex flex-column align-center justify-center"
              >
                <v-img
                  width="380"
                  cover
                  class="responsive-desktop-tablet-image"
                  alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                  lazy-src="/images/brands/block-brands-disney.png"
                  src="/images/brands/block-brands-disney.png"
                ></v-img>
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
      <v-row class="px-10 py-5">
        <span class="d-flex flex-grow-1">
          <h3 class="text-h4" style="color: #003468">Sản phẩm bán chạy</h3>
          <v-spacer></v-spacer>
          <span
            class="d-flex align-center"
            style="border-bottom: 1px solid #424242"
          >
            <NuxtLink class="text-h5" style="color: #424242" to="/"
              >Xem thêm</NuxtLink
            >
            <IconCSS name="chevronRight" class="mr-n2" />
          </span>
        </span>
        <v-sheet class="mx-auto" max-width="100%">
          <v-slide-group mobile-breakpoint="sm" class="pa-4" show-arrows>
            <v-slide-group-item v-for="(item, index) in topSale" :key="index">
              <v-col>
                <ProductCardItem :product="item" />
              </v-col>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-row>
      <v-row class="px-10 py-5">
        <span class="d-flex flex-grow-1">
          <h3 class="text-h4" style="color: #003468">Sản phẩm mới</h3>
          <v-spacer></v-spacer>
          <span
            class="d-flex align-center"
            style="border-bottom: 1px solid #424242"
          >
            <NuxtLink class="text-h5" style="color: #424242" to="/"
              >Xem thêm</NuxtLink
            >
            <IconCSS name="chevronRight" class="mr-n2" />
          </span>
        </span>
        <v-sheet class="mx-auto" max-width="100%">
          <v-slide-group mobile-breakpoint="sm" class="pa-4" show-arrows>
            <v-slide-group-item v-for="(item, index) in newSale" :key="index">
              <v-col>
                <ProductCardItemNew :product="item" />
              </v-col>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-row>
      <v-row class="px-10 py-5">
        <h3 class="text-h4" style="color: #003468">Bộ sưu tập mới</h3>
        <v-sheet
          class="mt-10 d-flex mx-auto px-10 align-center"
          max-width="100%"
        >
          <v-img
            width="400"
            cover
            class="responsive-desktop-tablet-image mb-10"
            style="
              box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.35);
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.35);
            "
            alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
            lazy-src="/images/banners/collection.jpg"
            src="/images/banners/collection.jpg"
          ></v-img>
          <div class="text-center">
            <v-slide-group mobile-breakpoint="sm" class="pa-4" show-arrows>
              <v-slide-group-item v-for="(item, index) in newSale" :key="index">
                <v-col>
                  <ProductCardItemNew :product="item" />
                </v-col>
              </v-slide-group-item>
            </v-slide-group>
            <v-btn class="mt-n15" color="primary" variant="outlined"
              >Xem thêm</v-btn
            >
          </div>
        </v-sheet>
      </v-row>
      <v-row class="px-10 py-5">
        <v-sheet
          v-for="(item, index) in renderList"
          :key="index"
          class="mt-10 d-flex mx-auto px-10 align-center flex-column"
          max-width="100%"
        >
          <v-img
            width="100%"
            cover
            class="responsive-desktop-tablet-image mb-10"
            style="
              box-shadow: 5px 5px 9px rgba(0, 0, 0, 0.35);
              border-radius: 10px;
              background-color: rgba(0, 0, 0, 0.35);
            "
            alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
            lazy-src="/images/banners/subbanner2.jpg"
            src="/images/banners/subbanner2.jpg"
          ></v-img>
          <h3 class="text-h4" style="color: #003468">{{ item }}</h3>
          <div class="text-center">
            <v-slide-group mobile-breakpoint="sm" class="pa-4" show-arrows>
              <v-slide-group-item v-for="(item, index) in newSale" :key="index">
                <v-col>
                  <ProductCardItemNew :product="item" />
                </v-col>
              </v-slide-group-item>
            </v-slide-group>
            <v-btn class="mt-n15" color="primary" variant="outlined"
              >Xem thêm</v-btn
            >
          </div>
        </v-sheet>
      </v-row>
    </v-container>
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
    <div class="why-chose-pnj">
      <v-sheet
        height="150"
        class="text-center text-white bg-light-blue-darken-4"
      >
        <h1 class="pt-10 text-h1">TẠI SAO NÊN CHỌN PNJ ?</h1>
      </v-sheet>
      <div
        class="d-flex justify-center align-center mt-n15 bg-transparent mb-10"
      >
        <v-sheet width="50%" class="d-flex bg-transparent">
          <v-col class="d-flex justify-center align-center flex-column">
            <v-img
              width="100"
              height="100"
              cover
              class="responsive-desktop-tablet-image"
              alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
              lazy-src="/images/others/icon-circle-tragop.svg"
              src="/images/others/icon-circle-tragop.svg"
            ></v-img>
            <h5>TRẢ GÓP 0% LÃI SUẤT</h5>
            <hr style="width: 30%; border-top: 1px solid black" />
            <p class="text-center">
              Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng
            </p>
          </v-col>
          <v-col class="d-flex justify-center align-center flex-column">
            <v-img
              width="100"
              height="100"
              cover
              class="responsive-desktop-tablet-image"
              alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
              lazy-src="/images/others/icon-fast-delivery.svg"
              src="/images/others/icon-fast-delivery.svg"
            ></v-img>
            <h5>GIAO HÀNG 3H</h5>
            <hr style="width: 30%; border-top: 1px solid black" />
            <p class="text-center">
              Sở hữu ngay món trang sức yêu thích chỉ trong vòng 3 giờ
            </p>
          </v-col>
          <v-col class="d-flex justify-center align-center flex-column">
            <v-img
              width="100"
              height="100"
              cover
              class="responsive-desktop-tablet-image"
              alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
              lazy-src="/images/others/icon-circle-nbv.svg"
              src="/images/others/icon-circle-nbv.svg"
            ></v-img>
            <h5>NGƯỜI BẠN VÀNG</h5>
            <hr style="width: 30%; border-top: 1px solid black" />
            <p class="text-center">
              Giải pháp tài chính cầm đồ; thu mua kim cương, túi hiệu và đồng hồ
              cơ
            </p>
          </v-col>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ProductCardItem, ProductCardItemNew } from "#components";
import {
  NUXT_APP_ACCESSORIES_TYPES,
  NUXT_APP_ACCESSORIES_MATERIALS,
  NUXT_APP_ACCESSORIES_LIST,
  NUXT_APP_ACCESSORIES_COLLECTIONS,
  NUXT_APP_WEDD_ACCESS_PURPOSES,
  NUXT_APP_WEDD_ACCESS_TYPES,
  NUXT_APP_WEDD_ACCESS_CATEGORIES,
  NUXT_APP_WEDD_ACCESS_MATERIALS,
  NUXT_APP_WEDD_ACCESS_COLLECTIONS,
  NUXT_APP_GEMSTONE_TYPES,
  NUXT_APP_GIFT_FOR,
} from "~/data/headermenu";
import { HOT_SALE, NEW_SALE } from "~/data/products";

const carouselItems = [
  "/images/banners/blackfriday.jpg",
  "/images/banners/blackfriday2.jpg",
  "/images/banners/blackfriday.jpg",
  "/images/banners/blackfriday2.jpg",
  "/images/banners/blackfriday.jpg",
  "/images/banners/blackfriday2.jpg",
];
const hotSearch = NUXT_APP_ACCESSORIES_TYPES.split(",");
const topSale = HOT_SALE;
const newSale = NEW_SALE;
const renderList = NUXT_APP_ACCESSORIES_LIST.split(",");
</script>

<style lang="scss" scoped>
.active-carousel-item {
  color: aqua;
  background-color: red;
}
</style>
