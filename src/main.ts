import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import header from './components/home/head/index.vue'
import router from './router'
//全局生效
import './assets/css/reset.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.component('Head',header)
app.mount('#app')

