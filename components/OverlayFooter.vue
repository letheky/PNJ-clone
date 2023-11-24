<template>
  <div class="overlay-footer-mobile-tablet">
    <v-footer :app="true" elevation="8" height="60" style="padding: 0">
      <v-row class="text-center">
        <v-col v-for="(item, i) in firstThree" :key="i">
          <NuxtLink :to="item.path">
            <div class="overlay-item" @click="setActive(item.iconName)">
              <IconCSS
                :name="item.iconName"
                :style="{
                  color: selectedItem === item.iconName ? '#003468' : '',
                }"
              />
              <p
                v-text="item.iconTitle"
                :style="{
                  color: selectedItem === item.iconName ? '#003468' : '',
                }"
              ></p>
            </div>
          </NuxtLink>
        </v-col>
        <v-col>
          <v-menu
            transition="scale-transition"
            location="bottom center"
            origin="top center"
            offset="15"
            open-on-click
          >
            <template v-slot:activator="{ props }">
              <div class="overlay-item" v-bind="props">
                <v-list-item-title>
                  <IconCSS :name="restArr[1].iconName" />
                </v-list-item-title>
                <v-list-item-subtitle v-text="restArr[1].iconTitle">
                </v-list-item-subtitle>
              </div>
            </template>
            <!-- <div v-for="(item, index) in accesTypes" :key="index">
                  <NuxtLink class="menu-link" to="/">{{ item }}</NuxtLink>
                </div> -->
            <v-card
              width="60px"
              class="d-flex justify-center align-center flex-column rounded-pill"
              style="gap: 10px; padding-top: 10px"
            >
              <v-img
                max-width="50"
                width="50"
                height="50"
                cover
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                src="/images/logos/messenger.svg"
              ></v-img>
              <v-img
                max-width="50"
                width="50"
                height="50"
                cover
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                src="/images/logos/hotline.svg"
              ></v-img>
              <v-img
                max-width="50"
                width="50"
                height="50"
                cover
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                src="/images/logos/zalo.svg"
              ></v-img>
            </v-card>
          </v-menu>
        </v-col>
        <v-col>
          <v-menu location="bottom center" open-on-click>
            <template v-slot:activator="{ props }">
              <div class="overlay-item" v-bind="props">
                <v-list-item-title>
                  <IconCSS :name="restArr[2].iconName" />
                </v-list-item-title>
                <v-list-item-subtitle v-text="restArr[2].iconTitle">
                </v-list-item-subtitle>
              </div>
            </template>
            <!-- <div v-for="(item, index) in accesTypes" :key="index">
                  <NuxtLink class="menu-link" to="/">{{ item }}</NuxtLink>
                </div> -->
            <v-card
              class="d-flex justify-center align-center hotline-card"
              style="gap: 10px; left: 50%"
            >
              <v-img
                max-width="50"
                width="50"
                height="50"
                cover
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                src="/images/logos/messenger.svg"
              ></v-img>
              <v-img
                max-width="50"
                width="50"
                height="50"
                cover
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                src="/images/logos/hotline.svg"
              ></v-img>
              <v-img
                max-width="50"
                width="50"
                height="50"
                cover
                alt="PNJ - Công ty cổ phần vàng bạc đá quý Phú Nhuận"
                src="/images/logos/zalo.svg"
              ></v-img>
            </v-card>
          </v-menu>
        </v-col>
      </v-row>
    </v-footer>
    <v-dialog
      v-model="menuDialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Danh mục sản phẩm</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="closeDialog('menu')">
            <IconCSS name="closeCircle" />
          </v-btn>
        </v-toolbar>
        <v-list lines="two" subheader>
          <v-list-subheader>User Controls</v-list-subheader>
          <v-list-item
            title="Content filtering"
            subtitle="Set the content filtering level to restrict apps that can be downloaded"
          ></v-list-item>
          <v-list-item
            title="Password"
            subtitle="Require password for purchase or use password to restrict purchase"
          ></v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();

const iconList = [
  { iconName: "home", iconTitle: "Trang chủ", path: "/" },
  { iconName: "coupon", iconTitle: "Khuyến mãi", path: "/coupon" },
  { iconName: "profile", iconTitle: "Cá nhân", path: "/profile" },
  { iconName: "notification", iconTitle: "Thông báo" },
  { iconName: "phoneCall", iconTitle: "Liên hệ" },
  { iconName: "menu", iconTitle: "Danh mục" },
];

const firstThree = computed(() => iconList.slice(0, 3));
const restArr = computed(() => iconList.slice(-3));

//Set active item in overlayfooter
let selectedItem = ref();
const setActive = (item) => {
  selectedItem = item;
};
const firstActiveRoute = () => {
  switch (route.path) {
    case "/coupon":
      setActive("coupon");
      break;
    case "/profile":
      setActive("profile");
      break;
    case "/":
      setActive("home");
      break;
    default:
      setActive("");
      break;
  }
};
firstActiveRoute();
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
}
@media only screen and (min-width: 1024px) {
  .overlay-footer-mobile-tablet {
    display: none;
  }
}

.v-list-item-subtitle {
  font-size: 0.7rem !important;
}
.v-col {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay-item {
  &:hover {
    cursor: pointer;
  }

  p {
    font-size: 12px;
  }
}
a {
  color: inherit;
  text-decoration: none;
}
.active-item {
  color: #003468;
  background-color: #003468;
}
</style>
