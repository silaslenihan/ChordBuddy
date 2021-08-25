<template>
  <div class="progressions">
    <!-- display user info on account page -->
    Email: {{user.email}} <br>
    Name: {{user.displayName}} <br>
    User ID: {{user.userID}}<br>

    <!-- display each saved chord progression -->
    <h3>Saved Chord Progressions:</h3>
    <b-list-group vertical>
      <!-- display each chord progression -->
        <b-list-group-item :style="myStyle"
             v-for="(p, i) in progressions" :key="i">
             <b-list-group horizontal>
               <!-- display each individual chord in each chord progression -->
                 <b-list-group-item :style="myStyle"
                 v-for="(c, k) in p" :key="k">
                    <img :src="`https://storage.googleapis.com/chords-72fdf.appspot.com/images/${c}.png`" width = "400" height = "150">
                    <br>
                     <br>
                 </b-list-group-item>
             </b-list-group>
        <!--  allow user interaction -->
        <input type="button" id="playProgression" name="playProgression" value="Play" @click="playProgression(p)"> 
        <input type="button" id="removeProgression" name="removeProgression" value="Delete" @click="removeProgression(i)"> 

        </b-list-group-item>
     </b-list-group>
     <!-- condition if the user has no saved progressions -->
     <div v-if="progressions.length == 0 ">
         <b> No Progressions saved </b>
     </div>
  

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SavedProgressions',
  // props for the component
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
        // specify style
        myStyle:{
            backgroundColor:"lightblue",
        },
      };
    },
    methods: {
      // add a chord to the progression
      chordCheck(chord) {
        this.chordList.push(chord);
      },
      // play a single chord
      playChord(chord) {
        const a = new Audio(`https://storage.googleapis.com/chords-72fdf.appspot.com/sounds/${chord}.wav`);
        a.play();
      },
      // play a chord progression
      playProgression(chordList) {
        let chord = '';
        let sounds = [];
        // create sound objects for each audio file stored in firebase
        for(let k = 0; k < chordList.length; k++) {
          chord = chordList[k];
          const a = new Audio(`https://storage.googleapis.com/chords-72fdf.appspot.com/sounds/${chord}.wav`);
          sounds.push(a);
        }
        let i = -1;
        playSounds();
        // recursive function to play each sound in the progression
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
        // call  main remove progression function and pass index
        removeProgression(index) {
            this.$emit('removeProgression',index);
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

/* allow scrolling for the list group */
.list-group{
    margin-bottom: 10px;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
}
</style>
