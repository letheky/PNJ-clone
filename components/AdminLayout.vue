<template>
  <!------Sidebar-------->
  <v-navigation-drawer
    left
    elevation="0"
    app
    class="leftSidebar"
    v-model="sDrawer"
  >
    <!---Logo part -->
    <div class="pa-5">
      <div class="logo">
        <NuxtLink to="/">
          <v-img
            alt="HAJ - Admin"
            max-width="100"
            lazy-src="/images/logos/newLogo.png"
            src="/images/logos/newLogo.png"
          ></v-img>
        </NuxtLink>
      </div>
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div>
      <perfect-scrollbar class="scrollnavbar">
        <v-list class="pa-6">
          <!---Menu Loop -->
          <template v-for="(item, i) in sidebarMenu">
            <!---Item Sub Header -->
            <AdminComponentsVerticalSidebarNavGroup
              :item="item"
              v-if="item.header"
              :key="item.title"
            />

            <!---Single Item-->
            <AdminComponentsVerticalSidebarNavItem
              :item="item"
              v-else
              class="leftPadding"
            />
            <!---End Single Item-->
          </template>
        </v-list>
      </perfect-scrollbar>
    </div>
  </v-navigation-drawer>
  <!------Header-------->
  <v-app-bar elevation="3" height="70">
    <div class="d-flex align-center justify-space-between w-100">
      <div>
        <v-btn
          class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted"
          @click="sDrawer = !sDrawer"
          icon
          variant="flat"
          size="small"
        >
          <Icon name="menu" />
        </v-btn>
        <!-- Notification -->
        <AdminComponentsVerticalHeaderNotificationDD />
      </div>
      <div>
        <!-- User Profile -->
        <AdminComponentsVerticalHeaderProfileDD />
      </div>
    </div>
  </v-app-bar>
</template>
<script setup>
import { ref, shallowRef } from "vue";
import sidebarItems from "@/components/AdminComponents/VerticalSidebar/sidebarItem";
const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);
</script>
