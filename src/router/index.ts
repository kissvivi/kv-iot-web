import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
export default createRouter({
  // 指定路由模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    { path: '/login', component: Login },
    { path: '/footer', component: ()=>import('../components/footer.vue') },
  ]
})