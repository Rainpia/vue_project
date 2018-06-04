<template>
<div class="work-order-from-me">
    <Header v-bind:title="title" show-back ></Header>
    <Main>
        <scroll-container>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">待受理</mt-tab-item>
                <mt-tab-item id="2">未完成</mt-tab-item>
                <mt-tab-item id="3">抄送我的</mt-tab-item>
                <mt-tab-item id="4">全部</mt-tab-item>
            </mt-navbar>
            <div style="height:4px;"></div>
            <Search :placeholder="searchPlaceholderText" @search="search" ></Search>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <work-order-item v-for="item in workOrderListWait" :key="item.id" :workOrderItem="item" @click.native="goToDetail(item)"></work-order-item>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <work-order-item v-for="item in workOrderListNonFinished" :key="item.id" :workOrderItem="item" @click.native="goToDetail(item)"></work-order-item>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <work-order-item v-for="item in workOrderListCCme" :key="item.id" :workOrderItem="item" @click.native="goToDetail(item)"></work-order-item>
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <work-order-item v-for="item in workOrderList" :key="item.id" :workOrderItem="item" @click.native="goToDetail(item)"></work-order-item>
                </mt-tab-container-item>
            </mt-tab-container>
        </scroll-container>
        <div class="button">
            <div>
                <mt-button type="default" @click="showSheetVisible = true">全部</mt-button>
                <mt-actionsheet :actions="showActions" v-model="showSheetVisible"></mt-actionsheet>
            </div>
            <div>
                <mt-button type="default" @click="orderSheetVisible = true">排序</mt-button>
                <mt-actionsheet :actions="orderActions" v-model="orderSheetVisible"></mt-actionsheet>
            </div>
        </div>
    </Main>
</div>
</template>

<script>
import Header from "./../template/Header.vue";
import Search from "./../template/Search.vue";
import Main from "./../template/Main.vue";
import ScrollContainer from "./../template/ScrollContainer.vue";
import WorkOrderItem from "./work-order-item.vue";
import axios from "axios";
import { Actionsheet } from "mint-ui";
import { Button } from "mint-ui";
import { Navbar, TabItem } from "mint-ui";
import { TabContainer, TabContainerItem } from "mint-ui";
export default {
  name: "WorkOrderList",
  data() {
    return {
      title: "工单列表",
      searchPlaceholderText: "请输入主题／工单号等关键词回车检索",
      selected:'1',
      workOrderList: [],
      orderActions: [
        {
          name: "创建时间排序",
          method: this.updateWorkOrder('创建时间')
        },
        {
          name: "更新时间排序",
          method: this.updateWorkOrder('更新时间')
        }
      ],
      showActions: [
          {
          name: "全部",
          method: this.updateWorkOrder('全部')
        },
        {
          name: "新建",
          method: this.updateWorkOrder('新建')
        },
        {
          name: "已分派",
          method: this.updateWorkOrder('已分派')
        },
        {
          name: "处理中",
          method: this.updateWorkOrder('处理中')
        },{
          name: "已解决",
          method: this.updateWorkOrder('已解决')
        },
        {
          name: "已关闭",
          method: this.updateWorkOrder('已关闭')
        }
      ],
      orderSheetVisible: false,
      showSheetVisible: false
    };
  },
  created() {
    this.fetchWorkOrderList();
    console.log(this.$route.params);
    if(this.$route.params.tabId){
        this.selected = this.$route.params.tabId;
    }
  },
  computed:{
      workOrderListWait:function(){
          return this.workOrderList;
      },
      workOrderListNonFinished:function(){
          return this.workOrderList;
      },
      workOrderListCCme:function(){
          return this.workOrderList;
      }
  },
  methods: {
    updateWorkOrder(type) {
      console.log(type);
    },
    search: function(text) {
        this.updateWorkOrder(text);
    },
    fetchWorkOrderList() {
      axios
        .get("./src/assets/data/workOrder.json")
        .then(resp => {
          if (resp.data.code === 1000) {
            this.workOrderList = resp.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    goToDetail: function(item) {
      this.$router.push({ name: "work-order-info", params: { id: item.id } });
    }
  },
  components: {
    Header,
    Search,
    Main,
    ScrollContainer,
    WorkOrderItem,
    [Actionsheet.name]: Actionsheet,
    [Button.name]: Button,
    [Navbar.name]: Navbar,
    [TabItem.name]: TabItem,
    [TabContainer.name]: TabContainer,
    [TabContainerItem.name]: TabContainerItem
  }
};
</script>
<style lang="scss" scoped>
.work-order-from-me {
  .button {
    display: flex;
    flex-direction: row;
    > div {
      flex: 1;
      >button{
          width: 100%;
      }
    }
  }
}
</style>
