<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >Smoothies</router-link
          >
          <ul>
            <li>
              <a href="https:/www.youtube.com" target="_blank" title="This link take to youtube"><youTube class="svg-icon" /></a>
            </li>
            <li>
              <a href="https:/www.twitter.com" target="_blank" title="This link take to twitter"><twitter class="svg-icon" /></a>
            </li>
            <li>
              <a href="https:/www.instagram.com" target="_blank" title="This link take to instagram"><instagram class="svg-icon" /></a>
            </li>
            <li>
              <a href="https:/www.google.com"><linkedin class="svg-icon" /></a>
            </li>
          </ul>
        </div>
        
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Smoothies' }"
              >Smoothies</router-link
            >
            <router-link v-if="user" class="link" to="#"
              >Create Post</router-link
            >
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
              >Log In / Register</router-link
            >
          </ul>
        </div>
        <div class="contact">
          <h4>Contact Us:</h4>
          <p>smoothie123@hotmail.com</p>
          <p>phone:123-456-789</p>
          <p >Nena Tereza,Prishtine</p>
        </div>
       </div>
      <!-- <div class="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755056.409775969!2d19.9872960107016!3d42.33316078699833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee0de37631f%3A0xb0c65bf8ad2fcbcc!2sMother%20Theresa%20Square!5e0!3m2!1sen!2s!4v1645208239772!5m2!1sen!2s" width="500" height="" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div> -->
      <div class="right">
        <p style="font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif">Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/youtube-brands.svg";
export default {
  name: "footer-vue",
  components: {
    youTube,
    twitter,
    instagram,
    linkedin,
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #E3AFBC;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px){
            text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;

        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 25px;
            font-weight: 600;
            color: #fff;
            text-decoration: none;
            font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
          }
        }
      }
    }

    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }

    p {
      margin-top: auto;
    }
    .contact{
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      padding-right:100px;
    }
  }
}
</style>