<template>
  <div>
    <v-card width="80vw">
      <v-card-title class="d-flex justify-center py-5 mx-5">
        <v-row>
          <v-col v-for="(item, index) in menuData" :key="item + index">
            <h6 class="text-h6">{{ item.title }}</h6>
            <ul>
              <li
                v-for="(childItem, index) in item.listItem"
                :key="childItem + index"
              >
                <NuxtLink prefetch :to="vnUrl(childItem)">{{ childItem }}</NuxtLink>
              </li>
            </ul>
          </v-col>
          <v-img
            width="300"
            max-width="300"
            min-width="200"
            aspect-ratio="4/3"
            class="my-auto ml-2"
            style="width: 100%;"
            cover
            alt="HAJ - Banner bộ sưu tập Trầu Cau"
            src="/images/products/Banner_BST_Trau_Cau_400x270.png"
          ></v-img>
        </v-row>
      </v-card-title>
    </v-card>
  </div>
</template>

<script setup>
const { menuData } = defineProps(["menuData"]);
const { vnUrl } = slugifyUrl();
</script>

<style lang="scss" scoped>
a,
h6 {
  cursor: pointer;
  font-size: 12px;
  color: #282828;
  position: relative;
  -moz-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-transform: capitalize;
  &:hover {
    color: #caaa6e;
  }
}
</style>
