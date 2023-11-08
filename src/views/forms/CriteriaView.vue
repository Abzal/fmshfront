<template>
  <div class="wrapper">
    <v-card>
      <v-tabs
              v-model="tab"
              color="deep-purple-accent-4"
              align-tabs="center"
      >
        <v-tab :value="1">Наблюдение урока</v-tab>
        <v-tab :value="2">Feedback</v-tab>
        <!--<v-tab :value="3">statistics</v-tab>-->
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
                :key="1"
                :value="1"
        >
          <create-criteria :form="strForm" @save="saveCriteria"></create-criteria>
        </v-window-item>

        <v-window-item
                :key="2"
                :value="2"
        >
          <criteria-graph :all-user-answers="allUserAnswers"></criteria-graph>
        </v-window-item>

       <!-- <v-window-item
                :key="3"
                :value="3"
        >
          <criteria-statistic :form="strForm" :all-users-answers="allUsersAnswers"></criteria-statistic>
        </v-window-item>-->


      </v-window>
    </v-card>
  </div>

</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import {
    FETCH_ALL_ANSWERS_ACTION, FETCH_TEACHERS_ACTION, FETCH_USER_ANSWERS_ACTION, GET_USER_DATA_GETTER, SAVE_FORM_ACTION, SAVE_FORM_ANSWER_ACTION
  } from "@/store/storeconstants";

  import criteria from "@/template/criteria.json"
  import CreateCriteria from "@/views/forms/tabs/CreateCriteria";
  import CriteriaGraph from "@/views/forms/tabs/CriteriaGraph";
  import CriteriaStatistic from "@/views/forms/tabs/CriteriaStatistic";

  export default {
    components: {
      CriteriaStatistic,
      CriteriaGraph,
      CreateCriteria
    },
    data() {
      return {
        tab: null,
        allUserAnswers: null,
        allUsersAnswers: null,
        strForm : criteria.strForm
      };
    },

    computed: {
      ...mapGetters('auth', {
        author: GET_USER_DATA_GETTER
      }),
    },

    created() {
      this.fetchTeachers({email:this.author.email}).then(res => {
      }).catch(err => {
        console.log(err);
      });
      this.fetchUserAnswers({email:this.author.email}).then(res => {
        this.allUserAnswers = res;
      });
      this.fetchAllAnswers().then(res => {
        this.allUsersAnswers = res;
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      ...mapActions('form', {
        fetchTeachers: FETCH_TEACHERS_ACTION,
        saveForm: SAVE_FORM_ACTION,
        saveAnswers: SAVE_FORM_ANSWER_ACTION,
        fetchUserAnswers: FETCH_USER_ANSWERS_ACTION,
        fetchAllAnswers: FETCH_ALL_ANSWERS_ACTION
      }),

      saveCriteria(payload){
        this.saveAnswers(payload).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }


    },

  }
</script>
<style scoped>

</style>