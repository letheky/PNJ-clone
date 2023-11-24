<template>
  <div class="app-footer">
    <v-container>
      <v-divider class="pb-10"></v-divider>
      <v-img
        max-width="200"
        height="80"
        class="responsive-desktop-tablet-image mb-2"
        cover
        alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
        lazy-src="/images/logos/logo.png"
        src="/images/logos/logo.png"
      >
      </v-img>
      <v-row class="content">
        <v-col cols="12" md="4">
          <div class="text-subtitle-2">
            <p class="text-h6">
              © 2017 Công Ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận
            </p>
            <p class="py-2">
              170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh<br />ĐT:
              <a style="color: blue" href="tel:02839951703">028 39951703</a> -
              Fax:
              <a style="color: blue" href="fax:02839951702">028 3995 1702</a>
            </p>
            <p style="text-align: left">
              <a
                style="color: blue"
                href="https://cdn.pnj.io/images/quan-he-co-dong/2023/10b-20230207-PNJ-GCN-DKDN-lan-35-CBTT-File-nhe.pdf"
                rel="nofollow noopener"
                >Giấy chứng nhận đăng ký doanh nghiệp: 0300521758</a
              >
              do Sở Kế hoạch &amp; Đầu tư TP.HCM cấp lần đầu ngày 02/01/2004.
              <a
                style="color: blue"
                href="https://cdn.pnj.io/images/quan-he-co-dong/2022/1d-Nganh-nghe-kinh-doanh-tai-ngay-06012022-CBTT.pdf"
                rel="nofollow noopener"
                >Ngành, nghề kinh doanh</a
              >
            </p>
            <p>
              <!--<br>Email: <a style="color:blue" href="mailto: shop@pnj.com.vn" style="color: blue;">shop@pnj.com.vn</a>-->
              <br />Tổng đài hỗ trợ (08:00-21:00, miễn phí gọi) <br />Gọi mua:
              <a style="color: blue" href="tel:1800545457">1800545457</a> (phím
              1) <br />Khiếu nại:
              <a style="color: blue" href="tel:1800545457">1800545457</a> (phím
              2)
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="responsive-about-pnj-desktop">
            <p class="text-h6 mb-2"><span>Về PNJ</span></p>
            <ul class="text-subtitle-1">
              <li v-for="(page, index) in aboutPNJ" :key="index">
                <NuxtLink :to="page.path" style="color: black">{{
                  page.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="responsive-about-pnj-mobile-tablet">
            <v-divider class="mb-6"></v-divider>
            <div
              class="d-flex align-center justify-space-between collapse-able"
              @click="showAboutPNJ = !showAboutPNJ"
            >
              <p class="text-h6 mb-2"><span>Về PNJ</span></p>
              <Icon
                :name="
                  showAboutPNJ
                    ? 'bi:chevron-compact-up'
                    : 'bi:chevron-compact-down'
                "
                size="24"
              />
            </div>
            <ul class="text-subtitle-1" v-if="showAboutPNJ">
              <li v-for="(page, index) in aboutPNJ" :key="index">
                <NuxtLink :to="page.path" style="color: black">{{
                  page.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="responsive-about-pnj-desktop mb-3">
            <p class="text-h6 mb-2"><span>Dịch vụ khách hàng</span></p>
            <ul class="text-subtitle-1">
              <li v-for="(page, index) in customerService" :key="index">
                <NuxtLink :to="page.path" style="color: black">{{
                  page.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="responsive-about-pnj-mobile-tablet">
            <div
              class="d-flex align-center justify-space-between collapse-able"
              @click="showCustomerService = !showCustomerService"
            >
              <p class="text-h6 mb-2"><span>Dịch vụ khách hàng</span></p>
              <Icon
                :name="
                  showCustomerService
                    ? 'bi:chevron-compact-up'
                    : 'bi:chevron-compact-down'
                "
                size="24"
              />
            </div>
            <ul class="text-subtitle-1" v-if="showCustomerService">
              <li v-for="(page, index) in customerService" :key="index">
                <NuxtLink :to="page.path" style="color: black">{{
                  page.title
                }}</NuxtLink>
              </li>
            </ul>
            <v-divider class="mt-5"></v-divider>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="mb-3">
            <NuxtLink to="/" style="color: black">
              <p class="text-h6 mb-2"><span>KẾT NỐI VỚI CHÚNG TÔI</span></p>
            </NuxtLink>
            <div class="d-flex align-center justify-start">
              <v-img
                v-for="(social, index) in socialMedia"
                :key="index"
                max-width="35"
                height="35"
                class="mr-2"
                cover
                :alt="social.alt"
                :lazy-src="social.src"
                :src="social.src"
              ></v-img>
            </div>
          </div>
          <div>
            <p class="text-h6 mt-5"><span>QUAN TÂM ZALO OA PNJ</span></p>
            <p class="text-subtitle-1 my-1">
              Nhận các thông tin khuyến mại hấp dẫn
            </p>
            <a href="https://zalo.me/trangsucpnjofficial" target="_blank">
              <v-img
                max-width="81"
                height="24"
                cover
                alt="PNJ - Quan tâm Zalo"
                lazy-src="/images/logos/zalo.png"
                src="/images/logos/zalo.png"
              ></v-img>
            </a>
          </div>
        </v-col>
      </v-row>
      <v-row class="content">
        <v-col offset-md="6" cols="12" md="3">
          <p class="text-h6 my-2"><span>PHƯƠNG THỨC THANH TOÁN</span></p>
          <div class="d-flex align-center justify-start">
            <v-img
              v-for="(payment, index) in paymentList"
              :key="index"
              max-width="38"
              height="22"
              class="mr-2"
              cover
              :alt="payment.alt"
              :lazy-src="payment.src"
              :src="payment.src"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <p class="text-h6 my-2"><span>CHỨNG NHẬN</span></p>
          <a href="http://online.gov.vn/Home/WebDetails/989" target="_blank">
            <v-img
              max-width="115"
              cover
              alt="PNJ - Chứng nhận Bộ công thương"
              lazy-src="/images/logos/license.png"
              src="/images/logos/license.png"
            ></v-img>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const aboutPNJ = ref([
  {
    title: "Câu chuyện PNJ",
    path: "/about",
  },
  {
    title: "Tuyển dụng",
    path: "/about",
  },
  {
    title: "Xuất khẩu",
    path: "/about",
  },
  {
    title: "Kinh doanh sỉ",
    path: "/about",
  },
  {
    title: "Kiểm định kim cương",
    path: "/about",
  },
  {
    title: "Kinh doanh vàng miếng",
    path: "/about",
  },
]);
const customerService = ref([
  {
    title: "Hướng dẫn đo size trang sức",
    path: "/about",
  },
  {
    title: "Mua hàng trả góp",
    path: "/about",
  },
  {
    title: "Hướng dẫn mua hàng và thanh toán",
    path: "/about",
  },
  {
    title: "Chính sách hoàn tiền",
    path: "/about",
  },
  {
    title: "Chính sách giao hàng",
    path: "/about",
  },
  {
    title: "Cẩm nang sử dụng trang sức",
    path: "/about",
  },
  {
    title: "Chính sách bảo hành thu đổi",
    path: "/about",
  },
  {
    title: "Chính sách khách hàng thân thiết",
    path: "/about",
  },
  {
    title: "Chính sách bảo mật thông tin khách hàng",
    path: "/about",
  },
  {
    title: "Chính sách xử lý dữ liệu cá nhân",
    path: "/about",
  },
  {
    title: "Câu hỏi thường gặp",
    path: "/about",
  },
]);
const paymentList = ref([
  {
    alt: "PNJ - Visa Payment",
    src: "/images/logos/visa.svg",
  },
  {
    alt: "PNJ - Visa Payment",
    src: "/images/logos/visa.svg",
  },
  {
    alt: "PNJ - Visa Payment",
    src: "/images/logos/visa.svg",
  },
  {
    alt: "PNJ - Business License",
    src: "/images/logos/visa.svg",
  },
  {
    alt: "PNJ - Business License",
    src: "/images/logos/visa.svg",
  },
  {
    alt: "PNJ - Business License",
    src: "/images/logos/visa.svg",
  },
]);
const socialMedia = ref([
  {
    alt: "PNJ - Facebook",
    src: "/images/logos/facebook.svg",
  },
  {
    alt: "PNJ - Instagram",
    src: "/images/logos/facebook.svg",
  },
  {
    alt: "PNJ - Youtube",
    src: "/images/logos/facebook.svg",
  },
  {
    alt: "PNJ - Gmail/Email",
    src: "/images/logos/facebook.svg",
  },
]);

const showAboutPNJ = ref(false);
const showCustomerService = ref(false);
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.app-footer {
  font-family: $third-font-family;
  @media only screen and (max-width: 767px) {
    .responsive-desktop-tablet-image,
    .responsive-about-pnj-desktop {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .responsive-about-pnj-desktop {
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) {
    .responsive-about-pnj-mobile-tablet {
      display: none;
    }
  }
  .content {
    .text-subtitle-2 {
      .text-h6 {
        font-size: 0.94rem !important;
        font-weight: 400;
      }
    }
    .text-h6 {
      font-weight: 500;
    }
    .text-subtitle-2,
    .text-subtitle-1 {
      font-weight: 300;
    }
    .collapse-able {
      &:hover {
        cursor: pointer;
      }
    }
    ul {
      line-height: 1.7em;
    }
  }
}
</style>
