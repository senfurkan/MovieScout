<template>
  <v-row>
    <v-col cols="12">
      <v-tabs v-model="localTab" stacked grow>
        <v-tab v-for="item in tabItems" :value="item.value">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.text }}
        </v-tab>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Tab } from "@/types/Tab";

const props = defineProps<{
  tab: string;
  tabItems: Tab[];
}>();

const emit = defineEmits(["update:tab"]);
const localTab = ref(props.tab);

watch(localTab, (newValue) => {
  emit("update:tab", newValue);
});
</script>

<style scoped></style>
