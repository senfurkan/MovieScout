<template>
    <v-app-bar>
      <v-container class="d-flex align-center justify-center">
        <!-- BEGIN: Logo -->
        <v-app-bar-title>
          <v-img
            src="../assets/MovieScout.png"
            max-height="200"
            max-width="200"
            @click="logoClicked"
          ></v-img>
        </v-app-bar-title>
        <!-- END: Logo -->
  
        <template v-if="!isMobileDevice.value">
          <v-btn
            v-for="(link, index) in NavBar"
            :key="index"
            @click="selectedLinksClicked(link.path)"
            :text="link.name"
            variant="text"
            :class="{
              'font-weight-bold': link.path === selectedLink,
              'font-weight-light': link.path !== selectedLink,
            }"
            >{{ link.name }}</v-btn
          >
        </template>
  
        <v-app-bar-nav-icon
          v-if="isMobileDevice.value"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>
  
    <v-navigation-drawer v-model="drawer" temporary v-if="isMobileDevice.value">
      <v-list>
        <v-list-item
          v-for="(link, index) in NavBar"
          :key="index"
          @click="selectedLinksClicked(link.path)"
          :class="{
            'font-weight-bold': link.path === selectedLink,
            'font-weight-light': link.path !== selectedLink,
          }"
        >
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { onMounted, computed, ref } from "vue";
  import { useDisplay } from "vuetify";
  import { NavBar } from "@/constants/appConstants";
  
  const route = useRoute();
  const router = useRouter();
  
  const display = useDisplay();
  
  const isMobileDevice = computed(() => {
    return display.mobile;
  });
  
  const drawer = ref(false);
  const selectedLink = ref("");
  
  const emit = defineEmits(["links-clicked", "logo-clicked"]);
  const selectedLinksClicked = (item: string) => {
    selectedLink.value = item;
    router.push({ path: selectedLink.value });
    drawer.value = false;
  };
  
  const logoClicked = () => {
    emit("logo-clicked");
  };
  
  onMounted(() => {
    selectedLink.value = route.path;
  });
  </script>
  
  <style scoped></style>
  