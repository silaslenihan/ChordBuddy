<template>
<div class="admin">
    <h3>Logs</h3>
    <br>
    <div class="logBox">
    <div v-for="(l,i) in logs" :key="i" >
        {{l}}
        <hr>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Admin', 
    props: {
        logs: {
            type: [Object,Array],
            default: () => []
        },
    },
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

.logBox {
    height:750px;
    width:75%;
    border:2px solid black;
    font:16px/26px Georgia, Garamond, Serif;
    overflow:auto;
    margin: auto;
    background-color: white;
}

.admin {
  background-color: lightblue;
}

.list-group{
    margin-bottom: 10px;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
}
</style>
