<template>
  <div class="main" :style="myStyle">
    <!-- display message -->
    <h1>{{ msg }}</h1>
    <!-- conditional navbar -->
    <div class="navbar">
      <!-- always show home, contact, and about -->
      <input type="button" id="home" name="home" value="Home" @click="changePage('home')">  
      <input type="button" id="contact" name="contact" value="Contact" @click="changePage('contact')">  
      <input type="button" id="about" name="about" value="About" @click="changePage('about')">  
      <!-- if the user is logged in show their account page -->
      <div v-if="user.email">
        <input type="button" id="account" name="account" value="Account" @click="changePage('account')"> 
      </div> 
      <!-- if the user is an admin show the admin panel -->
      <div v-if="user.role == 'admin'">
        <input type="button" id="admin" name="admin" value="Admin Panel" @click="changePage('admin')"> 
      </div> 
      <!-- if the user is logged in show logout -->
      <div v-if="user.email">
      <a :href="apiUrlBase + 'api/auth/logout'">Logout</a>
      </div>
      <!-- if not show the login button -->
      <div v-else>
      <a :href="apiUrlBase + 'api/auth/login'">Login</a>
      </div>
  </div>
  
  <!-- display if page is home -->
  <div v-if="page=='home'">
    <br>
    <!-- Key Selection -->
    <label for="key">Choose key: </label>
        <select id="sort" v-model= "ck"  @change="changeKey()">
                <option>C</option>
                <option>Cm</option>
                <option>D</option>
                <option>Dm</option>
                <option>E</option>
                <option>Em</option>
                <option>F</option>
                <option>Fm</option>
                <option>G</option>
                <option>Gm</option>
                <option>A</option>
                <option>Am</option>
                <option>B</option>
                <option>Bm</option>
        </select>
    <!-- reference other components -->
    <Chords :chords="chords"
    :user="user"
    @saveProgression="saveProgression"/>
  </div>
  <!-- conditional statements to show other pages -->
  <div v-if="page=='account'">
    <SavedProgressions :progressions="progressions"
    :user="user"
    @removeProgression="removeProgression"/>
  </div>
  <div v-if="page =='about'">
    <About/>
  </div>
  <div v-if="page =='admin'">
    <Admin
    :logs="logs"/>
  </div>
  <div v-if="page =='contact'">
    <Contact/>
  </div>
  </div>
</template>

<script>
// import child components
import Chords from './Chords.vue'
import SavedProgressions from './SavedProgressions.vue'
import About from './About.vue'
import Contact from './Contact.vue'
import Admin from './Admin.vue'

export default {
  name: 'MainPage',
  components: {
    Chords,
    SavedProgressions,
    About,
    Contact,
    Admin
  },
  props: {
    msg: String,
    links: {
      type: Array,
      default: () => []
    },
    logs: {
      type: [Object,Array],
      default: () => []
    },
    user: {
        type: Object,
        default: () => {}
    },
    chords: {
      type: Array,
      default: () => []
    },
    progressions: {
      type: [Object,Array],
      default: () => []
    },
    chordKey: String,
    apiUrlBase: String
  },
  data() {
    return {
      ck: this.chordKey,
      myStyle:{
            backgroundColor:"lightblue" ,
            backgroundAttachment: "fixed"
          },
      page: "home"
    }
  },
  methods: {
    // change the key 
    changeKey() {
      this.$emit('changeKey', this.ck);
      
    },
    // get the chord at a given index
    getChord(index) {
      return this.chords[index];
    },
    // remove a progression
    removeProgression(index) {
      this.$emit('removeProgression',index);
    },
    // save a progression
    saveProgression(prog) {
        this.$emit('saveProgression',prog);
    },
    // changes the page
    changePage(page) {
      if (page == "admin") {
        this.$emit('getLogs');
      }
      this.page = page;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}

body {
  background-color:lime;
  min-height: 100%;
  margin:auto;
  text-align:center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  background-color: teal;
  color: white;
  border: none;
  font-size:25px;
}

footer {
  background-color:lightblue;
}

.main {
  background-color: green;
  min-height: 100%;
  background-attachment: fixed;
}


.navbar {
  background-color: teal;
  overflow: hidden;
}

.navbar a {
  color: white;
  text-align: center;
  padding: 14px 16px;
  font-size: 25px;
}

.navbar a:hover {
  background-color: pink;
  color: black;
}

.navbar a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
