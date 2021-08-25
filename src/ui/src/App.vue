<template>
  <body>
  <div id="app">
    <MainPage msg="Welcome to Chord Buddy!"
    :chords="chords"
    :chordKey="chordKey"
    :key = "componentKey"
    :apiUrlBase="apiUrlBase"
    :progressions="progressions"
    :user="user"
    :logs="logs"
    @changeKey="changeKey"
    @removeProgression="removeProgression"
    @saveProgression="saveProgression"
    @getLogs="getLogs"/>
  </div>
  </body>
</template>

<script>
import MainPage from './components/MainPage.vue';
import { getJSON } from './apiHelper';

export default {
  name: 'App',
  components: {
    MainPage,
  },
  data() {
    return {
      apiUrlBase: process.env.VUE_APP_SERVER_API_BASE,
      // apiUrlBase:"https://young-falls-82514.herokuapp.com/",
      chords: [],
      componentKey: 0,
      chordKey: 'Cm',
      user: {},
      progressions: [],
      role: 'user',
      logs: [],
    };
  },
  methods: {
    // change the key on the webpage
    changeKey(key) {
      this.chordKey = key;
      this.getChords();
    },
    // query backend and Tonal API to get the chord ata for a given key
    async getChords() {
      const url = this.apiUrlBase + 'api/get_chords.json?key=' + this.chordKey;
      const response = await fetch(url);
      this.chords = await response.json();
    },
    // refresh the webpage, retrieve user data
    async refreshMe(type) {
      this.user = await getJSON(this.apiUrlBase, `api/user?type=${type}`);
      this.progressions = this.user.progressions;
      this.role = this.user.role;
    },
    // save a chord progression to a user's account
    async saveProgression(prog) {
      let userID = this.user.userID;
      let email = this.user.email;
      let params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({prog, userID, email}),
      }
      let url = this.apiUrlBase + 'api/progression';
      await fetch(url, params);
      
      await this.refreshMe('refesh');
    },
    // retrieve logs from google firebase
    async getLogs() {
      let logResponse = await fetch(this.apiUrlBase + 'api/getLogs');
      this.logs = await logResponse.json(); 
    },
    // remove a chord progression based on a given index
    async removeProgression(index) {
      let userID = this.user.userID;
      let email = this.user.email;
      let params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          index, userID, email
        }),
      }
      const url = this.apiUrlBase + 'api/remove'
      await fetch(url, params);
      await this.refreshMe('refresh');
    }
  },
  
  // run when app is mounted
  async mounted() {
    this.getChords();
    this.refreshMe('login');
    
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightblue;
  background-attachment: fixed;
  min-height: 100%;
}

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background-color: lightblue;
}
</style>
