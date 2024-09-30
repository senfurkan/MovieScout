<template>
  <v-row>
    <v-col cols="12" sm="6" lg="4" v-for="item in props.items" :key="item.id">
      <v-card>
        <v-img
          :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
        ></v-img>

        <v-card-item>
          <v-card-title>{{
            item.title ? item.title : item.original_name
          }}</v-card-title>

          <v-card-subtitle>
            <v-icon
              :icon="
                item.media_type == 'tv' ? 'mdi-television-box' : 'mdi-movie'
              "
            ></v-icon>
            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :model-value="item.vote_average.valueOf() / 2"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating>

            <div class="text-grey ms-4">
              {{ item.vote_average.toFixed(1) }} / 10 ({{ item.vote_count }})
            </div>
          </v-row>

          <div class="text-container my-8">
            {{ item.overview }}
          </div>
        </v-card-text>

        <!-- <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="Reserve"
          block
          border
          @click="reserve"
        ></v-btn>
      </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { Trending } from "@/types/Trending/Index";

const props = defineProps<{
  items: Trending[];
}>();

onMounted(() => {
  console.log("items", props.items);
});
</script>

<style scoped>
.text-container {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Görüntülemek istediğin satır sayısı */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  max-height: 4.5em; /* 3 satırlık bir yüksekliği belirt */
}
</style>
