<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  >div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
