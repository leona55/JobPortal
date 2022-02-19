<template>
  <header>
    <nav class="container">
      <div class="branding" >
        <p><img src="../assets/smoth.png" alt="This picture of soothies logo" width="70" height="60"></p>
        <router-link class="header" :to="{ name: 'Home' }"
          >Smoothies</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{name:'Smoothies'}">Smoothies</router-link>
          <router-link class="link" to="#">Create recipe</router-link>
          <router-link class="link" :to="{name:'Login'}">Login/Register</router-link>
        </ul>
        <div class ="profile" ref="profile">
          <span>{{ this.$store.state.profileInitials }} </span>
          <div class="profile-menu">
            <div class="info">
              <p class="initials">{{this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>{{this.$store.state.profileFirstName}} {{this.$store.state.profileLastName}}</p>
                <p>{{this.$store.state.profileUserName}}</p>
                <p>{{this.$store.state.profileEmail}}</p>
              </div>
            </div>
           <div class ="options">
             <div class="option">
               <router-link class="option" to ="#"></router-link>
               <userIcon class="icon"/>
               <p>Profile</p>
                <!-- </router-link>  -->
             </div>
             <div class="option">
               <router-link class="option" to ="#"></router-link>
               <adminIcon class="icon"/>
               <p>Admin</p>
               
                <!-- </router-link> -->
             </div>
             <div class="option">
               <router-link class="option" to ="#"></router-link>
               <signoutIcon class="icon"/>
               <p>Sign Out</p>
               <!-- </router-link>  -->
             </div>
           </div>
          </div>
        </div>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{name:'Smoothies'}">Smoothies</router-link>
        <router-link class="link" to="#">Create recipe</router-link>
        <router-link class="link" to="{name:'Login'}">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signoutIcon from "../assets/Icons/sign-out-alt-regular.svg";


export default {
  name: "navigation",
  components: {
    menuIcon,
    adminIcon,
    signoutIcon,
    userIcon
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windownWidth: null,
    };
  },
  created(){
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #E3AFBC;
  padding: 0 25px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: white;
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: white;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: white;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
        .profile{
          position:relative;
          cursor:pointer;
          display:flex;
          align-items: center;
          justify-content: center;
          width:40px;
          height:40px;
          border-radius: 50%;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: white;
        }
        .profile-menu{
          position:absolute;
          top:60px;
          right:0;
          width:250px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: white;
          // box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)
        }
        .info{
          display:flex;
          align-items: center;
          padding:15px;
          border-bottom:1px solid #fff;
        }
         
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: white;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
      transition: all 1s ease;
  }

  .mobile-nav-enter {
      transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
      transform: translateX(0);
  }

  .mobile-nav-leave-to {
      transform: translateX(-250px);
  }
}
</style>