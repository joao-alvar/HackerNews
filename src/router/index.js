import Vue from "vue";
import Router from "vue-router";
import FonteNoticia from "@/components/FonteNoticia";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "FonteNoticia",
      component: FonteNoticia
    }
  ]
});
