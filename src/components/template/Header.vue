<template>
<div>
    {{title}}
</div>
</template>

<script>
export default {
  name: 'Header',
  props:['title']
}
</script>
<style scoped>
div{
    text-align: center;
    background: black;
    color: #ffffff;
    font-size: 1.5rem;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
