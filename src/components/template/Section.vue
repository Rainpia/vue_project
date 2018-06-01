<template>
<div class="section-container">
    <div class="section-title">
        {{title}}
    </div>
    <div class="section-content">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
  name: 'Section',
  props:{
      title:String
  }
}
</script>
<style lang="scss" scoped>
.section-container{
        .section-title{
            padding: 10px;
            background: #d9d9d9;
        }
        .section-content{
            padding: 15px 10px;
        }
    }
</style>
