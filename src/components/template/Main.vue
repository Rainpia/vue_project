<template>
<div class="main">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
div.main{
    flex: 1;
    background: #ffffff;
    overflow: auto;
}
</style>
