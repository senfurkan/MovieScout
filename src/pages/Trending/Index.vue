<template>
  <Title title="Trendler" />
  <ProgressCircular v-if="isLoading" />
  <Card v-else :items="lists" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useTrending } from "@/composables/Trending/index";
import Title from "@/components/Title.vue";
import ProgressCircular from "@/components/ProgressCircular.vue";
import Card from "@/components/Card.vue";

const { isLoading, lists, trending } = useTrending();

onMounted(() => {
  trending();
});
</script>

<style scoped></style>
