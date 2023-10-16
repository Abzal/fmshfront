<template>
  <div class="wrapper">

    <v-container>
      <v-autocomplete
              v-model="selectedItem"
              label="Teachers"
              :items="teachersFio"
              item-value="desc"
              item-text="title"
      ></v-autocomplete>
      <v-form @submit.prevent="submitSurvey">
        <v-card>
          <v-card-title class="headline">Наблюдение урока {{selectedItem?'"'+selectedItem+'"':''}}</v-card-title>
          <v-card-text>
            <template v-for="(form,idx) in strForm"  :key="idx + '_str_form'">

                <v-row v-if="form.type === 'combobox'">
                  <v-col cols="8">
                    <v-textarea v-model="form.title" rows="2"  :label="form.tags.join(',')" readonly></v-textarea>
                  </v-col>
                  <v-col cols="4">
                    <v-slider
                            v-model="strForm[idx].value"
                            :ticks="answers"
                            :max="2"
                            step="1"
                            show-ticks="always"
                            thumb-label="always"
                            thumb-color="orange"
                            tick-size="2"
                    >
                      <template v-slot:thumb-label="{ modelValue }">
                        {{ satisfactionEmojis[modelValue] }}
                      </template>

                    </v-slider>
                  </v-col>
                </v-row>


              <v-row v-if="form.type === 'textarea'">
                <v-textarea
                        v-model="strForm[idx].value"
                        rows="2"
                        :label="form.title"
                ></v-textarea>
              </v-row>



            </template>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" type="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-container>


  </div>

</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import {
    FETCH_TEACHERS_ACTION,
    GET_TEACHERS_FIO_GETTER,
    GET_TEACHERS_GETTER, GET_USER_DATA_GETTER,
    LOGIN_ACTION, SAVE_FORM_ACTION, SAVE_FORM_ANSWER_ACTION
  } from "@/store/storeconstants";
  export default {
    data() {
      return {
        ansVal: {},
        selectedItem: null,
        answers: {
          0: 'Н/Н',
          1: 'Н/У',
          2: 'хорошо',
        },
        satisfactionEmojis: ['☹️', '😐', '😍'],

        strForm : [
          {
            title: 'Учитель организует классное пространство и оборудование для разных форм работы, для поддержки активности и свободного передвижения во время урока',
            value: 0,
            tags: ['Class management'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Климат в классе свидетельствует о взаимной вежливости и уважении (учитель - ученик/ученик - ученик). Ученики получают поддержку как в вербальной, так и невербальной форме.',
            value: 0,
            tags: ['Class management'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Учитель минимизирует время ожидания учеников между заданиями',
            value: 0,
            tags: ['Time management'],
            type: 'combobox',
            required: true
          },
          {
            title: 'частая смена задач обеспечивает концентрацию внимания и сосредоточенность на задании',
            value: 0,
            tags: ['Time management'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Поведение учеников и качество их учебной работы свидетельствуют о том, что им понятны цели обучения и ожидаемые результаты урока.',
            value: 0,
            tags: ['Управление поведением учеников'],
            type: 'combobox',
            required: true
          },
          {
            title: 'В ходе урока учебная деятельность учеников эффективно отслеживается, неприемлемое поведение останавливается.',
            value: 0,
            tags: ['Управление поведением учеников'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Урок учителя разработан самостоятельно / совместно с коллегами / в рамках исследования урока (LS) / в рамках исследования практики (AR) / по авторской программе / по авторской методике',
            value: 0,
            tags: ['Планирование'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Структура плана урока отражает логическую взаимосвязь между этапами урока. ',
            value: 0,
            tags: ['Планирование'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Учебный материал отражает взаимосвязь темы с другими темами и разделами учебной программы, преемственность и непрерывность ее изучения, межпредметные связи.',
            value: 0,
            tags: ['Планирование'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Учитель обсуждает с учащимися цели обучения, вовлекает в осмысление целей, логики и результатов урока. ',
            value: 0,
            tags: ['Преподавание'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Выбранные формы работы, повышают эффективность учебной деятельности. Учитель использует ресурсы, направленные на удовлетворение потребностей / развитие способностей учащихся / исследовательских навыков.',
            value: 0,
            tags: ['Преподавание'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Ученики имеют возможность самостоятельно практиковаться в изучаемых понятиях и учениях, применяются различные виды дифференциации (персонализация, индивидуализация). ',
            value: 0,
            tags: ['Преподавание'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Учитель предлагает учащимся критерии и дескрипторы оценивания в соответствии с целями обучения. ',
            value: 0,
            tags: ['Оценивание'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Применяется определенная форма оценивания (диагностическое/формативное/суммативное), разнообразные инструменты оценивания направлены на достижение целей.',
            value: 0,
            tags: ['Оценивание'],
            type: 'combobox',
            required: true
          },
          {
            title: 'Учитель обеспечивает всех учеников своевременной обратной связью. ',
            value: 0,
            tags: ['Оценивание'],
            type: 'combobox',
            required: true
          },

          {
            title: 'Краткий отзыв о наблюдении урока',
            value: '',
            tags: [],
            type: 'textarea',
            required: false
          },
          {
            title: 'Краткий отзыв о продвижении учителя к достижению цели профессионального развития ',
            value: '',
            tags: [],
            type: 'textarea',
            required: false
          },

        ],


      };
    },

    computed: {
      ...mapGetters('form', {
        teachers: GET_TEACHERS_GETTER,
        teachersFio: GET_TEACHERS_FIO_GETTER
      }),
      ...mapGetters('auth', {
        author: GET_USER_DATA_GETTER
      })


    },

    created() {
      this.fetchTeachers({email:this.author.email}).then(res => {
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      ...mapActions('form', {
        fetchTeachers: FETCH_TEACHERS_ACTION,
        saveForm: SAVE_FORM_ACTION,
        saveAnswers: SAVE_FORM_ANSWER_ACTION

      }),


      submitSurvey() {

        this.saveAnswers({'author': this.author.email, 'form': this.strForm})

        console.log(this.selected);
        console.log(this.author.email);
        console.log(this.strForm);

      },

    },

  }
</script>
<style scoped>
  .data__table{
    border-collapse: collapse;
    width: 100%;
  }
  .data__table td, .data__table th {
    border: 1px solid #ECECEC;
    padding: 12px;
  }
  .data__table tr:nth-child(even){background-color: #FAFAFA;}
  .data__table th {
    padding: 16px 12px 20px 13px;
    text-align: left;
    background-color: #F2F6FD;
    color: #224084;
    border-bottom: 1px solid #6E96CB;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }
  .data__table th, .data__table td{
    text-align: right;
    vertical-align: middle;
  }
  .data__table th:first-child{
    text-align: left;
  }
  .data__table td:first-child{
    text-align: left;
  }

</style>