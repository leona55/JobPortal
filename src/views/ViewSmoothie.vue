<template>
  <div class="post-view" v-if="currentSmoothie">
    <div class="container quillWrapper">
      <h2>{{ this.currentSmoothie[0].smoothieTitle }}</h2>
      <h4>Posted on: {{ new Date(this.currentSmoothie[0].smoothieDate).toLocaleString("en-us", { dateStyle: "long" }) }}</h4>
      <img :src="this.currentSmoothie[0].smoothieCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="this.currentSmoothie[0].smoothieHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewSmoothie",
  data() {
    return {
      currentSmoothie: null,
    };
  },
  async mounted() {
    this.currentSmoothie = await this.$store.state.smoothiePosts.filter((post) => {
      return post.smoothieID === this.$route.params.smoothieid;
    });
  },
};
</script>

<style lang="scss">
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}
</style>
