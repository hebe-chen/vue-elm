import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from 'components/dashboard/dashboard'
import Goods from 'components/goods/goods'
import Order from 'components/order/order'
import Workspace from 'components/workspace/workspace'
import Member from 'components/member/member'
import Marketing from 'components/marketing/marketing'
import Message from 'components/message/message'
import Weixin from 'components/weixin/weixin'
import Setting from 'components/setting/setting'

Vue.use(Router)

var routes = [
  {
    name: '概况',
    path: '/dashboard',
    component: Dashboard
  },
  {
    name: '商品',
    path: '/goods',
    component: Goods
  },
  {
    name:'订单',
    path: '/order',
    component: Order
  },
  {
    name: '装修',
    path: '/workspace',
    component: Workspace
  },
  {
    name: '客户',
    path: '/member',
    component: Member
  },
  {
    name: '营销',
    path: '/marketing',
    component: Marketing
  },
  {
    name:'资讯',
    path: '/message',
    component: Message
  },
  {
    name: '微信',
    path: '/weixin',
    component: Weixin
  },
  {
    name: '设置',
    path: '/setting',
    component: Setting
  },
  {
    name: '设置',
    path:'/',
    redirect:'/dashboard'
  }
]
var router = new Router({
  routes: routes
})


export { routes , router }

