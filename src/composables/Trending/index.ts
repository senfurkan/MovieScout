import { ref } from "vue";
import { trendingAll } from "@/api";
import { Trending } from "@/types/Trending/Index";

export function useTrending() {
  const filtering = ref("day")

  const filteringList = [
    { text: "Günlük", value: "day" },
    { text: "Haftalık", value: "week" },
  ];

  const lists = ref<Trending[]>([]);
  const isLoading = ref(false);
  const trending = (item: string) => {
    isLoading.value = true;
    trendingAll(item)
      .then((response) => {
        lists.value = response?.data?.results;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        isLoading.value = false;
        Promise.resolve();
      });
  };

  return {
    isLoading,
    filtering,
    filteringList,
    lists,
    trending,
  };
}
