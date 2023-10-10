import { createStore } from 'vuex'
import menu from '@/store/modules/menuModule'
import document from '@/store/modules/documentModule'
import news from "@/store/modules/newsModule";
import teams from "@/store/modules/teamsModule";
import trainer from "@/store/modules/trainerModule"
import live from "@/store/modules/liveModule";
import applicant from "@/store/modules/applicantModule";
import parent from "@/store/modules/parentModule";
import form from "@/store/modules/formModule";
import auth from "@/store/modules/auth";

export default createStore({
  modules: {
    menu,
    document,
    news,
    teams,
    trainer,
    live,
    applicant,
    parent,
    form,
    auth
  }
})
