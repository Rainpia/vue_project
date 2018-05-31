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
    font-size: 1.5rem;
    height: 60px;
    display: flex;
    flex-direction: row;
    .icon-back{
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      cursor: pointer;
    }
    .title{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
