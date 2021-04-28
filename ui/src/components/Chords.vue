<template>
  <div class="chords">
    <b-list-group horizontal>
    <b-list-group-item :style="myStyle"
      v-for="(c, i) in chords"
      :key="i">
        <img :src="`https://storage.googleapis.com/chords-72fdf.appspot.com/images/${c}.png`" width = "400" height = "150">
        <br>
        <br>
        <input type="button" id="chordCheck" name="chordAdd" value="Add chord" @click="chordCheck(c)"> 
        <input type="button" id="playChord" name="playChord" value="Play" @click="playChord(c)"> 

    </b-list-group-item>
  </b-list-group>
  <h3>Chord Progression:</h3>
  <b-list-group horizontal>
  <b-list-group-item :style="myStyle"
      v-for="(c, i) in chordList"
      :key="i">
        <img :src="`https://storage.googleapis.com/chords-72fdf.appspot.com/images/${c}.png`" width = "400" height = "150">
        <br>
        <br>

    </b-list-group-item>
  </b-list-group>
  <div v-if="chordList.length > 0">
      <input type="button" id="playProgression" name="playProgression" value="Play" @click="playProgression()"> 
      <input type="button" id="resetProgression" name="resetProgression" value="Reset" @click="resetProgression()"> 
      <div v-if="user.email">  
        <input type="button" id="saveProgression" name="saveProgression" value="Save" @click="saveProgression()"> 
      </div>
      <div v-else>
        Log in to be able to save your progressions!
      </div>  
  </div>
  <div v-else>
    <b>Chord Progression is currently empty, add a chord!</b>
  </div>

  </div>
</template>

<script>
export default {
  name: 'Chords',
  props: {
    chords: {
      type: Array,
      default: () => ["Cmaj"]
    },
    chordList: {
      type: Array,
      default: () => []
    },
    user: {
        type: Object,
        default: () => {}
    }
  },    
    data() {
      return {
        myStyle:{
            backgroundColor:"lightblue",
        },
      };
    },
    methods: {
      chordCheck(chord) {
        this.chordList.push(chord);
      },
      playChord(chord) {
        const a = new Audio(`https://storage.googleapis.com/chords-72fdf.appspot.com/sounds/${chord}.wav`);
        a.play();
      },
      async playProgression() {
        let chord = '';
        let sounds = [];
        for(let k = 0; k < this.chordList.length; k++) {
          chord = this.chordList[k];
          const a = new Audio(`https://storage.googleapis.com/chords-72fdf.appspot.com/sounds/${chord}.wav`);
          sounds.push(a);
        }
        let i = -1;
        playSounds();
        function playSounds() {
          if (i > -1) {
            sounds[i].pause();
          }
          i++;
          if (i == sounds.length) {
            return;
          }
          sounds[i].play();
          setTimeout(playSounds, 1000);
        }
      
      },

      saveProgression() {
        this.$emit('saveProgression',this.chordList);
      },
      resetProgression (){
        this.chordList = [];
      },
      
      timeout(ms) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    }
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

.chords {
  background-color: lightblue;
}

.list-group{
    margin-bottom: 10px;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
}
</style>
