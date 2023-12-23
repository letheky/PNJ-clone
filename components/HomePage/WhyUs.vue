<template>
  <div class="why-chose-pnj">
    <v-sheet height="150" class="text-center text-white bg-light-blue-darken-4">
      <h1 class="pt-10 text-h3 text-md-h2 text-xl-h1">
        TẠI SAO NÊN CHỌN HAJ ?
      </h1>
    </v-sheet>
    <div class="d-flex justify-center align-center mt-n12 bg-transparent mb-10">
      <v-sheet
        width="60%"
        class="d-none d-sm-flex flex-start bg-transparent"
        style="align-items: self-start"
      >
        <v-col class="d-flex justify-center align-center flex-column">
          <v-img
            :width="reponsiveWidth"
            :height="reponsiveWidth"
            fill
            alt="TRẢ GÓP 0% LÃI SUẤT"
            lazy-src="/images/others/icon-circle-tragop.svg"
            src="/images/others/icon-circle-tragop.svg"
          ></v-img>
          <h5 class="text-center text-subtitle-2 text-md-h6 text-xl-h5">
            TRẢ GÓP 0% LÃI SUẤT
          </h5>
          <hr style="width: 30%; border-top: 1px solid black" />
          <p
            class="text-center text-subtitle-2 text-md-body-1 text-xl-subtitle-1"
          >
            Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng
          </p>
        </v-col>
        <v-col class="d-flex justify-center align-center flex-column">
          <v-img
            :width="reponsiveWidth"
            :height="reponsiveWidth"
            fill
            alt="GIAO HÀNG 3H"
            lazy-src="/images/others/icon-fast-delivery.svg"
            src="/images/others/icon-fast-delivery.svg"
          ></v-img>
          <h5 class="text-center text-subtitle-2 text-md-h6 text-xl-h5">
            GIAO HÀNG 3H
          </h5>
          <hr style="width: 30%; border-top: 1px solid black" />
          <p
            class="text-center text-subtitle-2 text-md-body-1 text-xl-subtitle-1"
          >
            Sở hữu ngay món trang sức yêu thích chỉ trong vòng 3 giờ
          </p>
        </v-col>
        <v-col class="d-flex justify-center align-center flex-column">
          <v-img
            :width="reponsiveWidth"
            :height="reponsiveWidth"
            fill
            alt="NGƯỜI BẠN VÀNG"
            lazy-src="/images/others/icon-circle-nbv.svg"
            src="/images/others/icon-circle-nbv.svg"
          ></v-img>
          <h5 class="text-center text-subtitle-2 text-md-h6 text-xl-h5">
            NGƯỜI BẠN VÀNG
          </h5>
          <hr style="width: 30%; border-top: 1px solid black" />
          <p
            class="text-center text-subtitle-2 text-md-body-1 text-xl-subtitle-1"
          >
            Giải pháp tài chính cầm đồ; thu mua kim cương, túi hiệu và đồng hồ
            cơ
          </p>
        </v-col>
      </v-sheet>
      <v-sheet
        class="d-flex d-sm-none bg-transparent scroll-container"
        style="align-items: self-start"
      >
        <v-col
          class="d-flex justify-center align-center flex-column"
          style="width: 160px"
        >
          <v-img
            :width="reponsiveWidth"
            :height="reponsiveWidth"
            fill
            alt="TRẢ GÓP 0% LÃI SUẤT"
            lazy-src="/images/others/icon-circle-tragop.svg"
            src="/images/others/icon-circle-tragop.svg"
          ></v-img>
          <h5 class="text-center text-subtitle-2 text-md-h6 text-xl-h5">
            TRẢ GÓP 0% LÃI SUẤT
          </h5>
          <hr style="width: 30%; border-top: 1px solid black" />
          <p
            class="text-center text-subtitle-2 text-md-body-1 text-xl-subtitle-1"
          >
            Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng
          </p>
        </v-col>
        <v-col
          class="d-flex justify-center align-center flex-column"
          style="width: 160px"
        >
          <v-img
            :width="reponsiveWidth"
            :height="reponsiveWidth"
            fill
            alt="GIAO HÀNG 3H"
            lazy-src="/images/others/icon-fast-delivery.svg"
            src="/images/others/icon-fast-delivery.svg"
          ></v-img>
          <h5 class="text-center text-subtitle-2 text-md-h6 text-xl-h5">
            GIAO HÀNG 3H
          </h5>
          <hr style="width: 30%; border-top: 1px solid black" />
          <p
            class="text-center text-subtitle-2 text-md-body-1 text-xl-subtitle-1"
          >
            Sở hữu ngay món trang sức yêu thích chỉ trong vòng 3 giờ
          </p>
        </v-col>
        <v-col
          class="d-flex justify-center align-center flex-column"
          style="width: 160px"
        >
          <v-img
            :width="reponsiveWidth"
            :height="reponsiveWidth"
            fill
            alt="NGƯỜI BẠN VÀNG"
            lazy-src="/images/others/icon-circle-nbv.svg"
            src="/images/others/icon-circle-nbv.svg"
          ></v-img>
          <h5 class="text-center text-subtitle-2 text-md-h6 text-xl-h5">
            NGƯỜI BẠN VÀNG
          </h5>
          <hr style="width: 30%; border-top: 1px solid black" />
          <p
            class="text-center text-subtitle-2 text-md-body-1 text-xl-subtitle-1"
          >
            Giải pháp tài chính cầm đồ; thu mua kim cương, túi hiệu và đồng hồ
            cơ
          </p>
        </v-col>
      </v-sheet>
    </div>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { mobile, mdAndUp, smAndUp } = useDisplay();
const reponsiveWidth = mobile.value ? 75 : 100;

const items = [
  {
    imageSrc: "/images/others/icon-circle-tragop.svg",
    title: "TRẢ GÓP 0% LÃI SUẤT",
    description: "Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng",
  },
  {
    imageSrc: "/images/others/icon-circle-tragop.svg",
    title: "TRẢ GÓP 0% LÃI SUẤT",
    description: "Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng",
  },
  {
    imageSrc: "/images/others/icon-circle-nbv.svg",
    title: "NGƯỜI BẠN VÀNG",
    description:
      " Giải pháp tài chính cầm đồ; thu mua kim cương, túi hiệu và đồng hồ cơ",
  },
];
</script>
<style lang="scss" scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: darkgray lightgray;
  white-space: nowrap;
  width: 100%; /* Adjust width to fill the available space */
}
.v-col {
  text-wrap: wrap;
}
</style>
