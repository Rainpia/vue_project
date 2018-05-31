<template>
<div class="reading-list">
    <Header v-bind:title="title" show-back></Header>
    <Main >
        list
    </Main>
</div>
</template>

<script>
import Header from './../template/Header.vue';
import Main from './../template/Main.vue';
export default {
  name: 'ReadingList',
  data(){
      return {
          title:'知识库',
          linkList:[]
      }
  },
  components:{
      Header,
      Main
  }
}
</script>
<style lang="scss" scoped>
.reading-list{
}
</style>
