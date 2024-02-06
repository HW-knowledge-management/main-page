import Vue from "vue";
import Router from "vue-router";
import Write from "@/components/WriteWiki";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main 
    },
    {
      path: "/writewiki",
      name: "WriteWiki",
      component: WriteWiki
    }
  ]
});
