import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '../components/layout.vue'
import Header from '../components/header.vue'
export default createRouter({
  // 指定路由模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    { path: '/', component: Login },
    { path: '/footer', component: ()=>import('../components/footer.vue') },
    { path: '/header', component: ()=>import('../components/header.vue') },
    { path: '/left', component: ()=>import('../components/lefter.vue') },
    { path: '/layout', component: ()=>import('../components/layout.vue') },

    {
      path: '/',
      component: Layout,
      redirect: '/layout',
      name: 'layout',
      children: [{
        path: 'layout',
        component: ()=>import('../components/layout.vue')
      }]
    },

    {
      path: '/right',
      component: Layout,
      redirect: '/right',
      name: 'right',
      meta: { title: 'right', icon: 'right' },
      children: [
        {
          path: 'hello',
          name: 'hello',
          component: () => import('../components/righter.vue'),
          meta: { title: 'hello', icon: 'hello' }
        }
      ]
    },

    // {
    //   path: '/device',
    //   component: Layout,
    //   redirect: '/device/list',
    //   name: 'device',
    //   meta: { title: 'device', icon: 'device' },
    //   children: [
    //     {
    //       path: 'list',
    //       name: 'list',
    //       component: () => import('../views/device/list.vue'),
    //       meta: { title: 'device', icon: 'device' }
    //     },
    //   ]
    // },
    // {
    //   path: '/product',
    //   component: Layout,
    //   redirect: '/product/list',
    //   name: 'product',
    //   meta: { title: 'product', icon: 'product' },
    //   children: [
    //     {
    //       path: 'list',
    //       name: 'list',
    //       component: () => import('../views/product/list.vue'),
    //       meta: { title: 'product', icon: 'product' }
    //     }
    //   ]
    // },

    {
      path: '/layout',
      component: Layout,
      redirect: '/data/list',
      name: 'layout',
      meta: { title: 'layout', icon: 'layout' },
      children: [
        {
          path: 'data/list',
          name: '数据管理',
          component: () => import('../views/data/list.vue'),
          meta: { title: 'data', icon: 'data' }
        },{
          path: 'product/list',
          name: '产品管理',
          component: () => import('../views/product/list.vue'),
          meta: { title: 'product', icon: 'product' }
        },
        {
          path: 'device/list',
          name: '设备管理',
          component: () => import('../views/device/list.vue'),
          meta: { title: 'product', icon: 'product' }
        }
      ]
    },
  ]
})