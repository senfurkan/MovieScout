import { ref } from "vue";
import { trendingAll } from "@/api";
import { Trending } from "@/types/Trending/Index";

export function useTrending() {
  const lists = ref<Trending[]>([]);
  const isLoading = ref(false);
  const trending = () => {
    isLoading.value = true;
    trendingAll("day")
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
    lists,
    trending,
  };
}
