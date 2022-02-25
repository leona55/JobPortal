import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Smoothie from "../views/Smoothie.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost.vue";
import SmoothiePreview from "../views/SmoothiePreview.vue";
import ViewSmoothie from "../views/ViewSmoothie.vue";
import EditSmoothie from "../views/EditSmoothie.vue";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/smoothie",
    name: "Smoothie",
    component: Smoothie,
    meta: {
      title: "Smoothie",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      requiresAuth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
      requiresAuth: false,
    },
  }, 
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: "Admin",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: "Create Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/post-preview",
    name: "SmoothiePreview",
    component: SmoothiePreview,
    meta: {
      title: "Preview Smoothie Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/view-smoothie/:smoothieid",
    name: "ViewSmoothie",
    component: ViewSmoothie,
    meta: {
      title: "View Smoothie Post",
      requiresAuth: false,
    },
  },
  {
    path: "/edit-smoothie/:smoothieid",
    name: "EditSmoothie",
    component: EditSmoothie,
    meta: {
      title: "Edit Smoothie Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Smoothie`;
  next();
});

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        }
        return next({ name: "Home" });
      }
      return next();
    }
    return next({ name: "Home" });
  }
  return next();
});

export default router;
