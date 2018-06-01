<template>
<div class="reading-item-container">
    <div class="title">
        {{readingItem.title}}
    </div>
    <div class="content">
        报错日志：{{readingItem.errorLog}}
    </div>
    <div class="info">
        <div class="author">
            提交人：{{readingItem.author}}
        </div>
        <div class="update-date">
            提交时间：{{readingItem.updateDate}}
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ReadingItem',
  props:{
    readingItem: {
        id:Number,
        title:String,
        errorLog:String,
        author:String,
        updateDate:String
    }
  },
  data(){
    return {
    }
  },
  computed : {
  },
  methods : {
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
div.reading-item-container{
    padding: 10px;
    border-bottom: 1px solid #d9d9d9;
    .title{
        font-size: 1.4rem;
        color: #26a2ff;
        margin-bottom: 5px;
    }
    .info{
        .author,.update-date{
            font-size: 1.4rem;
        }
        display: flex;
        flex-direction: row;
        margin-top: 5px;
        >div{
            padding-right: 5px;
        }
    }
}
</style>
