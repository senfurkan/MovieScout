<template>
  <Title
    title="Trendler"
    v-model:filtering="filtering"
    :select-items="filteringList"
  />
  <ProgressCircular v-if="isLoading" />
  <Card v-else :items="lists" />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useTrending } from "@/composables/Trending/index";
import Title from "@/components/Title.vue";
import ProgressCircular from "@/components/ProgressCircular.vue";
import Card from "@/components/Card.vue";

const { isLoading, filtering, filteringList, lists, trending } = useTrending();

onMounted(() => {
  trending(filtering.value);
});

watch(filtering, (newValue) => {
  trending(newValue);
});
</script>

<style scoped></style>
