import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import Single from "@/components/Single";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/single",
      name: "Single",
      component: Single
    }
  ]
});
