import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Greeting from "./components/Greeting.vue";
import Detail from "./components/Detail.vue";
import Author from "./components/Author";
import Comment from "./components/Comment";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/Greeting",
    component: Greeting,
  },
  {
    path: "/Detail",
    component: Detail,
  },
  {
    path: "/Detail/:id*",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ],
  },
  {
    path: "/:anything(.*)",
    component: Greeting,
  },
  //   순서가 중요함. 여러개가 적용 되면 마지막 거만 적용됨. 즉 404는 마지막에 넣으면 좋을 거 같음.
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
