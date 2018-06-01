<template>
<div class="main-container">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'Main'
}
</script>
<style scoped>
div.main-container{
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    color: #000000;
}
</style>
