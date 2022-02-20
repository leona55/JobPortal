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
        <h2>Never miss a post,<b><i>Register for your free account</i></b> today!</h2>
        <router-link class="router-button" to="#">
          Register for Smoothies <Arrow class="arrow arrow-light"/>
        </router-link>
    
      </div>
    </div>
    <div class="col-lg-5" style="background: -webkit-linear-gradient(top, rgba(252,236,252,1) 0%,rgba(251,166,225,1) 50%,rgba(253,137,215,1) 51%,rgba(255,124,216,1) 100%);">
      
            <h2 style="color:hotpink; text-align:center; font-size:30px;">Complaints</h2>
            <br>
            <div class="name">
              <p style="margin-bottom:50px padding-right:50px; color:hotpink; font-size:17px; text-align:center;"><i>
            <label for="name"> Send a complaint about our site What you do not like:</label>
              </i></p>
            <br>
            <p style="text-align:center;">
            <textarea name="Complaint" cols="50" rows="10" placeholder="Send a Complaint" maxlength="100" minlength="3"></textarea> 
              <!-- Send a complaint about our site What you do not like: -->
              </p>
         
            <br>
          </div>
          <br>
          
       
            <!-- <input class="form-control" > -->
            <input type="button" class="button " style="width:10%;color:#fff; background-color: hotpink; border:10px solid #ffff; text-align:center; margin-left:700px; border-radius:40%;" value="Submit" id ="button"  onclick='return confirm("We will try to fix the problem as soon as possible")'>
            <hr>
        
        
     
      
     
   
       <h1 style="color:white; text-align:center; font-family:italic;">Visit Us!</h1>
       <hr>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755056.409775969!2d19.9872960107016!3d42.33316078699833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee0de37631f%3A0xb0c65bf8ad2fcbcc!2sMother%20Theresa%20Square!5e0!3m2!1sen!2s!4v1645208239772!5m2!1sen!2s" width="1560" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <hr>
    
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
    };
  },
  computed: {
    sampleSmoothieCards(){
      return this.$store.state.sampleSmoothieCards;
    }
  }
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
    background-color: whitesmoke;
    padding: 100px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 800px){
      padding: 125px 25px;
      flex-direction: row;
    }
    #button{
      // column-span: 30;
      // rows:10;
      width:100%;
      color:#ffe4e1;
      background-color: aliceblue;
      border:1px solid #ffff;
    }
    // name{
    //   text-align: end;
    // }
    .col-lg-5{
      background: -webkit-linear-gradient(top, #b8e1fc 0%,#a9d2f3 10%,#90bae4 25%,#90bcea 37%,#90bff0 50%,#6ba8e5 51%,#a2daf5 83%,#bdf3fd 100%);
    }

    .router-button{
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media(min-width: 800px){
          margin-left: auto;
      }
    }
    .name{
    //  position:absolute;
    //  top:0px;
    //  right:0px;
    padding:60px 30px;
    margin-bottom:15px;
    position:absolute;


    }

    h2{
      font-weight: 300;
      font-family: "Lucida Console", Courier, monospace;
      font-size: 40px;
      max-width: 425px;
      color: #fba6e1 ;
      
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width: 800px){
        text-align: initial;
        font-size: 40px;
      }
      span{
        font-weight: 200;
      }
    }
  }
}

</style>
