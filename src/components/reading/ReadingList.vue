<template>
<div class="reading-list">
    <Header v-bind:title="title" show-back></Header>
    <Main>
        <Search :placeholder="searchPlaceholderText"></Search>
    </Main>
</div>
</template>

<script>
import Header from './../template/Header.vue';
import Search from './../template/Search.vue';
import Main from './../template/Main.vue';
export default {
  name: 'ReadingList',
  data(){
      return {
          title:'知识库',
          searchPlaceholderText:'请输入关键词检索知识条目',
          linkList:[]
      }
  },
  components:{
      Header,
      Search,
      Main
  }
}
</script>
<style lang="scss" scoped>
.reading-list{
}
</style>
