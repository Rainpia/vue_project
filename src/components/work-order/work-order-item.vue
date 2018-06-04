<template>
<div class="reading-item-container">
    <div class="content">
        <div class="title">
           #{{workOrderItem.index}} {{workOrderItem.title}}
        </div>
        <div class="info">
             {{workOrderItem.author}} - {{workOrderItem.submitDate}}
        </div>
    </div>
    <div class="status">
        {{workOrderItem.status}}
    </div>
</div>
</template>

<script>
export default {
  name: 'WorkOrderItem',
  props:{
    workOrderItem: {
        id:Number,
        index:String,
        title:String,
        staus:String,
        author:String,
        submitDate:String
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
    padding: 15px 10px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    flex-direction: row;
    .content{
        flex: 1;
        .title{
            font-size: 1.4rem;
            color: #26a2ff;
            margin-bottom: 5px;
        }
        .info{
            font-size: 1.4rem;
        }
    }
    .status{
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
