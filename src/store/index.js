import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    smoothiePosts: [],
    postLoaded: null,
    smoothieHTML: "Write your smoothie title here...",
    smoothieTitle: "",
    smoothiePhotoName: "",
    smoothiePhotoFileURL: null,
    smoothiePhotoPreview: null,
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  getters: {
    smoothiePostsFeed(state) {
      return state.smoothiePosts.slice(0, 2);
    },
    smoothiePostsCards(state) {
      return state.smoothiePosts.slice(2, 6);
    },
  },
  mutations: {
    newSmoothiePost(state, payload) {
      state.smoothieHTML = payload;
    },
    updateSmoothieTitle(state, payload) {
      state.smoothieTitle = payload;
    },
    fileNameChange(state, payload) {
      state.smoothiePhotoName = payload;
    },
    createFileURL(state, payload) {
      state.smoothiePhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.smoothiePhotoPreview = !state.smoothiePhotoPreview;
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    setSmoothieState(state, payload) {
      state.smoothieTitle = payload.smoothieTitle;
      state.smoothieHTML = payload.smoothieHTML;
      state.smoothiePhotoFileURL = payload.smoothieCoverPhoto;
      state.smoothiePhotoName = payload.smoothieCoverPhotoName;
    },
    filterSmoothiePost(state, payload) {
      state.smoothiePosts = state.smoothiePosts.filter((post) => post.smoothieID !== payload);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
      console.log("IsAdmin: "+state.profileAdmin);
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
      console.log("ProfileId: "+state.profileId);
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }, user) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
    },
    async getPost({ state }) {
      const dataBase = await db.collection("smoothiePosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.smoothiePosts.some((post) => post.smoothieID === doc.id)) {
          const data = {
            smoothieID: doc.data().smoothieID,
            smoothieHTML: doc.data().smoothieHTML,
            smoothieCoverPhoto: doc.data().smoothieCoverPhoto,
            smoothieTitle: doc.data().smoothieTitle,
            smoothieDate: doc.data().date,
            smoothieCoverPhotoName: doc.data().smoothieCoverPhotoName,
          };
          state.smoothiePosts.push(data);
        }
      });
      state.postLoaded = true;
    },
    async updatePost({ commit, dispatch }, payload) {
      commit("filterSmoothiePost", payload);
      await dispatch("getPost");
    },
    async deletePost({ commit }, payload) {
      const getPost = await db.collection("smoothiePosts").doc(payload);
      await getPost.delete();
      commit("filterSmoothiePost", payload);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },
  },
  modules: {},
});
