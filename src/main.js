import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from '@/assets/css/style.css'

createApp(App).use(style).use(store).use(router).mount('#app')
