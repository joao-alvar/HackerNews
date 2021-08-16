<template>
    <div class="navbar__wrap">
     <div class="pure-menu pure-menu-horizontal">
    <div class="container">
        <router-link :to="{ path: '/' }" class="pure-menu-heading"><h2>HackerNews</h2></router-link>
      <router-link :to="{ path: '/' }" class="pure-menu-heading pure-menu-link">Home</router-link>
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link :to="{ path: '/new' }" class="pure-menu-link">New</router-link>
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
    background-color: #ff6600;
  }
  .pure-menu a {
    color: #000;
  }
</style>
