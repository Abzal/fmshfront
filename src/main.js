import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from '@/assets/css/style.css'
import bscss from "bootstrap/dist/css/bootstrap.min.css"
import bs from "bootstrap"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faTwitter, faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import i18n from './i18n'

library.add(fas)
library.add(faFacebook)
library.add(faFacebookF)
library.add(faInstagram)
library.add(faLinkedin)
library.add(faTwitter)


createApp(App).use(i18n)
    .component('fawesome', FontAwesomeIcon)
    .use(bscss).use(bs).use(style).use(store).use(router).mount('#app')
