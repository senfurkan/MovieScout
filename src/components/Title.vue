<template>
  <v-row>
    <v-col cols="12" sm="9">
      <h1>{{ props.title }}</h1>
    </v-col>
    <v-col cols="12" sm="3" class="d-flex justify-end">
      <v-select
        v-model="localFiltering"
        :items="props.selectItems"
        item-title="text"
        item-value="value"
        label="Trendlerde Listele"
        variant="solo"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Select } from "@/types/Select";
const props = defineProps<{
  title: string;
  filtering: string;
  selectItems: Select[];
}>();

const emit = defineEmits(["update:filtering"]);
const localFiltering = ref(props.filtering);

watch(localFiltering, (newValue) => {
  emit("update:filtering", newValue);
});
</script>

<style scoped></style>
