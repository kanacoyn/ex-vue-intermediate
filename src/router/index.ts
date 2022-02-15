import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/Ex01",
    component: () => import("../views/Ex01.vue"),
  },
  {
    path: "/Ex01Detail/:id",
    component: () => import("../views/Ex01Detail.vue"),
  },
  {
    path: "/Ex02",
    component: () => import("../views/Ex02.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
