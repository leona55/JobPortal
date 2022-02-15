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
<<<<<<< HEAD
    meta: {
      title: 'Home'
    }
=======
>>>>>>> 20de8b96667258fc1697d19ea2bac3f1c90fec1e
  },
  {
    path: "/smoothies",
    name: "Smoothies",
    component: Smoothies,
<<<<<<< HEAD
    meta: {
      title: 'Smoothies'
    }
=======
>>>>>>> 20de8b96667258fc1697d19ea2bac3f1c90fec1e
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
<<<<<<< HEAD
  routes, 
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} |  Smoothie`;
  next();
=======
  routes,
>>>>>>> 20de8b96667258fc1697d19ea2bac3f1c90fec1e
});

export default router;
