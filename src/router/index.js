import Vue from "vue";
import VueRouter from 'vue-router';
import Home from "../views/Home.vue";
import Smoothies from "../views/Smoothies.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/smoothies",
    name: "Smoothies",
    component: Smoothies,
    meta: {
      title: 'Smoothies'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes, 
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} |  Smoothie`;
  next();
});

export default router;
