<template>
<div class="search-container">
    <div class="icon-search">
        <font-awesome-icon :icon="faSearch" />
    </div>
    <div class="input-container">
        <input type="text" v-model="inputValue" :placeholder="placeholder">
        <div class="icon-clear" v-show="showClearIcon" @click="clearInputValue">
            <font-awesome-icon :icon="faTimesCircle" /> 
        </div>
    </div>
</div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import faSearch from "@fortawesome/fontawesome-free-solid/faSearch";
import faTimesCircle from "@fortawesome/fontawesome-free-solid/faTimesCircle";
export default {
  name: 'Search',
  props:{
    placeholder: String
  },
  data(){
    return {
      inputValue:"",
      faSearch : faSearch,
      faTimesCircle : faTimesCircle
    }
  },
  computed : {
      showClearIcon(){
          if(this.inputValue){
              return true;
          }else{
              return false;
          }
      }
  },
  methods : {
      clearInputValue:function(){
          this.inputValue = "";
      }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
<style lang="scss" scoped>
div.search-container{
    background: #ffffff;
    color: #000000;
    font-size: 1.5rem;
    height: 60px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #000000;
    .icon-search{
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      cursor: pointer;
    }
    .input-container{
        flex: 1;
        display: flex;
        position: relative;
        input{
            font-size: 1.5rem;
            flex: 1;
            border: 0;
        }
        input:focus{
            outline: none;
        }
        .icon-clear{
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 21px;
        }
    }
}
</style>
