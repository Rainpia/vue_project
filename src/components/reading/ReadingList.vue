<template>
<div class="reading-list">
    <Header v-bind:title="title" show-back></Header>
    <Main>
        <Search :placeholder="searchPlaceholderText" @search="search"></Search>
        <scroll-container>
            <reading-item v-for="item in readingList" :key="item.id" :readingItem="item"></reading-item>
        </scroll-container>
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
export default {
  name: 'ReadingList',
  data(){
      return {
          title:'知识库',
          searchPlaceholderText:'请输入关键词检索知识条目',
          readingList:[],
      }
  },
  created() {
      this.fetchReadingList()
  },
  methods : {
      search:function(text){
          console.log(text);
      },
      fetchReadingList() {
        axios.get('./src/components/data/reading.json')
        .then((resp) => {
            if(resp.data.code === 1000){
                this.readingList = resp.data.data;
            }
        })
        .catch((err) => {
          console.log(err)
        })
      }
  },
  components:{
      Header,
      Search,
      Main,
      ReadingItem,
      ScrollContainer
  }
}
</script>
<style lang="scss" scoped>
.reading-list{
}
</style>
