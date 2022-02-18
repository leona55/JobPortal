import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/app";
import "firebase/auth";
<<<<<<< HEAD
//comment
=======

>>>>>>> 047ca5620f496c77eb6f21d0b1b62de2e32911fd
Vue.use(Vue2Editor);

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
if(!app){
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
  
}
})
