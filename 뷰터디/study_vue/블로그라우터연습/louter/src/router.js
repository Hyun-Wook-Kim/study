import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import TodoList from "./components/TodoList.vue";
import DetailTodo from "./components/DetailTodo.vue";
import Edit from "./components/Edit.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: TodoList,
  },
  {
    path: "/list/:id",
    component: DetailTodo,
    children: [
      {
        path: "edit",
        component: Edit,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
