<template>
<div class="footer-contaner">
    <div v-for="item in menuList" :key="item.id" v-on:click="go(item)" v-bind:class="{ active: item.active }">
        <font-awesome-icon :icon="item.icon" />
            <div>
                {{item.name}}
            </div>
    </div>
</div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faBookOpen from '@fortawesome/fontawesome-free-solid/faBookOpen'
import faStickyNote from '@fortawesome/fontawesome-free-solid/faStickyNote'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
export default {
  name: 'Footer',
  data(){
      return {
          menuList:[
              {id:0,name:'主页',icon:faHome,link:'home',active:true},
              {id:1,name:'知识',icon:faBookOpen,link:'reading-list'},
              {id:2,name:'工单',icon:faStickyNote},
              {id:3,name:'个人',icon:faUser},
          ]
      }
  },
  methods:{
      go:function(item){
          this.menuList.forEach(i=>{
              item.active = i.id === item.id;
          })
        // this.$router.push({name: item.link});
      }
  },
  computed: {
    getFaHome () {
      return faHome
    },
    getFaBookOpen(){
      return faBookOpen
    },
    getFaStickyNote(){
      return faStickyNote
    },
    getFaUser(){
      return faUser
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
<style lang="scss" >
div.footer-contaner{
    height: 70px;
    border-top: 1px solid black;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    font-size: 1.3rem;
    cursor: pointer;
    >div{
        flex: 1; 
        align-self: center;
        text-align: center;
        &.active{
            div,svg{
                color: green;
                outline: none;
            }
        }
    }
}
</style>
