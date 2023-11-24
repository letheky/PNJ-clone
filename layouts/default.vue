<template>
  <div>
    <AppHeader />
    <slot />
    <OverlayFooter class="overlay-footer-mobile-tablet" />
    <AppFooter />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media only screen and (min-width: 1024px) {
  .overlay-footer-mobile-tablet {
    display: none;
  }
}
</style>
