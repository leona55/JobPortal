<template>
  <div class="smoothie-card">
    <div class="icons">
      <div class="icon">
        <Edit class="edit" />
      </div>
      <div class="icon">
        <Delete class="delete" />
      </div>
    </div>
    <img
      :src="require(`../assets/smoothieCards/${post.smoothieCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ post.smoothieTitle }}</h4>
      <h6>Posted on: {{ post.smoothieDate }}</h6>
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
  },
};
</script>

<style lang="scss" scoped>
.smoothie-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: content;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;

      &:hover {
        background-color: #303030;

        .edit,
        .delete {
          path {
            fill: #fff;
          }
        }
      }

      &:nth-child(1){
          margin-right: 8px;
      }

      .edit,
      .delete{
          pointer-events: none;
          height: 15px;
          width: auto;
      }
    }
  }
}
</style>