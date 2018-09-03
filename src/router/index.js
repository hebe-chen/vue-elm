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

export default new Router({
  routes: [
    { path:'/', redirect:'/dashboard' },
    { path: '/dashboard', component: Dashboard },
    { path: '/goods', component: Goods },
    { path: '/order', component: Order },
    { path: '/workspace', component: Workspace },
    { path: '/member', component: Member },
    { path: '/marketing', component: Marketing },
    { path: '/message', component: Message },
    { path: '/weixin', component: Weixin },
    { path: '/setting', component: Setting }
  ]
})
