<template>
  <div>
    <ClientOnly>
      <v-carousel
        cycle
        hide-delimiter-background
        :hide-delimiters="smAndDown ? true : false"
        :show-arrows="mdAndUp ? true : false"
        color="#fff"
        interval="5000"
        :height="responsiveHeight"
        touch
      >
        <v-carousel-item
          v-for="(item, i) in carouselItems"
          :height="responsiveHeight"
          :key="i"
          :src="item.src"
          :lazy-src="item.src"
          :alt="item.title"
          cover
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
    </ClientOnly>
  </div>
</template>

<script setup>
/**
 * *Responsive for carousels
 */
import { useDisplay } from "vuetify";

const { width, smAndDown, mdAndUp } = useDisplay();
const responsiveHeight = Math.floor((width.value * 640) / 1972);

const { carouselItems } = defineProps({
  carouselItems: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
