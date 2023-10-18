import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddProjectView from "../views/AddProjectView.vue";
import EditProject from "../views/EditProject.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add",
      name: "AddProject",
      component: AddProjectView,
    },
    {
      path: "/projects/:id",
      name: "EditProject",
      component: EditProject,
      props: true,
    },
  ],
});

export default router;
