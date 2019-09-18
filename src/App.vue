<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <a class="navbar-brand" href="#">Liujx</a>
      <ul class="nav navbar-nav">
        <li :class="[menu_flag ? activeClass : '']">
          <a href="#" @click.prevent="showMenu">Menu</a>
        </li>
      </ul>
    </nav>

    <transition name="menu">
      <Menu v-show="menu_flag" class="col-xs-2 col-sm-2 col-md-2 col-lg-2 menu"/>
    </transition>
    <transition name="con">
      <router-view :class="[menu_flag ? bootClass2: bootClass]"/>
    </transition>

  </div>
</template>

<script>

import Menu from './components/Menu'


export default {
  name: 'App',
  components : {
    Menu
  },
  data() {
    return {
      menu_flag: false,
      activeClass: 'active ',
      bootClass: 'col-xs-12 col-sm-12 col-md-12 col-lg-12',
      bootClass2: 'col-xs-8 col-sm-8 col-md-8 col-lg-8'
    }
  },

  methods: {
     showMenu: function () {
       console.log(this.menu_flag)
       this.$data.menu_flag = !this.$data .menu_flag
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.menu-enter-active {
  transition: all 0.5s ease;
}

.menu-leave-active {
  transition: all 0.5s ease;
}

.menu-enter, .menu-leave-to {
  transform: translateX(-500px);
}

.con-enter-active {
  transition: all 0.5s ease;
}

.con-leave-active {
  transition: all 0.5s ease;
}

.con-enter, .con-leave-to {

}

</style>
