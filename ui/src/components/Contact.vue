<template>
  <div class="contact">
  <a href="https://github.com/silaslenihan/">GitHub</a><br>
  Email: sjl@lenihan.net

  </div>
</template>

<script>
export default {
  name: 'Contact',   
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
