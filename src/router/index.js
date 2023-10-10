import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n from "../i18n";
import store from "@/store/index";
import { IS_USER_AUTHENTICATE_GETTER } from "@/store/storeconstants";

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
        path: 'login',
        name: 'login',
        meta: { /*layout: 'main'*/ auth: false},
        component: () => import('../views/auth/LoginView')
      },
      {
        path: 'about',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'about',
        component: () => import('../views/about/AboutView.vue')
      },
      {
        path: 'trustees',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'trustees',
        component: () => import('../views/about/TrusteesView')
      },
      {
        path: 'applicant',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'applicant',
        component: () => import('../views/applicants/ApplicantsView')
      },
      {
        path: 'konkurs',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'konkurs',
        component: () => import('../views/applicants/ConcursView')
      },
      {
        path: 'virtual',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'virtual',
        component: () => import('../views/applicants/VirtualSchoolView.vue')
      },
      {
        path: 'vocation',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'vocation',
        component: () => import('../views/applicants/VocationSchoolView.vue')
      },
      {
        path: 'parent-univer',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'parent-univer',
        component: () => import('../views/parents/ParentUniversityView')
      },
      {
        path: 'parents',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'parents',
        component: () => import('../views/parents/ParentView')
      },
      {
        path: 'students',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'students',
        component: () => import('../views/students/StudentsView')
      },

      {
        path: 'teachers',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'teachers',
        component: () => import('../views/teachers/TeachersView')
      },
      {
        path: 'trainers',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'trainers',
        component: () => import('../views/teachers/TrainersView')
      },
      {
        path: 'live',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'live',
        component: () => import('../views/live/LiveView'),
        children:[
          {
            path: 'projects',
            meta: { /*layout: 'main'*/ auth: false},
            name: 'projects',
            component: () => import('../views/ComingSoonView'),
            children:[
              {
                path: 'creative',
                meta: { /*layout: 'main'*/ auth: false},
                name: 'creative',
                component: () => import('../views/live/projects/CreativeIdeas')
              },
            ]
          },
        ]
      },
      {
        path: 'creative',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'creative',
        component: () => import('../views/live/projects/CreativeIdeas')
      },
      {
        path: 'document',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'document',
        component: () => import('../views/about/DocumentsView.vue')
      },
      {
        path: 'team/:type',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'team',
        component: () => import('../views/about/TeamView.vue'),
        props: true
      },
      {
        path: 'coming',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'coming',
        component: () => import('../views/ComingSoonView.vue')
      },
      {
        path: 'results',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'results',
        component: () => import('../views/results/results')
      },
      {
        path: 'forparents',
        meta: { /*layout: 'main'*/ auth: false},
        name: 'forparents',
        component: () => import('../views/dormitories/ParentWorkView')
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

router.beforeEach((to, from, next) => {
  if (
      "auth" in to.meta &&
      to.meta.auth &&
      !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next("/login");
  } else if (
      "auth" in to.meta &&
      !to.meta.auth &&
      store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next("");
  } else {
    next();
  }
});

export default router
