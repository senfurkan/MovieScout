<template>
  <v-app>
    <nav-bar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "@/components/Navbar.vue";
</script>
