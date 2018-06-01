import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import ReadingList from './components/reading/ReadingList.vue'
import ReadingInfo from './components/reading/ReadingInfo.vue'
import ServiceItem from './components/work-order/service-item.vue'
import WorkOrderForm from './components/work-order/work-order-form.vue'
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
    },
    {
      path: '/service-item',
      name: 'service-item',
      component: ServiceItem
    },
    {
      path: '/work-order-from',
      name: 'work-order-from',
      component: WorkOrderForm
    }
  ]
})