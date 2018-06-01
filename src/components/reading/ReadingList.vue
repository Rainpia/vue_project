<template>
<div class="reading-list">
    <Header v-bind:title="title" show-back ></Header>
    <Main>
        <Search :placeholder="searchPlaceholderText" @search="search" ></Search>
        <scroll-container>
            <reading-item v-for="item in readingList" :key="item.id" :readingItem="item" @click.native="goToDetail(item)"></reading-item>
        </scroll-container>
          <button @click="sheetVisible = true">open an action sheet</button>
        <action-sheet :actions="actions" v-model="sheetVisible"></action-sheet>
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
export default {
  name: 'ReadingList',
  data(){
      return {
          title:'知识库',
          searchPlaceholderText:'请输入关键词检索知识条目',
          readingList:[],
          actions:[{
            name: '拍照',
            method: this.takePhoto
            }, {
            name: '打开相册',
            method: this.openAlbum
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
      takePhoto() {
      console.log('taking photo');
    },

    openAlbum() {
      console.log('opening album');
    },
      search:function(text){
          console.log(text);
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
     'action-sheet': Actionsheet
  }
}
</script>
<style lang="scss" scoped>
.reading-list{
}
</style>
