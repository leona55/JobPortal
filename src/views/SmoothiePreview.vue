<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.smoothieTitle }}</h2>
      <img :src="smoothieCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="smoothieHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  computed: {
    smoothieTitle() {
      return this.$store.state.smoothieTitle;
    },
    smoothieHTML() {
      return this.$store.state.smoothieHTML;
    },
    smoothieCoverPhoto() {
      return this.$store.state.smoothiePhotoFileURL;
    },
  },
};
</script>

<style lang="scss">
.post-view {
  min-height: 100%;

  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }

  .ql-editor {
    padding: 0;
  }

  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }

  img {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>
