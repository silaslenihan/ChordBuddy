<template>
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
</template>

<script>
import MainPage from './components/MainPage.vue'
import { getJSON } from './apiHelper';

export default {
  name: 'App',
  components: {
    MainPage
  },
  data () {
    return {
      apiUrlBase: process.env.VUE_APP_SERVER_API_BASE,
      //apiUrlBase:"https://young-falls-82514.herokuapp.com/",
      chords: [],
      componentKey: 0,
      chordKey: "C",
      user: {},
      progressions: [],
      role: "user",
      logs: ["Yo","Yeah"]
    };
  },
  methods: {
    changeKey(key) {
      this.chordKey = key;
      this.getChords();
    },
    async getChords() {
      let url = this.apiUrlBase + 'api/get_chords.json?key=' + this.chordKey;
      const response = await fetch(url);
      this.chords = await response.json();
    },
    async refreshMe(type) {
      this.user = await getJSON(this.apiUrlBase, `api/user?type=${type}`);
      this.progressions = this.user.progressions;
      this.role = this.user.role;
    },
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
    async getLogs() {
      let logResponse = await fetch(this.apiUrlBase + 'api/getLogs');
      this.logs = await logResponse.json(); 
    },
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
  
  async mounted () {
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
  min-height: 100%;
}
</style>
