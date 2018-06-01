import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import ReadingList from './components/reading/ReadingList.vue'
import ReadingInfo from './components/reading/ReadingInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reading-list',
      name: 'reading-list',
      component: ReadingList
    },
    {
      path: '/reading-info',
      name: 'reading-info',
      component: ReadingInfo
    }
  ]
})