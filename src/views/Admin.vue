<template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Addd Admin</h2>
        <div class="input">
          <input placeholder="Enter user email to make them an admin" type="text" id="addAdmins" v-model="adminEmail" />
        </div>
        <span>{{ this.functionMsg }}</span>
        <button @click="addAdmin" class="button">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "Admin",
  data() {
    return {
      adminEmail: "",
      functionMsg: null,
    };
  },
  methods: {
    async addAdmin() {
      const addAdmin = await axios.post(
        "http://localhost:3000/admroute/addadmin",{
          email:this.adminEmail
        }
      )
      const result=addAdmin;      
      this.functionMsg = result.data.message;
      this.adminEmail="";
      setTimeout(() => {
          this.functionMsg = "";
        }, 7000);
    },
  },
};
</script>

<style lang="scss" scoped>
.admin {
  .container {
    max-width: 100px;
    padding: 300px 40px;

    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-weight: 500;
      font-size: 32px;
    }

    .admin-info {
      border-radius: 90px;
      box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 50px;
      background-color: red;
      display: flex;
      flex-direction: column;
      max-width: 700px;
      margin: 32px auto;

      span {
        font-size: 55px;
      }

      .input {
        margin: 18px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 9px;
        }
        input {
          width: 150%;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 60px;
          @media (min-width: 900px) {
          }

          &:focus {
            outline: none;
          }
        }
      }

      button {
        align-self: center;
      }
    }
  }
}
</style>
