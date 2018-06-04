<template>
<div class="work-order-info-container">
    <Header v-bind:title="title" show-back></Header>
    <Main>
        <scroll-container>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">详细信息</mt-tab-item>
                <mt-tab-item id="2">关联信息</mt-tab-item>
            </mt-navbar>
            <div class="line"></div>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="info-container">
                        <div class="first-line">
                            <div style="flex:1;display:flex;flex-direction: row;">
                                <div class="title">
                                    {{info.title}}
                                </div>
                                <div class="status">
                                        {{info.status}}
                                    </div>
                                </div>
                                <div class="warning">
                                    超时 HH：MM
                            </div>
                        </div>
                        <div class="second-line">
                            {{info.submitDate}} {{info.author}}
                        </div>
                    </div>
                    <Section title="工单属性">
                        <div class="property">
                            <div class="key">
                                申请人
                            </div>
                             <div class="value">
                                 客户A
                            </div>
                        </div>
                        <div class="property">
                            <div class="key">
                                处理人
                            </div>
                             <div class="value">
                                 客户A
                            </div>
                        </div>
                        <div class="property">
                            <div class="key">
                                抄送
                            </div>
                             <div class="value">
                                 客户A
                            </div>
                        </div>
                    </Section>
                    <div class="description">
                        <div>问题描述</div>
                        {{info.description}}
                    </div>
                    <Section title="沟通记录">

                    </Section>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                </mt-tab-container-item>
            </mt-tab-container>
            <div class="title">
            </div>
        </scroll-container>
    </Main>
</div>
</template>

<script>
import Header from "./../template/Header.vue";
import Search from "./../template/Search.vue";
import Main from "./../template/Main.vue";
import Section from "./../template/Section.vue";
import ScrollContainer from "./../template/ScrollContainer.vue";
import { Navbar, TabItem } from "mint-ui";
import { TabContainer, TabContainerItem } from "mint-ui";
import axios from "axios";
export default {
  name: "WorkOrderInfo",
  data() {
    return {
      title: "",
      selected: "1",
      info: {}
    };
  },
  created() {
    this.fetchInfo();
    console.log(this.$route.params);
  },
  methods: {
    search: function(text) {
      console.log(text);
    },
    fetchInfo() {
      axios
        .get("./src/assets/data/workOrderInfo.json")
        .then(resp => {
          if (resp.data.code === 1000) {
            this.info = resp.data.data;
            this.title = "#" + this.info.index + " " + this.info.title;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  components: {
    Header,
    Search,
    Main,
    Section,
    ScrollContainer,
    [Navbar.name]: Navbar,
    [TabItem.name]: TabItem,
    [TabContainer.name]: TabContainer,
    [TabContainerItem.name]: TabContainerItem
  }
};
</script>
<style lang="scss" scoped>
.work-order-info-container {
  .line {
    width: 100%;
    height: 10px;
    background: #d9d9d9;
  }
  .info-container {
    padding: 10px;
    
    border-bottom: 1px solid #d9d9d9;
    .first-line{
        display: flex;
        flex-direction: row;
        .title {
            font-size: 1.2rem;
            padding-right: 20px;
            }
            .status {
            border: 1px solid orange;
            padding: 3px;
            color: orange;
            font-size: 1rem;
            }
            .warning {
            font-size: 0.9rem;
            color: red;
            }
    }
    .second-line{
        color: #d9d9d9;
        font-size: 1.2rem;
    }
  }
  .property{
      display: flex;
      flex-direction: row;
      margin: 0 -10px;
      border-bottom: 1px solid #d9d9d9;
      .key{
          width:80px;
          text-align: left;
          padding: 10px 0 10px 10px;
      }
      .value{
          padding: 10px 0;
          flex: 1;
      }
  }
  .description{
      height: 100px;
      padding: 10px;
  }
}
</style>
