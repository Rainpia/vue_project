<template>
<div class="reading-info-container">
    <Header v-bind:title="title" show-back></Header>
    <Main>
        <scroll-container>
            <mt-field label="主题" placeholder="" v-model="form.theme"></mt-field>
            <mt-field label="问题描述" placeholder="" type="textarea" rows="4" v-model="form.description"></mt-field>
            <input type="file">
            <mt-field label="申请人" placeholder="" v-model="form.apply"></mt-field>
            <mt-field label="处理人" placeholder="" v-model="form.handle"></mt-field>
            <mt-field label="抄送" placeholder="" v-model="form.cc"></mt-field>
            <mt-field label="自定义字段" placeholder="" v-model="form.customerKey"></mt-field>
        </scroll-container>
        <mt-button type="primary">提交</mt-button>
    </Main>
</div>
</template>

<script>
import Header from './../template/Header.vue';
import Main from './../template/Main.vue';
import ScrollContainer from './../template/ScrollContainer.vue';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';
export default {
  name: 'WorkOrderForm',
  data(){
      return {
          title:'提交工单',
          form:{
              theme:'',
              description:'',
              apply:'',
              handle:'',
              cc:'',
              customerKey:''
          }
      }
  },
  created(){
  },
  methods : {
  },
  
  components:{
      Header,
      Main,
      ScrollContainer,
      [Field.name]:Field,
      [Button.name]:Button
  }
}
</script>
<style lang="scss" scoped>
.reading-info-container{
}
</style>
