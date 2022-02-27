<template>
  <div class="home">
    <SmoothiePost v-if="!user" :post="welcomeScreen" />
    <SmoothiePost
      :post="post"
      v-for="(post, index) in smoothiePostsFeed"
      :key="index"
    />
    <div class="smoothie-card-wrap">
      <div class="container">
        <h3>View More Recent Smoothie</h3>
        <div class="smoothie-cards">
          <SmoothieCard
            :post="post"
            v-for="(post, index) in smoothiePostsCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2 style="color: dark-green">
          <i>never miss a post. Register for your free account today!</i>
        </h2>
        <router-link class="router-button" to="#">
          Register for Smoothies<Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
    <div
      class="about-section"
      style="
        padding: 50px;
        text-align: center;
        background-color: rgb(220 220 220);
        color: #858585;
      "
    >
      <h1>About Us</h1>
      <p>
        We are here to do a project with vue.js html css and hope we did it!
      </p>
      <p>More info about us</p>

      <h2 style="text-align: center">Our Team</h2>
      <div class="row">
        <div
          class="column"
          style="float: left; width: 23.3%; margin-bottom: 80px; padding: 0 8px"
        >
          <div
            class="card"
            style="
              background-color: rgb(220 225 224);
              box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.30);
              margin: 18px;
            "
          >
            <img
              src="../assets/Team1.jpg"
              alt="Fortesa"
              width="200px"
              height="230px"
            />
            <div
              class="container"
              style="padding: 0px 16px; clear: both; display: table"
            >
              <h2>Fortesa Reqica</h2>
              <p class="title">Leader of project</p>
              <p>fortesa@example.com</p>
              <p>
                <button
                  style="background-color:#b5c5c1; margin-bottom:10px"
                  class="button"
                  onclick='return confirm ("phone:044-123-456")'
                >
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>

        <div
          class="column"
          style="float: left; width: 23.3%; margin-bottom: 16px; padding: 0 8px"
        >
          <div
            class="card"
            style="
              box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.30);
              margin: 18px;
              background-color: rgb(220 225 224);
            "
          >
            <img
              src="../assets/team2.jpg"
              alt="Albiona"
              width="200px"
              height="230px"
            />
            <div class="container" style="clear: both; display: table">
              <h2>Albiona Berisha</h2>
              <p class="title">Web Development</p>
              <p>albiona@example.com</p>
              <p>
                <button
                  style="background-color:#b5c5c1; margin-bottom:10px"
                  class="button"
                  onclick='return confirm ("phone:044-123-456")'
                >
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>

        <div
          class="column"
          style="float: left; width: 23.3%; margin-bottom: 16px; padding: 0 8px"
        >
          <div
            class="card"
            style="
              background-color: rgb(220 225 224);
              box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.30);
              margin: 18px;
            "
          >
            <img
              src="../assets/team3.jpg"
              alt="Leonora"
              width="180px"
              height="230px"
            />
            <div class="container" style="clear: both; display: table">
              <h2>Leonora Mavriqi</h2>
              <p class="title">Designer</p>
              <p>nora@example.com</p>
              <p>
                <button
                  style="background-color:#b5c5c1; margin-bottom:10px"
                  class="button"
                  onclick='return confirm ("phone:044-123-456")'
                >
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>

        <div
          class="column"
          style="float: left; width: 23.3%; margin-bottom: 16px; padding: 0 8px"
        >
          <div
            class="card"
            style="
              background-color: rgb(220 225 224);
              box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.30);
              margin: 18px;
            "
          >
            <img
              src="../assets/team4.jpg"
              alt="Edona"
              width="180px"
              height="230px"
            />
            <div class="container" style="clear: both; display: table">
              <h2>Edona Berisha</h2>
              <p class="title">Front end</p>
              <p>edona@example.com</p>
              <p>
                <button
                  style="background-color:#b5c5c1; margin-bottom:10px"
                  class="button"
                  onclick='return confirm ("phone:044-123-456")'
                >
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755056.409775969!2d19.9872960107016!3d42.33316078699833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee0de37631f%3A0xb0c65bf8ad2fcbcc!2sMother%20Theresa%20Square!5e0!3m2!1sen!2s!4v1645208239772!5m2!1sen!2s"
        width="1500"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
import SmoothiePost from "../components/SmoothiePost";
import SmoothieCard from "../components/SmoothieCard";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { SmoothiePost, SmoothieCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        smoothiePost:
          "A smoothie or smoothy is a drink made by puréeing fruit and vegetables in a blender. A smoothie often has a liquid base such as fruit juice, dairy products, such as milk, yogurt, ice cream or cottage cheese.. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
    };
  },
  computed: {
    smoothiePostsFeed() {
      return this.$store.getters.smoothiePostsFeed;
    },
    smoothiePostsCards() {
      return this.$store.getters.smoothiePostsCards;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.smoothie-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    .about-section {
      padding: 50px;
      text-align: center;
      background-color: #6a7283;
      color: white;
    }

     .column {
      float: left;
      width: 33.3%;
      margin-bottom: 16px;
      padding: 0 8px;
    }
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 8px;
    }

    .container {
      padding: 0 16px;
    }

    .container::after,
    .row::after {
      content: "";
      clear: both;
      display: table;
    }

    .title {
      color: grey;
    }

    .button {
      background-color: #6a7283;
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      text-align: center;
      cursor: pointer;
      width: 100%;
    }

    .button:hover {
      background-color: rgb(77, 74, 74);
    }
    .column {
      border-radius: 50%;
    }

    @media screen and (max-width: 650px) {
      .column {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>