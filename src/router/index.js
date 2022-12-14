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
        component: () => import('../views/about/AboutView.vue')
      },
      {
        path: 'applicant',
        meta: { /*layout: 'main'*/ },
        name: 'applicant',
        component: () => import('../views/applicants/ApplicantsView')
      },
      {
        path: 'virtual',
        meta: { /*layout: 'main'*/ },
        name: 'virtual',
        component: () => import('../views/applicants/VirtualSchoolView.vue')
      },
      {
        path: 'vocation',
        meta: { /*layout: 'main'*/ },
        name: 'vocation',
        component: () => import('../views/applicants/VocationSchoolView.vue')
      },
      {
        path: 'parent-univer',
        meta: { /*layout: 'main'*/ },
        name: 'parent-univer',
        component: () => import('../views/parents/ParentUniversityView')
      },
      {
        path: 'parents',
        meta: { /*layout: 'main'*/ },
        name: 'parents',
        component: () => import('../views/parents/ParentView')
      },
      {
        path: 'students',
        meta: { /*layout: 'main'*/ },
        name: 'students',
        component: () => import('../views/students/StudentsView')
      },

      {
        path: 'teachers',
        meta: { /*layout: 'main'*/ },
        name: 'teachers',
        component: () => import('../views/teachers/TeachersView')
      },
      {
        path: 'trainers',
        meta: { /*layout: 'main'*/ },
        name: 'trainers',
        component: () => import('../views/teachers/TrainersView')
      },
      {
        path: 'live',
        meta: { /*layout: 'main'*/ },
        name: 'live',
        component: () => import('../views/live/LiveView'),
        children:[
          {
            path: 'projects',
            meta: { /*layout: 'main'*/ },
            name: 'projects',
            component: () => import('../views/ComingSoonView'),
            children:[
              {
                path: 'creative',
                meta: { /*layout: 'main'*/ },
                name: 'creative',
                component: () => import('../views/live/projects/CreativeIdeas')
              },
            ]
          },
        ]
      },
      {
        path: 'creative',
        meta: { /*layout: 'main'*/ },
        name: 'creative',
        component: () => import('../views/live/projects/CreativeIdeas')
      },
      {
        path: 'document',
        meta: { /*layout: 'main'*/ },
        name: 'document',
        component: () => import('../views/about/DocumentsView.vue')
      },
      {
        path: 'team/:type',
        meta: { /*layout: 'main'*/ },
        name: 'team',
        component: () => import('../views/about/TeamView.vue'),
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
