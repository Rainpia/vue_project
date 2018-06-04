<template>
<div>
    <div class="nav-container">
        <div class="item" v-for="item in linkList" :key="item.id" @click="go(item)" >
            <router-link to="">
                <div class="icon"></div>
                <div class="text">
                    {{ item.name }}
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Nav',
  data(){
      return {
          linkList:[
              {id:0,name:'新建工单',link:'service-item'},
              {id:1,name:'我发起的',link:'work-order-from-me'},
              {id:2,name:'代受理的'},
              {id:3,name:'未完成的'},
              {id:4,name:'抄送我的'},
              {id:5,name:'全部'}]
      }
  },
  methods: {
    go: function(item) {
      this.$router.push({name: item.link});
    }
  },
}
</script>
<style lang="scss" scoped>
.nav-container{
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    align-items: center;
    .item{
        margin: 0 auto;
        cursor: pointer;
        .icon{
            width:15vw;
            height:15vw;
            max-width: 100px;
            max-height: 100px;
            background: transparent;
            border-radius: 10%;
            box-shadow: 0 2px 16px #000, 0 0 1px #000, 0 0 1px #000;  
        }
        .text{
            margin: 10px 0 20px 0;
            text-align: center;
            font-size: 1.2rem;
        }
    }
}
</style>
