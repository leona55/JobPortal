<template>
  <div class="home">
    <SmoothiePost :post="welcomeScreen" />
    <SmoothiePost :post="post" v-for="(post, index) in sampleSmoothiePost" :key="index" />
    <div class="smoothie-card-wrap">
      <div class="container">
        <h3>View More Recent Smoothies</h3>
        <div class="smoothie-cards">
          <SmoothieCard :post="post" v-for="(post, index) in sampleSmoothieCards" :key="index" />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#">
          Register for Smoothies <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SmoothiePost from "../components/SmoothiePost.vue";
import SmoothieCard from "../components/SmoothieCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: {SmoothiePost, SmoothieCard, Arrow},
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
        {smoothieTitle: "Smoothie Card #1", smoothieCoverPhoto: "Smoothie-1", smoothieDate: "January 28, 2022"},
        {smoothieTitle: "Smoothie Card #2", smoothieCoverPhoto: "Smoothie-2", smoothieDate: "January 28, 2022"},
        {smoothieTitle: "Smoothie Card #3", smoothieCoverPhoto: "Smoothie-3", smoothieDate: "January 28, 2022"},
        {smoothieTitle: "Smoothie Card #4", smoothieCoverPhoto: "Smoothie-4", smoothieDate: "January 28, 2022"},
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

.updates{
  .container{
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 800px){
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button{
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media(min-width: 800px){
          margin-left: auto;
      }
    }

    h2{
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width: 800px){
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}

</style>
