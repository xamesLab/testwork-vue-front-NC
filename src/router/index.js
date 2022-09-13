import { createRouter, createWebHistory } from "vue-router";
import Movies from "@/views/Movies.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Movies,
  },
  {
    path: "/:id",
    name: "detail",
    component: () => import("@/views/MovieDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
