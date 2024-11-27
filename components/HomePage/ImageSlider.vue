<template>
  <div class="mt-2">
    <v-container fluid>
      <v-row >
        <div class="scroll-container ga-2 mx-auto">
          <v-img
            v-for="(item, index) in imageSliderItems"
            :key="index"
            :src="item.src"
            :lazy-src="item.src"
            :alt="item.title"
            :title="item.title"
            :height="responsiveHeight"
            :width="responsiveWidth"
            cover
          />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { smAndDown, lgAndUp, xlAndUp, xxlAndUp } = useDisplay();

const responsiveHeight = xlAndUp
  ? 247
  : lgAndUp.value
  ? 200
  : smAndDown.value
  ? 127
  : 167;
const responsiveWidth = responsiveHeight * 2;

const { imageSliderItems } = defineProps({
  imageSliderItems: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: darkgray lightgray;
  white-space: nowrap;
  width: 100%; /* Adjust width to fill the available space */
  max-width: 1500px;
}
.fixed-width-col {
  flex: 0 0 300px; /* Set a fixed width for each column */
  margin-right: 10px; /* Adjust margin between columns */
}
</style>
