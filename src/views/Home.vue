<template>
  <div class="home">
    <SmoothiePost :post="welcomeScreen" />
    <SmoothiePost :post="post" v-for="(post, index) in sampleSmoothiePost" :key="index" />
    <div class="smoothie-card-wrap">
      <div class="container">
        <h3>View More Recent Smoothies</h3>
        <div class="smoothie-cards">
          <SmoothieCard v-for="(post, index) in sampleSmoothieCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmoothiePost from "../components/SmoothiePost.vue";
import SmoothieCard from "../components/SmoothieCard.vue";
export default {
  name: "Home",
  components: {SmoothiePost, SmoothieCard},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        smoothiePost:
        "Weekly smoothie recipes. Register today to never miss a post with new recipe",
        welcomeScreen: true,
        photo: "1",
      },
      sampleSmoothiePost: [
        {
          title: "This is a Filler Title!",
          smoothieHTML: "This is a filler smoothie post title!",
          smoothieCoverPhoto: "2",
        },
        {
          title: "This is a Filler Title2!",
          smoothieHTML: "This is a filler smoothie post title!",
          smoothieCoverPhoto: "3",
        },
      ],
      sampleSmoothieCards: [
        {smoothieTitle: "Smoothie Card #1", smoothieCoverPhoto: "smoothie-1", smoothieDate: "January 28, 2022"},
        {smoothieTitle: "Smoothie Card #2", smoothieCoverPhoto: "smoothie-2", smoothieDate: "January 28, 2022"},
        {smoothieTitle: "Smoothie Card #3", smoothieCoverPhoto: "smoothie-3", smoothieDate: "January 28, 2022"},
        {smoothieTitle: "Smoothie Card #4", smoothieCoverPhoto: "smoothie-4", smoothieDate: "January 28, 2022"},
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.smoothie-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

</style>
