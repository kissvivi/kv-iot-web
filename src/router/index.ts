import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
export default createRouter({
  // 指定路由模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    { path: '/', component: Login },
    { path: '/footer', component: ()=>import('../components/footer.vue') },
    { path: '/header', component: ()=>import('../components/header.vue') },
    { path: '/right', component: ()=>import('../components/lefter.vue') },
    { path: '/left', component: ()=>import('../components/righter.vue') },
    { path: '/layout', component: ()=>import('../components/layout.vue') },
  ]
})