import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
  ],
});

export { router };