<template>
  <div class="Status">
   
    <h2> Status: {{status}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWord',
  props: {
    msg: String
  },
   data(){
  return{
    status: "Sem dados no momento"
  }
},
methods: {
    //criamos o fatch para a nossa "api"..
    fetchStatus(){
      fetch("http://localhost:3000/status")
      .then( resposta => resposta.json())
      .then(resposta => {
        this.status = resposta;
      })
    }
},
created() {
    this.fetchStatus();
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
  color: #42b983;
}
</style>
