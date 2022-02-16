import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";


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
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId : null,
    profileIniitials: null,
  },
  mutations: {
    toggleEditPost(state, payload){
      state.editPost = payload;
      
    },
    updateUser(state, payload){
      state.user = payload
    },
    setProfileInfo(state, doc){
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().userName;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + 
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
    },
  },
  modules: {
  }
})
