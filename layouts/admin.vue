<script setup lang="ts">
const title = ref("HAJ - Trang quản trị");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Trang quản trị`
      : "HAJ - Trang quản trị";
  },
});
</script>

<template>
  <v-locale-provider>
    <v-app>
      <AdminLayout />
      <v-main>
        <v-container fluid class="page-wrapper">
          <div class="maxWidth">
            <slot></slot>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
