<template>
  <div class="smoothie-card">
      <div class="icons">
          <div class="icon">
              <Edit class="icon" />
          </div>
           <div class="icon">
              <Delete class="icon" />
          </div>
      </div>
      <img :src="require(`../assets/smoothieCards/${post.smoothieCoverPhoto}.jpg`)" alt="">
      <div class="info">
          <h4>{{post.smoothieTitle}}</h4>
          <h6>Posted on: {{post.smoothieDate}}</h6>
          <router-link class="link" to="#">
              Vew The Post <Arrow class="arrow" />
          </router-link>
      </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";
export default {
name: "smoothieCard",
props: ["post"],
components: {
    Arrow,
    Edit,
    Delete,
}
}
</script>

<style>

</style>