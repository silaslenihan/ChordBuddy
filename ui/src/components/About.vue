<template>
  <div class="about">
   <h3>About ChordBuddy:</h3>
   <p>Thanks for checking out my page! My name is Silas Lenihan, and I'm a student at Duke Universtiy studying Computer Science. I made this project for my final project of Comp Sci 290. In my spare time,
       I like to make music and often times I like to start by laying out a chord progression. Since I'm fairly
       new to playing the piano, it's not always easy for me to remember what chords are in a given key. I figured this
       is a problem I can solve by making an app. With ChordBuddy, you can easily arrange chords and actually
       be able to play that chord Progression. Over time, I will add more chords, as right now the only ones available 
       are the major and minor triads.
   </p>
   <h3>Technical Info:</h3>
   <p>This app was built using Vue JS, and utilizes Heroku to host the backend, Google Firebase realtime
       database, as well as Google Firebase storage for storing my images and audio files. The audio files were generated 
       by me using <a href="https://www.ableton.com/en/shop/live/">Ableton Live</a> and the images are from
       <a href="https://www.piano-keyboard-guide.com/keyboard-chords.html">Piano Keyboard Guide</a>. Additionally, 
       the app uses <a href= "https://github.com/tonaljs/tonal">Tonal JS</a> to query chord information.

   </p>

  </div>
</template>

<script>
export default {
  name: 'About',   
    data() {
      return {
        myStyle:{
            backgroundColor:"lightblue",
        },
      };
    },
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
  color: blue;
  text-decoration: underline;
}

.about {
  background-color: lightblue;
}

.list-group{
    margin-bottom: 10px;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
}
</style>
