import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import TodoListView from "../views/TodoListView.vue";
import ApiTestView from "@/views/ApiTestView.vue";
import TodoDetail from "@/views/TodoDetail.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/todos",
    component: TodoListView,
  },
  {
    path: "/todos/:id",
    component: TodoDetail,
  },
  {
    path: "/api-test",
    component: ApiTestView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
