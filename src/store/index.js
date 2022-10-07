import { createStore } from 'vuex'
import menu from '@/store/modules/menuModule'
import document from '@/store/modules/documentModule'
import news from "@/store/modules/newsModule";
import teams from "@/store/modules/teamsModule";
import trainer from "@/store/modules/trainerModule"
import live from "@/store/modules/liveModule";
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
    news,
    teams,
    trainer,
    live
  }
})
