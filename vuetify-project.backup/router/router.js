//📁router/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Info from '../views/Info.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', //해쉬값 제거 방식
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Main
    },
    {
      path: '/Info',
      component: Info
    }
  ]
});