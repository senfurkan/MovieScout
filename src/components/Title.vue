<template>
    <v-row>
      <v-col cols="12">
        <h1>{{ title }}</h1>
        <!-- <v-card class="py-3">
          <v-card-title class="font-weight-bold">{{ title }}</v-card-title>
        </v-card> -->
      </v-col>
    </v-row>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    title?: string;
  }>();
  </script>
  
  <style scoped></style>
  