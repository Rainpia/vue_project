<template>
<div class="work-order-from-me">
    <Header v-bind:title="title" show-back ></Header>
    <Main>
        <Search :placeholder="searchPlaceholderText" @search="search" ></Search>
        <scroll-container>
            <work-order-item v-for="item in workOrderListFromMe" :key="item.id" :workOrderItem="item" @click.native="goToDetail(item)">
            </work-order-item>
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
export default {
  name: "WorkOrderFromMe",
  data() {
    return {
      title: "我提交的",
      searchPlaceholderText: "请输入主题／工单号等关键词回车检索",
      workOrderListFromMe: [],
      orderActions: [
        {
          name: "创建时间",
          method: this.updateWorkOrder('创建时间')
        },
        {
          name: "更新时间",
          method: this.updateWorkOrder('更新时间')
        }
      ],
      showActions: [
        {
          name: "处理中",
          method: this.updateWorkOrder('处理中')
        },
        {
          name: "全部",
          method: this.updateWorkOrder('全部')
        }
      ],
      orderSheetVisible: false,
      showSheetVisible: false
    };
  },
  created() {
    this.fetchWorkOrderListFromMe();
  },
  mounted() {},
  methods: {
    updateWorkOrder(type) {
      console.log(type);
    },
    search: function(text) {
        this.updateWorkOrder(text);
    },
    fetchWorkOrderListFromMe() {
      axios
        .get("./src/assets/data/workOrder.json")
        .then(resp => {
          if (resp.data.code === 1000) {
            this.workOrderListFromMe = resp.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    goToDetail: function(item) {
    //   this.$router.push({ name: "reading-info", params: { id: item.id } });
    }
  },
  components: {
    Header,
    Search,
    Main,
    ScrollContainer,
    WorkOrderItem,
    [Actionsheet.name]: Actionsheet,
    [Button.name]: Button
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
