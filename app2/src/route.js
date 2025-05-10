import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("./Home.vue"), // Lazy loading
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
