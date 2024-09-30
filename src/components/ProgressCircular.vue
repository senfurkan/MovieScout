<template>
  <v-row class="row">
    <v-col cols="12" class="d-flex justify-center align-center">
      <v-progress-circular
        :size="100"
        :width="5"
        indeterminate
      ></v-progress-circular>
    </v-col>
  </v-row>
</template>

<script setup lang="ts"></script>

<style scoped>
.row {
  height: 75vh;
}
</style>
