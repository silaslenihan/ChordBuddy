<template>
  <div class="progressions">
    Email: {{user.email}} <br>
    Name: {{user.displayName}} <br>
    User ID: {{user.userID}}<br>

    <h3>Saved Chord Progressions:</h3>
    <b-list-group vertical>
        <b-list-group-item :style="myStyle"
             v-for="(p, i) in progressions" :key="i">
             <b-list-group horizontal>
                 <b-list-group-item :style="myStyle"
                 v-for="(c, k) in p" :key="k">
                    <img :src="`https://storage.googleapis.com/chords-72fdf.appspot.com/images/${c}.png`" width = "400" height = "150">
                    <br>
                     <br>
                 </b-list-group-item>
             </b-list-group>
        <input type="button" id="playProgression" name="playProgression" value="Play" @click="playProgression(p)"> 
        <input type="button" id="removeProgression" name="removeProgression" value="Delete" @click="removeProgression(i)"> 

        </b-list-group-item>
     </b-list-group>
     <div v-if="progressions.length == 0 ">
         <b> No Progressions saved </b>
     </div>
  

  </div>
</template>

<script>
export default {
  name: 'SavedProgressions',
  props: {
    progressions: {
      type: [Object,Array], 
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
      playProgression(chordList) {
        let chord = '';
        let sounds = [];
        for(let k = 0; k < chordList.length; k++) {
          chord = chordList[k];
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
          if (i == sounds.length) return;
          sounds[i].play();
          setTimeout(playSounds, 1000);
        }
      
        },
        removeProgression(index) {
            this.$emit('removeProgression',index);
        },
      
        timeout(ms) { //pass a time in milliseconds to this function
            console.log("timeout");
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
