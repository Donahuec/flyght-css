import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/buttons",
      name: "Buttons",
      component: () => import("../views/ButtonsView.vue"),
    },
    {
      path: "/colors",
      name: "Colors",
      component: () => import("../views/ColorsView.vue"),
    },
    {
      path: "/typography",
      name: "Typography",
      component: () => import("../views/TypographyView.vue"),
    },
    {
      path: "/grid",
      name: "Grid",
      component: () => import("../views/GridView.vue"),
    },
    {
      path: "/cards",
      name: "Cards",
      component: () => import("../views/CardView.vue"),
    },
    {
      path: "/accordions",
      name: "Accordions",
      component: () => import("../views/AccordionsView.vue"),
    },
  ],
});

export default router;
