<template>
<div class="reading-list">
    <Header v-bind:title="title" show-back ></Header>
    <Main>
        <Search :placeholder="searchPlaceholderText" @search="search" ></Search>
        <scroll-container>
            <reading-item v-for="item in readingList" :key="item.id" :readingItem="item" @click.native="goToDetail(item)"></reading-item>
        </scroll-container>
        <mt-button type="default" @click="sheetVisible = true">排序</mt-button>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </Main>
</div>
</template>

<script>
import Header from './../template/Header.vue';
import Search from './../template/Search.vue';
import Main from './../template/Main.vue';
import ScrollContainer from './../template/ScrollContainer.vue';
import ReadingItem from './ReadingItem.vue';
import axios from 'axios'
import { Actionsheet } from 'mint-ui';
import { Button } from 'mint-ui';
export default {
  name: 'ReadingList',
  data(){
      return {
          title:'知识库',
          searchPlaceholderText:'请输入关键词检索知识条目',
          readingList:[],
          actions:[{
            name: '创建时间',
            method: this.updateReading('创建时间')
            }, {
            name: '更新时间',
            method:  this.updateReading('更新时间')
          }],
          sheetVisible: false,
      }
  },
  created() {
      this.fetchReadingList()
  },
  mounted() {
  },
  methods : {
      updateReading(type) {
        console.log(type);
        },
      search:function(text){
          this.updateReading(text);
      },
      fetchReadingList() {
        axios.get('./src/assets/data/reading.json')
        .then((resp) => {
            if(resp.data.code === 1000){
                this.readingList = resp.data.data;
            }
        })
        .catch((err) => {
          console.log(err)
        })
      },
      goToDetail:function(item){
          this.$router.push({name: 'reading-info',params:{id:item.id}});
      }
  },
  components:{
      Header,
      Search,
      Main,
      ReadingItem,
      ScrollContainer,
      [Actionsheet.name]:Actionsheet,
      [Button.name]:Button
  }
}
</script>
<style lang="scss" scoped>
.reading-list{
}
</style>
