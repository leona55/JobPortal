<template>
  <div class="smoothie-wrapper" :class="{ 'no-user': !user }">
    <div class="smoothie-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.smoothieTitle }}</h2>
        <p v-if="post.welcomeScreen">{{ post.smoothiePost }}</p>
        <p class="content-preview" v-else v-html="post.smoothieHTML"></p>
        <router-link
          class="link link-light"
          v-if="post.welcomeScreen"
          :to="{ name: 'Login' }"
        >
          Login/Register<Arrow class="arrow arrow-light" />
        </router-link>
        <router-link
          class="link"
          v-else
          :to="{
            name: 'ViewSmoothie',
            params: { smoothieid: this.post.smoothieID },
          }"
        >
          View The Post<Arrow class="arrow" />
        </router-link>
      </div>
    </div>
    <div class="smoothie-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require(`../assets/SmoothiePhotos/${post.photo}.jpg`)"
        alt=""
      />
      <img v-else :src="post.smoothieCoverPhoto" alt="" />
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
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.smoothie-wrapper {
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }

  .smoothie-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }

    div {
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px) {
        padding: 0 24px;
      }

      h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px) {
          font-size: 40px;
        }
      }

      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
      }

      .content-preview {
        font-size: 13px;
        max-height: 24px;
        width: 286px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: 0.5s ease-in all;

        &:hover {
          border-bottom-color: pink;
        }
      }

      .link-light {
        &:hover {
          border-bottom-color: rgb(0, 0, 0);
        }
      }
    }
  }

  .smoothie-photo {
    order: 1;
    flex: 3;
    @media (min-width: 700px) {
      order: 2;
    }
    @media (min-width: 800px) {
      flex: 4;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .smoothie-content {
      order: 2;
    }
    .smoothie-photo {
      order: 1;
    }
  }
}

.no-user:first-child {
  .smoothie-content {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
}
</style>
