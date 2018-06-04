<template>
<div class="reading-info-container">
    <Header v-bind:title="title" show-back></Header>
    <Main>
        <mt-cell v-for="item in categorys" :key="item.id" :title="item.text" :to="item.link"  is-link></mt-cell>
    </Main>
</div>
</template>

<script>
import Header from './../template/Header.vue';
import Main from './../template/Main.vue';
import { Cell } from 'mint-ui';
export default {
  name: 'ServiceItem',
  data(){
      return {
          title:'请选择服务条目',
          categorys:[
              {text:'更换配置申请',id:0,link:'work-order-form'},
              {text:'软件的安装与升级',id:1},
              {text:'维护与保修',id:2}
          ]
      }
  },
  created(){
  },
  methods : {
  },
  
  components:{
      Header,
      Main,
      [Cell.name]:Cell
  }
}
</script>
<style lang="scss" scoped>
.reading-info-container{
}
</style>
