import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import New from "@/components/New";
import Artigo from "@/components/Artigo";
import Show from "@/components/Show";
import Jobs from "@/components/Jobs";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/new",
      name: "New",
      component: New
    },
    {
      path: "/show",
      name: "Show",
      component: Show
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: Jobs
    },
    {
      path: "/story/:id",
      name: "Artigo",
      component: Artigo
    }
  ]
});
