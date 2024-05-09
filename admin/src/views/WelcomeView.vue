<script>
import { BButton, BCard, BRow, BCol, BContainer, BCardImg } from 'bootstrap-vue-next';
export default {
  name: 'WelcomeView',
  components: {
      BContainer,
      BRow,
      BCol,
      BCard,
      BCardImg,
      BButton,
},
 methods: {
    navigateAppContent() {
      this.$router.push({ name: 'app content' });
    },
    navigateHistory() {
      this.$router.push({ name: 'History' });
    }
  }

};
</script>

<template>
    <div class="welcome-view" >
      <b-container>
        <b-row class="mb-12">
          <b-col>
            <div class="text-center mt-3">
              <img src="/public/Logo.png" alt="logo" class="logo">
            </div>
          </b-col>
        </b-row>
      <b-container>
      <b-row class="mb-12">
          <div>
            <h2>Welcome!</h2>
            <p>Would you like to:</p>
          </div>
      </b-row>
    </b-container>
    <b-row class="d-flex align-items-stretch">
      <b-col cols="6" class="mb-3">
        <b-button  @click="navigateAppContent">
        <b-card class="h-100 text-center">
          <b-card-img variant="top" src="/public/recycle.png" style="height: 200px;"/>
          <b-card-body>
            Update/View Content
          </b-card-body>
        </b-card>
      </b-button>
      </b-col>
      <b-col cols="6" class="mb-3">
        <b-button  @click="navigateHistory">
        <b-card class="h-100 text-center" >
          <b-card-img variant="top" src="/public/history.png" style="height: 200px;"/>
          <b-card-body>
            Update History
          </b-card-body>
        </b-card>
      </b-button>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col class="d-flex justify-content-end">
        <b-button >Leave →</b-button>
      </b-col>
    </b-row>
      </b-container>
    </div>
  </template>


  <style scoped>
.welcome-view {
  max-width: 600px;
  margin: 3vh auto;
  padding: 2vh;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.logo {
  width: 40%;
  height: auto;
  margin: 2vh auto;
}

b-container, b-row, b-col {
  padding: 2vh 0;
}

h2 {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
}

p {
  text-align: center;
  color: #555;
  font-size: 1.2rem;
}

.b-card {
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.b-card-img {
  padding: 15px;
  background-color: #ececec;
}

.b-card-body {
  font-size: 1.5rem;
  color: #333;
}

.b-button {
  width: 100%;
  background-color: #4376AB;
  color: white;
  border-radius: 5px;
}

.b-button:hover {
  background-color: #345883;
}

.d-flex {
  align-items: center;
  justify-content: space-between;
}

.justify-content-end {
  justify-content: flex-end;
}

</style>
