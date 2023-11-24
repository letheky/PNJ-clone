<template>
  <div class="overlay-footer-mobile-tablet">
    <v-footer :app="true" elevation="8" height="60" style="padding: 0">
      <v-list
        class="d-flex flex-grow-1 justify-space-between"
        style="padding: 0; height: 100%"
      >
        <v-item-group
          v-model="selectedItem"
          class="d-flex flex-grow-1 justify-space-between"
          selected-class="bg-primary"
        >
          <v-col v-for="(item, i) in firstThree" :key="i">
            <v-item v-slot="{ isSelected, toggle }" :value="item">
              <div class="overlay-item text-center" @click="toggle">
                <v-list-item-title>
                  <IconCSS
                    :name="item.iconName"
                    :style="{ color: isSelected ? '#003468' : '' }"
                  />
                </v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.iconTitle"
                  :style="{ color: isSelected ? '#003468' : '' }"
                >
                </v-list-item-subtitle>
              </div>
            </v-item>
          </v-col>
        </v-item-group>
        <v-col class="text-center">
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
                <v-list-item-subtitle
                  v-text="restArr[1].iconTitle"
                >
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
        <v-col class="text-center">
          <v-menu location="bottom center" open-on-click>
            <template v-slot:activator="{ props }">
              <div class="overlay-item" v-bind="props">
                <v-list-item-title>
                  <IconCSS :name="restArr[2].iconName" />
                </v-list-item-title>
                <v-list-item-subtitle
                  v-text="restArr[2].iconTitle"
                >
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
      </v-list>
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

const selectedItem = ref({});
const selectedItems = ref([]);
const menuDialog = ref(false);
const notiDialog = ref(false);
const hotlineDialog = ref(false);

watch(selectedItems, (newVal) => {
  menuDialog.value = newVal.includes("menu") ? true : false;
  notiDialog.value = newVal.includes("notification") ? true : false;
  hotlineDialog.value = newVal.includes("phoneCall") ? true : false;
});

const closeDialog = (name) => {
  // console.log(selectedItems.filter((el) => el !== name))
  selectedItems.value = selectedItems.value.filter((el) => el !== name);
  // dialog.value = false;
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
  .overlay-footer-mobile-tablet {
    // margin-top: 100px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .overlay-footer-mobile-tablet {
  }
}
@media only screen and (min-width: 1024px) {
  .overlay-footer-mobile-tablet {
    display: none;
  }
}
.overlay-item {
  &:hover {
    cursor: pointer;
  }

  p {
    font-size: 12px;
  }
}
</style>
