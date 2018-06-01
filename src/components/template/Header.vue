<template>
<div class="header-container">
    <div v-if="showBack" class="icon-back" v-on:click="$router.go(-1)">
      <font-awesome-icon :icon="faAngleLeft" />
    </div>
    <div class="title">
      {{title}}
    </div>
</div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import faAngleLeft from "@fortawesome/fontawesome-free-solid/faAngleLeft";
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
    FontAwesomeIcon
  }
}
</script>
<style lang="scss" scoped>
div.header-container{
    background: black;
    color: #ffffff;
    height: 60px;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
    .icon-back{
      position: absolute;
      left: 20px;
      width: 30px;
      font-size: 2rem;
      cursor: pointer;
    }
    .title{
      font-size: 1.5rem;
    }
}
</style>
