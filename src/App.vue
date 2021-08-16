<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <FonteNoticia v-on:sourceChanged="sourceChanged"></FonteNoticia>
   <NoticiaLista v-bind:source="source"></NoticiaLista> 
  </div>
</template>

<script>
import FonteNoticia from './components/FonteNoticia'
import NoticiaLista from './components/NoticiaLista'
export default {
  name: 'App',
  components: {
    FonteNoticia,
    NoticiaLista
  },
  data () {
    return {
      source: ""
    }
  },
  methods: {
    sourceChanged: function(source) {
      this.source = source;
    }
  }
}
</script>

<style>
#app {
 padding-top: 20px;
}
</style>
