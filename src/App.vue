<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {
   Navbar
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
}
</style>
