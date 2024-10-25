<template>
  <ProgressCircular v-if="isLoading" />
  <template v-else>
    <Title
      title="Trendler"
      v-model:filtering="filtering"
      :select-items="filteringList"
    />
    <Tab v-model:tab="tab" :tab-items="tabList" />

    <Card v-if="tab != 'person'" :items="lists as Trending[]" />
    <PersonCard v-else :items="lists as Person[]" />
  </template>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useTrending } from "@/composables/Trending/index";
import Title from "@/components/Title.vue";
import ProgressCircular from "@/components/ProgressCircular.vue";
import Tab from "@/components/Tab.vue";
import Card from "@/components/Card.vue";
import PersonCard from "@/components/PersonCard.vue";
import { Trending } from "@/types/Trending/Index";
import { Person } from "@/types/Trending/person";

const { isLoading, filtering, tab, tabList, filteringList, lists, trending } =
  useTrending();

onMounted(() => {
  trending(filtering.value, tab.value);
});

watch(filtering, (newValue) => {
  trending(newValue, tab.value);
});

watch(tab, (newValue) => {
  trending(filtering.value, newValue);
});
</script>

<style scoped></style>
