<template>
<div class="header-container">
  <mt-header :title="title">
        <div v-if="showBack" v-on:click="$router.go(-1)" slot="left">
            <mt-button icon="back"></mt-button>
        </div>
    </mt-header>
</div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import faAngleLeft from "@fortawesome/fontawesome-free-solid/faAngleLeft";
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';
export default {
  name: 'Header',
  props:{
    title: String,
    showBack: Boolean
  },
  data(){
    return {
      faAngleLeft : faAngleLeft
    }
  },
  components: {
    FontAwesomeIcon,
    [Header.name]:Header,
    [Button.name]:Button
  }
}
</script>
<style lang="scss" scoped>
div.header-container{
}
</style>
