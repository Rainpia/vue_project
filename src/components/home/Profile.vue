<template>
<div>
    <div class="img"></div>
    <div class="name">Yin Run Ping</div>
    <div class="address">四川 . 成都</div>
</div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
<style lang="scss" scoped>
div{
    .img{
        width: 35vw;
        height: 35vw;
        max-width: 140px;
        max-height: 140px;
        border-radius: 50%;
        background: #26a2ff;
        margin: 30px auto;
    }
    .name,.address{
        text-align: center;
        margin: 20px 0;
        font-size: 1.3rem;
    }
}
</style>
