import { ref } from "vue";
import { trendingAll, trendingMovie, trendingTV, trendingPerson } from "@/api";
import { Trending } from "@/types/Trending/Index";
import { Person } from "@/types/Trending/person";

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
    { text: "Oyuncular", value: "person", icon: "mdi-account-group" },
  ];

  /* const lists = tab.value != "person" ? ref<Trending[]>([]) : ref<Person[]>([]); */
  const lists = ref<Trending[] | Person[]>([]);
  const isLoading = ref(false);
  const apiMap: Record<string, (item: string) => Promise<any>> = {
    all: trendingAll,
    movie: trendingMovie,
    tv: trendingTV,
    person: trendingPerson,
  };

  const trending = (item: string, item2: string) => {
    isLoading.value = true;
    const fetchTreding = apiMap[item2] || apiMap.all;

    fetchTreding(item)
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
    tab,
    tabList,
    lists,
    trending,
  };
}
