<template>
  <div class="smoothie-card-wrap">
    <div class="smoothie-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <SmoothieCard
        :post="post"
        v-for="(post, index) in sampleSmoothieCards"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import SmoothieCard from "../components/SmoothieCard.vue";
export default {
  name: "smoothies",
  components: { SmoothieCard },
  computed: {
    sampleSmoothieCards() {
      return this.$store.state.sampleSmoothieCards;
    },
    editPost: {
        get(){
            return this.$store.state.editPost;
        },
        set(payload){
            this.$store.commit("toggleEditPost", payload);
        },
    },
  },

  beforeDestroy(){
      this.$store.state.commit("toggleEditPost", false);
  }
};
</script>

<style lang="scss" scoped>
.smoothie-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;

    span {
      margin-left: 16px;
      padding: 10px;
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>

