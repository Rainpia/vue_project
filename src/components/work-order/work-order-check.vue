<template>
<div class="work-order-check-container">
    <Header v-bind:title="title" show-back></Header>
    <Main>
        <div class="form-container">
            <div class="title">
                {{info.title}} #{{info.index}}
            </div>
            <div class="info">
                <div class="author">
                    处理人：{{info.handle}}
                </div>
                <div class="update-date">
                    完成时间：{{info.finishDate}}
                </div>
            </div>
            <mt-radio
                v-model="value"
                :options="options">
                </mt-radio>
            <mt-button type="primary">提交</mt-button>
        </div>
    </Main>
</div>
</template>

<script>
import Header from './../template/Header.vue';
import Main from './../template/Main.vue';
import Section from './../template/Section.vue';
import ScrollContainer from './../template/ScrollContainer.vue';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';
import { Radio } from 'mint-ui';
export default {
  name: 'WorkOrderCheck',
  data(){
      return {
          title:'审核工单',
          info:{
              title:'工单主题',
              index:'401',
              handle:'XXX',
              finishDate:'2018-05-03',
          },
          value:'1',
          options:[
                {
                    label: '审核通过',
                    value: '1',
                },
                {
                    label: '重新处理',
                    value: '2'
                }         
            ]
      }
  },
  created(){
  },
  methods : {
  },
  
  components:{
      Header,
      Main,
      Section,
      ScrollContainer,
      [Field.name]:Field,
      [Button.name]:Button,
      [Radio.name]:Radio
  }
}
</script>
<style lang="scss" scoped>
.work-order-check-container{
    .main-container{
        background: #d9d9d9;
    }
    .form-container{
        padding: 20px;
        background: #ffffff;
        margin: 5px;
        border-radius: 3px;
        .title{
            font-size: 1.3rem;
            margin-bottom: 5px;
        }
        .info{
            .author,.update-date{
                font-size: 1.2rem;
            }
            display: flex;
            flex-direction: row;
            margin-top: 5px;
            >div{
                padding-right: 5px;
            }
        }
        button{
            width: 100%;
        }
    }
}
</style>
