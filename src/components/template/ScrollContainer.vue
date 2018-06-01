<template>
<div class="scroll-container">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'ScrollContainer'
}
</script>
<style scoped>
div.scroll-container{
    flex: 1;
    overflow: auto;
}
</style>
