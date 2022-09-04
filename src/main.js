import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from '@/assets/css/style.css'
import bscss from "bootstrap/dist/css/bootstrap.min.css"
import bs from "bootstrap"



createApp(App).use(bscss).use(bs).use(style).use(store).use(router).mount('#app')
