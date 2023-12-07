<template>
  <div>
    <v-container>
      <v-row v-if="!smAndDown" class="d-flex justify-center">
        <v-breadcrumbs :items="breadCrumbItems"></v-breadcrumbs>
      </v-row>
      <v-row>
        <v-col cols="3" md="2">
          <v-sheet class="mx-auto d-none d-sm-flex" max-width="100%">
            <v-slide-group
              v-model="selectedImage"
              class="pa-4"
              direction="vertical"
            >
              <v-slide-group-item
                v-for="image in productDetail.productImages"
                :key="image.id"
                v-slot="{ isSelected, toggle }"
              >
                <v-card
                  color="grey-lighten-5"
                  class="ma-2"
                  height="80"
                  width="80"
                  @click="toggle"
                >
                  <div
                    class="d-flex fill-height align-center justify-center"
                    :style="{ border: isSelected ? '1px solid #757575' : '' }"
                  >
                    <NuxtImg
                      fit="cover"
                      :src="image.subImage"
                      :alt="productDetail.name"
                      :title="productDetail.name"
                      loading="lazy"
                      preset="product"
                      width="80"
                    />
                  </div>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
        <v-col cols="9" md="5" v-if="!smAndDown">
          <v-card
            class="d-flex fill-height align-center justify-center"
            width="500"
            max-height="500"
          >
            <NuxtImg
              fit="cover"
              :src="productDetail.productImages[selectedImage].mainImage"
              :alt="productDetail.name"
              :title="productDetail.name"
              loading="lazy"
              preset="product"
              width="485"
              height="485"
            />
          </v-card>
        </v-col>
        <v-col cols="12" v-else>
          <v-carousel
            class="d-sm-none"
            hide-delimiter-background
            color="#E0E0E0"
            interval="5000"
            height="480px"
            :show-arrows="false"
            touch
          >
            <v-carousel-item
              v-for="image in productDetail.productImages"
              :key="image.id"
              eager
              cover
            >
              <v-sheet class="d-flex flex-column align-center justify-center">
                <NuxtImg
                  fit="cover"
                  :src="image.mainImage"
                  :alt="productDetail.name"
                  :title="productDetail.name"
                  loading="lazy"
                  format="webp"
                  width="380"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="5">
          <div class="product-info d-flex flex-column pl-md-10 ga-1">
            <h3 class="text-h5 font-weight-medium">{{ productDetail.name }}</h3>
            <h4 class="text-subtitle-1">Code: {{ productDetail.code }}</h4>
            <h4 class="text-h5 font-weight-medium" style="color: #003468">
              {{
                selectedSize
                  ? Math.ceil(
                      productDetail.price * increasedPriceBySize
                    ).toLocaleString()
                  : productDetail.price.toLocaleString()
              }}đ
            </h4>
            <span class="d-flex justify-space-between">
              <p class="text-body-1">Chọn kích cỡ</p>
              <v-menu
                transition="slide-y-transition"
                open-on-click
                :close-on-content-click="false"
              >
                <template v-slot:activator="{ props }">
                  <div style="cursor: pointer" v-bind="props">
                    <p
                      class="text-caption text-decoration-underline font-italic"
                    >
                      Cách đo size nhẫn
                    </p>
                  </div>
                </template>
                <v-card :width="smAndDown ? 300 : 400">
                  <div>
                    <h2 class="text-h5 text-center">Cách đo size nhẫn</h2>
                    <div class="pa-2">
                      <div class="step step1">
                        <p class="text-subtitle-1">
                          1. Dùng chỉ hoặc giấy bản nhỏ đo quấn quanh khớp tay,
                          đánh dấu vị trí cắt nhau
                        </p>
                        <p>
                          <NuxtImg
                            fit="cover"
                            loading="lazy"
                            alt="1. Dùng chỉ hoặc giấy bản nhỏ đo quấn quanh khớp tay, đánh dấu vị trí cắt nhau"
                            src="https://cdn.pnj.io/images/image-update/2022/guide-size/size-nhan.svg"
                            width="250px"
                            height="100px"
                          />
                        </p>
                      </div>
                      <div>
                        <p class="text-subtitle-1">
                          2. Dùng thước đo chiều dài đoạn dây vừa đo được
                          <i>(đơn vị cm)</i>
                        </p>
                        <p>
                          <NuxtImg
                            fit="cover"
                            loading="lazy"
                            alt="2. Dùng thước đo chiều dài đoạn dây vừa đo được (đơn vị cm)"
                            src="https://cdn.pnj.io/images/image-update/2022/guide-size/thuoc-do.svg"
                            width="250px"
                            height="100px"
                          />
                        </p>
                      </div>
                    </div>
                    <div
                      class="d-flex align-start justify-space-between bg-grey-lighten-3 pa-2"
                    >
                      <div class="flex-grow-1 mr-3">
                        <p class="text-subtitle-2 mb-2">
                          Kết quả bạn đo được là:
                        </p>
                        <div
                          class="bg-white overflow-auto"
                          style="max-height: 100px"
                          v-touch="{
                            up: () => swipe('Up'),
                            down: () => swipe('Down'),
                          }"
                        >
                          <v-radio-group
                            v-model="ringSize"
                            density="compact"
                            class="pa-1"
                          >
                            <v-radio
                              style="font-size: 8px"
                              v-for="(size, index) in caculateRingSize"
                              :key="index"
                              :label="`${size.label} cm`"
                              :value="size.value"
                              density="compact"
                            ></v-radio>
                          </v-radio-group>
                        </div>
                      </div>
                      <div>
                        <div class="measure-size">
                          <p class="text-subtitle-2 mb-2">Bảng size phổ biến</p>
                          <NuxtImg
                            loading="lazy"
                            fit="cover"
                            alt="Size nhẫn"
                            src="https://cdn.pnj.io/images/image-update/2022/guide-size/nhan_v2.svg"
                            sizes="sm:400px md:800px"
                            format="webp"
                          />
                          <p>Size nhẫn của bạn là: {{ ringSize }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-menu>
            </span>
            <span class="d-flex ga-2">
              <v-item-group
                v-model="selectedSize"
                class="d-flex ga-2"
                selected-class="bg-primary"
              >
                <v-item
                  v-for="item in productDetail.productSizes"
                  :key="item.id"
                  :value="item.size"
                  v-slot="{ selectedClass, toggle }"
                >
                  <v-card
                    :class="['d-flex align-center pa-1', selectedClass]"
                    dark
                    @click="toggle"
                  >
                    <p class="text-subtitle-1">{{ item.size }}</p>
                  </v-card>
                </v-item>
              </v-item-group>
            </span>
            <span class="text-body-1">
              Còn hàng -
              <span style="color: #003468; font-weight: bold">Gọi </span>
              <a href="tel:1800545457">
                <NuxtImg
                  loading="lazy"
                  src="https://cdn.pnj.io/images/image-update/2023/hotline/phone_in_talk.svg"
                  alt="Hotline 1800545457"
                  title="Hotline 1800545457"
                />
                1800 5454 57
              </a>
              <span style="color: #ad2a36; font-weight: 400">(Free) </span
              ><span style="color: #003468; font-weight: bold"
                >Ưu đãi độc quyền</span
              >
            </span>
            <v-btn color="error" height="50">
              <div class="d-flex flex-column justify-center align-center">
                <p>Mua hàng</p>
                <p class="font-italic text-body-2">
                  Miễn phí giao hàng tận nhà hoặc nhận tại cửa hàng
                </p>
              </div>
            </v-btn>
            <v-list class="" density="compact">
              <v-list-item
                v-for="(item, i) in prosAtPNJ"
                :key="i"
                color="primary"
                lines="2"
              >
                <template v-slot:prepend>
                  <IconCss name="checked" style="color: #003468" />
                </template>
                <v-list-item-title
                  class="text-subtitle-1"
                  v-text="item"
                ></v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <h3 style="color: #003468">Các sản phẩm tương tự</h3>
        <v-sheet class="mx-auto d-none d-lg-flex" max-width="100%">
          <v-slide-group class="pa-4" show-arrows>
            <v-slide-group-item
              v-for="(item, index) in firstProductList"
              :key="index"
            >
              <v-col style="max-width: 200px">
                <ProductSimpleCardItem :singleProduct="item" />
              </v-col>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
        <div class="scroll-container mx-auto d-lg-none">
          <v-col
            style="max-width: 200px"
            v-for="(item, index) in firstProductList"
            :key="index"
          >
            <ProductSimpleCardItem :singleProduct="item" />
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { API_GET_PRODUCT_DETAIL } from "~/server/api/constant";
import { API_POST_PRODUCTS } from "~/server/api/constant";
import { useDisplay } from "vuetify";
const { getByID, postBody } = useProducts();
const { vnUrl } = slugifyUrl();

const { smAndDown } = useDisplay();
const route = useRoute();
const index = route.params.id;
const selectedImage = ref(0);
const breadCrumbItems = ref([
  {
    title: "Trang chủ",
    disabled: false,
    href: "/",
  },
]);
const ringSize = ref(0);
const selectedSize = ref(0);
const increasedPriceBySize = computed(() => {
  return selectedSize.value / productDetail.value.productSizes[0].size;
});

const { data: firstProductList } = await useFetch(() => API_POST_PRODUCTS, {
  ...postBody(1),
  transform: (data) => data.result.results,
});

const { data: productDetail } = await useFetch(() => API_GET_PRODUCT_DETAIL, {
  ...getByID(index),
  transform: (data) => data.result,
});
const prosAtPNJ = [
  "Giá sản phẩm thay đổi tuỳ trọng lượng vàng và đá",
  "Đổi sản phẩm trong 48h tại hệ thống cửa hàng PNJ",
  "Cầm đồ và Thu mua. Xem chi tiết",
  "Miễn phí giao siêu tốc 3H PNJFast tại 19 tỉnh thành, trễ tặng voucher 100K, xem thêm Chính sách giao hàng",
];
breadCrumbItems.value.push({
  title: productDetail.value.productType.name,
  disabled: false,
  href: vnUrl(productDetail.value.productType.name),
});
breadCrumbItems.value.push({
  title: productDetail.value.name,
  disabled: true,
  href: vnUrl(productDetail.value.name),
});

const caculateRingSize = [
  { label: 4.6, value: 6 },
  { label: 4.7, value: 7 },
  { label: 4.9, value: 8 },
  { label: 5, value: 9 },
  { label: 5.2, value: 10 },
  { label: 5.3, value: 11 },
  { label: 5.4, value: 12 },
  { label: 5.5, value: 13 },
  { label: 5.6, value: 14 },
  { label: 5.7, value: 15 },
  { label: 5.8, value: 16 },
  { label: 6, value: 17 },
  { label: 6.1, value: 18 },
  { label: 6.3, value: 19 },
];

useSeoMeta({
  title: productDetail.value.name
})
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.product-info {
  font-family: $third-font-family;
}
.scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: darkgray lightgray;
  white-space: nowrap;
  width: 100%; /* Adjust width to fill the available space */
  max-width: 1500px;
}
</style>
