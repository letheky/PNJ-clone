<template>
  <div>
    <h1>This is a product number {{ index }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const index = route.params.id
</script>

<style lang="scss" scoped></style>
