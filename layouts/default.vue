<template>
  <div>
    <AppHeader />
    <slot />
    <OverlayFooter v-if="checkWindowResolution" />
    <AppFooter />
  </div>
</template>

<script setup>
import { useWindowResolution } from "~/stores/responsive";

/**
 * * Set computed value to display OverlayFooter for tablet and mobile
 */
const responsiveStore = useWindowResolution();
const checkWindowResolution = computed(
  () => responsiveStore.isLaptop || responsiveStore.isMobile
);

</script>

<style lang="scss" scoped></style>
