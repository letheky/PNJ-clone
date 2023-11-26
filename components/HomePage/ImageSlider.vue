<template>
  <div>
    <v-container fluid>
      <v-row>
        <div class="scroll-container ga-2">
          <v-img
            class="responsive-home-page-images"
            v-for="index in 3"
            :key="index"
            src="/images/banners/subbanner.jpg"
            alt="Cinque Terre"
            width="400"
            height="300"
          />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: darkgray lightgray;
  white-space: nowrap;
  width: 100%; /* Adjust width to fill the available space */
}
.fixed-width-col {
  flex: 0 0 300px; /* Set a fixed width for each column */
  margin-right: 10px; /* Adjust margin between columns */
}
</style>
