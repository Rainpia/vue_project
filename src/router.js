import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import ReadingList from './components/reading/ReadingList.vue'
import ReadingInfo from './components/reading/ReadingInfo.vue'
import ServiceItem from './components/work-order/service-item.vue'
import WorkOrderForm from './components/work-order/work-order-form.vue'
import WorkOrderFromMe from './components/work-order/work-order-from-me.vue'
import WorkOrderInfo from './components/work-order/work-order-info.vue'
import WorkOrderList from './components/work-order/work-order-list.vue'
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
      path: '/work-order-form',
      name: 'work-order-form',
      component: WorkOrderForm
    },
    {
      path: '/work-order-from-me',
      name: 'work-order-from-me',
      component: WorkOrderFromMe
    },
    {
      path: '/work-order-info',
      name: 'work-order-info',
      component: WorkOrderInfo
    },
    {
      path: '/work-order-list',
      name: 'work-order-list',
      component: WorkOrderList
    }
  ]
})