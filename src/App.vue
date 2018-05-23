<template>
  <div id="app">
    <router-view></router-view>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link to="/coins/ethereum">Ethereum</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
