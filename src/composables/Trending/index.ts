import { ref } from "vue";
import { trendingAll, trendingMovie, trendingTV, trendingPerson } from "@/api";
import { Trending } from "@/types/Trending/Index";

export function useTrending() {
  const filtering = ref("day");

  const filteringList = [
    { text: "Günlük", value: "day" },
    { text: "Haftalık", value: "week" },
  ];

  const tab = ref("all");

  const tabList = [
    { text: "Tümü", value: "all", icon: "mdi-expand-all-outline" },
    { text: "Filmler", value: "movie", icon: "mdi-movie-open" },
    { text: "Diziler", value: "tv", icon: "mdi-television-box" },
    /* { text: "Oyuncular", value: "person", icon: "mdi-account-group" }, */
  ];

  const lists = ref<Trending[]>([]);
  const isLoading = ref(false);
  const trending = (item: string, item2: string) => {
    isLoading.value = true;
    switch (item2) {
      case "movie":
        trendingMovie(item)
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
        break;
      case "tv":
        trendingTV(item)
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
        break;
      case "person":
        trendingPerson(item)
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
        break;
      default:
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
        break;
    }
  };

  return {
    isLoading,
    filtering,
    filteringList,
    tab,
    tabList,
    lists,
    trending,
  };
}
