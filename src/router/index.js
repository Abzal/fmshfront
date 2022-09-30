import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n from "../i18n";

const routes = [
  {
    path: '/:locale',
    name: 'language',
    meta: {description: { ru:'',
        en:'',
        qaz:''} },
    component: () => import('@/views/layout/MainLayout.vue'),
    beforeEnter: (to, from, next) => {
      const locale1 = to.params.locale
      const supported_locales = ['kz','ru','en'] //process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
      if(!supported_locales.includes(locale1)) return next('kz')
      if(i18n.global.locale !== locale1){
        i18n.global.locale = locale1
      }
      return next()
    },
    children:[
      {
        path: '',
        name: 'home',
        meta: { /*layout: 'main'*/ },
        component: HomeView
      },
      {
        path: 'about',
        meta: { /*layout: 'main'*/ },
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'document',
        meta: { /*layout: 'main'*/ },
        name: 'document',
        component: () => import('../views/DocumentsView.vue')
      },
      {
        path: 'team/:type',
        meta: { /*layout: 'main'*/ },
        name: 'team',
        component: () => import('../views/TeamView.vue'),
        props: true
      },
      {
        path: 'coming',
        meta: { /*layout: 'main'*/ },
        name: 'coming',
        component: () => import('../views/ComingSoonView.vue')
      },
    ],
  },
  {
    path: '/',
    name: 'all',
    redirect(){
      return '/kz/'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
