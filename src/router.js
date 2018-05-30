import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Coins from './components/Coins.vue'
import ReadingList from './components/reading/ReadingList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    },
    {
      path: '/reading-list',
      name: 'reading-list',
      component: ReadingList
    }
  ]
})