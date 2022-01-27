<template>
  <div class="smoothie-wrapper">
    <div class="smoothie-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.wlcomeScreen">{{ post.smoothiePost }}</p>
        <p class="content-preview" v-else>{{ post.smoothieHTML }}</p>
        <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
        Login/Register<Arrow class="arrow arrow-light" />
        </router-link>
        <router-link class="link link-light" v-else to="#">
        View The Post<Arrow class="arrow" />
        </router-link>
      </div>
      <div class="smoothie-photo">
          <img v-if="post.welcomeScreen" :src="require(`../assets/smoothiePhotos/${post.photo}.jpg`)" alt="">
          <img v-else :src="require(`../assets/smoothiePhotos/${post.smoothieCoverPhoto }.jpg`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "smoothiePost",
  props: ["post"],
  components: {
    Arrow,
  },
};
</script>

<style lang="scss" scoped>



</style>