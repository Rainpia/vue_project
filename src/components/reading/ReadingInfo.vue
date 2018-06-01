<template>
<div class="reading-info-container">
    <Header v-bind:title="title" show-back></Header>
    <Main>
        <scroll-container>
            <div class="title">
                {{info.title}}
            </div>
            <div>
                <Section title="知识详情">
                    <div>
                            症状描述
                            <div>
                                {{info.description}}
                            </div> 
                        </div>
                        <div>
                            产生原因
                            <div>
                                {{info.generateReason}} 
                            </div>
                        </div>
                        <div>
                            内容
                            <div>
                                {{info.content}} 
                            </div>
                        </div>
                        <div>
                            附件
                            <div>
                                {{info.attach}} 
                            </div>
                        </div>
                </Section>
                <Section title="案例总结">
                    <div>
                            阅读数：{{info.readingCount}}  点赞数：{{info.goodCount}}
                        </div>
                        <div>
                            知识分类：{{info.category}}
                        </div>
                        <div>
                            创建人：{{info.author}}  创建时间：{{info.createdDate}}
                        </div>
                </Section>
                <Section title="热门知识">
                        <div class="link">
                            变电站存储
                        </div>
                        <div class="link">
                            数据同步失败
                        </div>
                        <div class="link">
                            ATM机设备异常
                        </div>
                </Section>
            </div>
        </scroll-container>
    </Main>
</div>
</template>

<script>
import Header from './../template/Header.vue';
import Search from './../template/Search.vue';
import Main from './../template/Main.vue';
import Section from './../template/Section.vue';
import ScrollContainer from './../template/ScrollContainer.vue';
import ReadingItem from './ReadingItem.vue';
import axios from 'axios'
export default {
  name: 'ReadingInfo',
  data(){
      return {
          title:'知识库',
          info:{

          }
      }
  },
  created(){
      this.fetchReadingInfo();
      console.log(this.$route.params);
  },
  methods : {
      search:function(text){
          console.log(text);
      },
      fetchReadingInfo() {
        axios.get('./src/assets/data/readingInfo.json')
        .then((resp) => {
            if(resp.data.code === 1000){
                this.info = resp.data.data;
            }
        })
        .catch((err) => {
          console.log(err)
        })
      }
  },
  
  components:{
      Header,
      Search,
      Main,
      Section,
      ReadingItem,
      ScrollContainer
  }
}
</script>
<style lang="scss" scoped>
.reading-info-container{
    .title{
        font-size: 1.4rem;
        padding: 15px 10px;
    }
    .link{
        color: #26a2ff;
    }

}
</style>
