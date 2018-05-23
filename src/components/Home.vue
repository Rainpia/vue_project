<template>
<div>
    <Header></Header>
    <Footer></Footer>
</div>
</template>

<script>
import Header from './template/Header.vue';
import Footer from './template/Footer.vue';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components:{
      Header,
      Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
