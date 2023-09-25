import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomePage.vue";
import AboutPage from "../Pages/About Page.vue";
import ServicePage from "../Pages/ServicePage.vue";
import ContactPage from "../Pages/ContactPage.vue";

/**Define routes here */
const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/AboutPage", name: "AboutPage", component: AboutPage },
  {
    path: "/ServicePage",
    name: "ServicePage",
    component: ServicePage,
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: ContactPage,
  },
  // {
  //   path: "/",
  //   redirect: "/AboutPage",
  // },
  // {
  //   path: "/about",
  //   component: AboutPage,
  // },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
