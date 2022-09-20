import { createStore } from 'vuex'
import menu from '@/store/modules/menuModule'
import document from '@/store/modules/documentModule'
import news from "@/store/modules/newsModule";
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu,
    document,
    news
  }
})
