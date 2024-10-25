import { createRouter, createWebHistory } from "vue-router";
import { NavBar } from "@/constants/appConstants";
import Default from "@/layouts/Default.vue";
import Home from "@/pages/Home.vue";
import Trending from "@/pages/Trending/Index.vue";

const routes = [
  {
    path: "/",
    redirect:  NavBar.TRENDS.path,
    component: Default,
    children: [
      /* {
        path: NavBar.HOME_VIEW.path,
        name: NavBar.HOME_VIEW.name,
        component: Home,
      }, */
      /* {
        path: NavBar.SEARCH_FOR_A_MOVIE.path,
        name: NavBar.SEARCH_FOR_A_MOVIE.name,
        component: About,
      }, */
      {
        path: NavBar.TRENDS.path,
        name: NavBar.TRENDS.name,
        component: Trending,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
