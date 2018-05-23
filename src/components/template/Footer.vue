<template>
<div class="footer-contaner">
    <div class="active">
        <font-awesome-icon :icon="getFaHome" />
        <div>
            主页
        </div>
    </div>
    <div>
        <font-awesome-icon :icon="getFaBookOpen" />
        <div>
            知识
        </div>
    </div>
    <div>
        <font-awesome-icon :icon="getFaStickyNote" />
        <div>
            工单
        </div>
    </div>
    <div>
        <font-awesome-icon :icon="getFaUser" />
        <div>
            个人
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
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    border-top: 1px solid black;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    font-size: 1.3rem;
    >div{
        flex: 1; 
        align-self: center;
        text-align: center;
        &.active{
            color: green;
        }
    }
}
</style>
