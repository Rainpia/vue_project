<template>
<div>
    <Header title="工作台"></Header>
    <Main>
        <Profile></Profile>
        <Nav></Nav>
    </Main>
    <Footer></Footer>
</div>
</template>

<script>
import Header from './template/Header.vue';
import Footer from './template/Footer.vue';
import Main from './template/Main.vue';
import Profile from './home/Profile.vue';
import Nav from './home/Nav.vue';
export default {
  name: 'Home',
  components:{
      Header,
      Footer,
      Main,
      Profile,
      Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
