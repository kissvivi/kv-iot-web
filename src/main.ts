import { createApp } from 'vue'
import App from './App.vue'
// 导入router和store
import router from './router/index'
import store from './store/index'

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)

app.use(ElementPlus)
app.mount('#app')




