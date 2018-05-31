<template>
<div class="main-container">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
div.main-container{
    flex: 1;
    background: #ffffff;
    overflow: auto;
}
</style>
