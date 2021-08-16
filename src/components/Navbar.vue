<template>
    <div class="noticia__lista">
     <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <router-link :to="{ path: '/' }" class="pure-menu-heading pure-menu-link">Home</router-link>
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link :to="{ path: '/new' }" class="pure-menu-link">News</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link :to="{ path: '/show' }" href="#" class="pure-menu-link">Show</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link :to="{ path: '/jobs' }" href="#" class="pure-menu-link">Jobs</router-link>
        </li>
      </ul>
    </div>
  </div>
    </div>
</template>

<script>
export default {
    name: "Navbar"
};
</script>

<style scoped>
  .pure-menu {
    background-color: #e17842;
  }
  .pure-menu a {
    color: #fff;
  }
</style>
