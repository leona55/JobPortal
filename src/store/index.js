import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleSmoothieCards: [
      {smoothieTitle: "Smoothie Card #1", smoothieCoverPhoto: "Smoothie-1", smoothieDate: "January 28, 2022"},
      {smoothieTitle: "Smoothie Card #2", smoothieCoverPhoto: "Smoothie-2", smoothieDate: "January 28, 2022"},
      {smoothieTitle: "Smoothie Card #3", smoothieCoverPhoto: "Smoothie-3", smoothieDate: "January 28, 2022"},
      {smoothieTitle: "Smoothie Card #4", smoothieCoverPhoto: "Smoothie-4", smoothieDate: "January 28, 2022"},
    ],
    editPost: null,
  },
  mutations: {
    toogleEditPost(state, payload){
      state.editPost = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
