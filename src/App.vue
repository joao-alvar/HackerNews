<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
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

</style>
