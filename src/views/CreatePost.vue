<template>
  <div class="create-post">
    <SmoothieCoverPreview v-show="this.$store.state.smoothiePhotoPreview" />
    <Loading v-show="loading" />
    <div class="container">
      <div :class="{ invisible: !error }" class="err-message">
        <p><span>Error:</span>{{ this.errorMsg }}</p>
      </div>
      <div class="smoothie-info">
        <input type="text" placeholder="Enter Smoothie Title" v-model="smoothieTitle" />
        <div class="upload-file">
          <label for="smoothie-photo">Upload Cover Photo</label>
          <input type="file" ref="smoothiePhoto" id="smoothie-photo" @change="fileChange" accept=".png, .jpg, ,jpeg" />
          <button @click="openPreview" class="preview" :class="{ 'button-inactive': !this.$store.state.smoothiePhotoFileURL }">
            Preview Photo
          </button>
          <span>File Chosen: {{ this.$store.state.smoothiePhotoName }}</span>
        </div>
      </div>
      <div class="editor">
        <vue-editor :editorOptions="editorSettings" v-model="smoothieHTML" useCustomImageHandler @image-added="imageHandler" />
      </div>
      <div class="smoothie-actions">
        <button @click="uploadSmoothie">Publish Smoothie</button>
        <router-link class="router-button" :to="{ name: 'SmoothiePreview' }">Post Preview</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SmoothieCoverPreview from "../components/SmoothieCoverPreview";
import Loading from "../components/Loading";
import firebase from "firebase/app";
import "firebase/storage";
import db from "../firebase/firebaseInit";
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
export default {
  name: "CreatePost",
  data() {
    return {
      file: null,
      error: null,
      errorMsg: null,
      loading: null,
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
    };
  },
  components: {
    SmoothieCoverPreview,
    Loading,
  },
  methods: {
    fileChange() {
      this.file = this.$refs.smoothiePhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
    },

    openPreview() {
      this.$store.commit("openPhotoPreview");
    },
    //comment

    imageHandler(file, Editor, cursorLocation, resetUploader) {
      const storageRef = firebase.storage().ref();
      const docRef = storageRef.child(`documents/SmoothiePostPhotos/${file.name}`);
      docRef.put(file).on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const downloadURL = await docRef.getDownloadURL();
          Editor.insertEmbed(cursorLocation, "image", downloadURL);
          resetUploader();
        }
      );
    },
    //comment is there please share our project

    uploadSmoothie() {
      if (this.smoothieTitle.length !== 0 && this.smoothieHTML.length !== 0) {
        if (this.file) {
          this.loading = true;
          const storageRef = firebase.storage().ref();
          const docRef = storageRef.child(`documents/SmoothieCoverPhotos/${this.$store.state.smoothiePhotoName}`);
          docRef.put(this.file).on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
              this.loading = false;
            },
            async () => {
              const downloadURL = await docRef.getDownloadURL();
              const timestamp = await Date.now();
              const dataBase = await db.collection("smoothiePosts").doc();

              await dataBase.set({
                smoothieID: dataBase.id,
                smoothieHTML: this.smoothieHTML,
                smoothieCoverPhoto: downloadURL,
                smoothieCoverPhotoName: this.smoothieCoverPhotoName,
                smoothieTitle: this.smoothieTitle,
                profileId: this.profileId,
                date: timestamp,
              });
              await this.$store.dispatch("getPost");
              this.loading = false;
              this.$router.push({ name: "ViewSmoothie", params: { smoothieid: dataBase.id } });
            }
          );
          return;
        }
        this.error = true;
        this.errorMsg = "Please ensure you uploaded a cover photo!";
        setTimeout(() => {
          this.error = false;
        }, 5000);
        return;
      }
      this.error = true;
      this.errorMsg = "Please ensure Smoothie Title & Smoothie Post has been filled!";
      setTimeout(() => {
        this.error = false;
      }, 5000);
      return;
    },
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
    smoothieCoverPhotoName() {
      return this.$store.state.smoothiePhotoName;
    },
    smoothieTitle: {
      get() {
        return this.$store.state.smoothieTitle;
      },
      set(payload) {
        this.$store.commit("updateSmoothieTitle", payload);
      },
    },
    smoothieHTML: {
      get() {
        return this.$store.state.smoothieHTML;
      },
      set(payload) {
        this.$store.commit("newSmoothiePost", payload);
      },
    },
  },
};
</script>

<style lang="scss">
.create-post {
  position: relative;
  height: 100%;

  button {
    margin-top: 0;
  }

  .router-button {
    text-decoration: none;
    color: #fff;
  }

  label,
  button,
  .router-button {
    transition: 0.5s ease-in-out all;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 24px;
    color: #fff;
    background-color: pink;
    text-decoration: none;

    &:hover {
      background-color: rgba(48, 48, 48, 0.7);
    }
  }

  .container {
    position: relative;
    height: 100%;
    padding: 10px 25px 60px;
  }

  .invisible {
    opacity: 0 !important;
  }

  .err-message {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 10px;
    background-color: pink;
    opacity: 1;
    transition: 0.5s ease all;

    p {
      font-size: 14px;
    }

    span {
      font-weight: 600;
    }
  }

  .smoothie-info {
    display: flex;
    margin-bottom: 32px;

    input:nth-child(1) {
      min-width: 300px;
    }

    input {
      transition: 0.5s ease-in-out all;
      padding: 10px 4px;
      border: none;
      border-bottom: 1px solid pink;

      &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 pink;
      }
    }

    .upload-file {
      flex: 1;
      margin-left: 16px;
      position: relative;
      display: flex;

      input {
        display: none;
      }

      .preview {
        margin-left: 16px;
        text-transform: initial;
      }

      span {
        font-size: 12px;
        margin-left: 16px;
        align-self: center;
      }
    }
  }

  .editor {
    height: 60vh;
    display: flex;
    flex-direction: column;

    .quillWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .ql-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: scroll;
    }

    .ql-editor {
      padding: 20px 16px 30px;
    }
  }

  .smoothie-actions {
    margin-top: 32px;

    button {
      margin-right: 16px;
    }
  }
}
</style>
