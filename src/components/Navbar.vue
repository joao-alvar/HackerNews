<template>
    <div class="navbar__wrap">
     <div class="pure-menu pure-menu-horizontal">
        <router-link :to="{ path: '/' }" class="pure-menu-heading"><h2>HackerNews</h2></router-link>
        <div id="burger" :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
          <slot>
            <button type="button" class="burger-button" title="Menu">
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
            </button>
        </slot>
         </div>
      <ul class="pure-menu-list" :class="{ 'active' : isBurgerActive }">
           <li class="pure-menu-item" @click="toggle">
          <router-link :to="{ path: '/' }" class="pure-menu-link">Home</router-link>
        </li>
        <li class="pure-menu-item" @click="toggle">
          <router-link :to="{ path: '/new' }" class="pure-menu-link">New</router-link>
        </li>
        <li class="pure-menu-item" @click="toggle">
          <router-link :to="{ path: '/show' }" href="#" class="pure-menu-link">Show</router-link>
        </li>
        <li class="pure-menu-item" @click="toggle">
          <router-link :to="{ path: '/jobs' }" href="#" class="pure-menu-link">Jobs</router-link>
        </li>
      </ul>
  </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data: () => ({
        isBurgerActive: false,
    }),
    methods: {
            toggle() {
                this.isBurgerActive = !this.isBurgerActive
            }
            }
};
</script>

<style scoped>
  .pure-menu {
    background-color: #ff6600;
  }
  .pure-menu a {
    color: #000;
  }

  #burger {
      display: none;
      cursor: pointer;
  }
  
  button {
        cursor: pointer;
    }

    button:focus {
        outline: 0;
    }

    .burger-button {
        position: relative;
        height: 30px;
        width: 32px;
        display: block;
        z-index: 999;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        transition: transform .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar {
        background-color: #130f40;
        position: absolute;
        top: 50%;
        right: 6px;
        left: 6px;
        height: 2px;
        width: auto;
        margin-top: -1px;
        transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar--1 {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }

    .burger-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(.8);
    }

    .burger-button:hover .burger-bar--2 {
        transform: scaleX(1);
    }

    .no-touchevents .burger-bar--2:hover {
        transform: scaleX(1);
    }

    .burger-bar--3 {
        transform: translateY(6px);
    }

    #burger.active .burger-button {
        transform: rotate(-180deg);
    }

    #burger.active .burger-bar {
        background-color: #fff;
    }

    #burger.active .burger-bar--1 {
        transform: rotate(45deg)
    }

    #burger.active .burger-bar--2 {
        opacity: 0;
    }

    #burger.active .burger-bar--3 {
        transform: rotate(-45deg)
    }

  @media (max-width: 560px) {
      .pure-menu-heading {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .pure-menu {
    position: relative;
}
        #burger {
      display: block;
      position: absolute;
      top: 1.5rem;
      right: 1rem;
  }
  
.pure-menu-list {
    transform: translateX(-200rem);
}

.pure-menu-list.active {
    transform: translateX(0);
      display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
}
  }
</style>
