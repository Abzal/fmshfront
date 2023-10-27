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
        <v-tab :value="3">statistics</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
                :key="1"
                :value="1"
        >

          <v-container>
            <v-alert v-if="showErrors" type="error" dismissible>
              Учитель не выбран
            </v-alert>
            <v-alert v-if="showSuccess" type="success" dismissible>
              Успешно сохранен
            </v-alert>
            <v-autocomplete
                    v-model="selectedItem"
                    label="Teachers"
                    :items="teachersFio"
                    item-value="desc"
                    item-text="title"
                    :error-messages="errorMsg"
                    return-object
            ></v-autocomplete>
            <v-form @submit.prevent="submitSurvey">
              <v-card>
                <v-card-title class="headline">Наблюдение урока {{selectedItem?'"'+selectedItem.desc+'"':''}}</v-card-title>
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

        </v-window-item>

        <v-window-item
                :key="2"
                :value="2"
        >
          <v-container >

            <v-card>
              <p>
                <v-autocomplete
                        v-model="selectedDate"
                        :items="dateArr"
                        label="Выбрать дату"
                        item-value="desc"
                        item-text="title"
                ></v-autocomplete>
              </p>
              <v-list lines="one">
                <v-list-item
                        v-for="(uans, n) in descArr"
                        :key="n"
                        :title="uans.authorName"
                        :subtitle="JSON.parse(uans.answer)[15]+ '; ' + JSON.parse(uans.answer)[16]"
                ></v-list-item>
              </v-list>
            </v-card>

            <v-card>
              <Radar :data="radarDta" :options="radarOptions" />
            </v-card>
          </v-container>
        </v-window-item>

        <v-window-item
                :key="3"
                :value="3"
        >
          <v-container >
            <v-autocomplete
                    v-model="selectedDate"
                    :items="dateArr"
                    label="Выбрать дату"
                    item-value="desc"
                    item-text="title"
            ></v-autocomplete>

            {{allUsersAnswers}}

          </v-container>
        </v-window-item>


      </v-window>
    </v-card>






  </div>

</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import {
    FETCH_ALL_ANSWERS_ACTION,
    FETCH_TEACHERS_ACTION, FETCH_USER_ANSWERS_ACTION,
    GET_TEACHERS_FIO_GETTER,
    GET_TEACHERS_GETTER, GET_USER_DATA_GETTER,
    SAVE_FORM_ACTION, SAVE_FORM_ANSWER_ACTION
  } from "@/store/storeconstants";
  import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Radar } from 'vue-chartjs'

  ChartJS.register(
          RadialLinearScale,
          PointElement,
          LineElement,
          Filler,
          Tooltip,
          Legend
  )

  export default {
    components: {
      Radar
    },
    data() {
      return {
        selectedDate : null,
        radarData: {
          labels: [
            'Учитель организует классное пространство и оборудование для разных форм работы, для поддержки активности и свободного передвижения во время урока',
            'Климат в классе свидетельствует о взаимной вежливости и уважении (учитель - ученик/ученик - ученик). Ученики получают поддержку как в вербальной, так и невербальной форме.',
            'Учитель минимизирует время ожидания учеников между заданиями',
            'частая смена задач обеспечивает концентрацию внимания и сосредоточенность на задании',
            'Поведение учеников и качество их учебной работы свидетельствуют о том, что им понятны цели обучения и ожидаемые результаты урока.',
            'В ходе урока учебная деятельность учеников эффективно отслеживается, неприемлемое поведение останавливается.',
            'Урок учителя разработан самостоятельно / совместно с коллегами / в рамках исследования урока (LS) / в рамках исследования практики (AR) / по авторской программе / по авторской методике',
            'Структура плана урока отражает логическую взаимосвязь между этапами урока. ',
            'Учебный материал отражает взаимосвязь темы с другими темами и разделами учебной программы, преемственность и непрерывность ее изучения, межпредметные связи.',
            'Учитель обсуждает с учащимися цели обучения, вовлекает в осмысление целей, логики и результатов урока. ',
            'Выбранные формы работы, повышают эффективность учебной деятельности. Учитель использует ресурсы, направленные на удовлетворение потребностей / развитие способностей учащихся / исследовательских навыков.',
            'Ученики имеют возможность самостоятельно практиковаться в изучаемых понятиях и учениях, применяются различные виды дифференциации (персонализация, индивидуализация). ',
            'Учитель обеспечивает всех учеников своевременной обратной связью. ',
            'Краткий отзыв о наблюдении урока',
            'Краткий отзыв о продвижении учителя к достижению цели профессионального развития'
          ],
          datasets: [
            {
              label: 'dsf',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 2, 1, 1, 1]
            },
            {
              label: 'My Second dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [1, 1, 2, 1, 2, 1, 0, 1, 2, 1, 1, 2, 1, 1, 1]
            }
          ]
        },
        radarOptions: {
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
              position: 'left'
            },
            datalabels: {
              color: function(context) {

                return 'green';
              },
            },




          },
          scales: {
            r: {
              pointLabels: {
                callback: function(label){
                  return label.length > 20? label.substring(0, 20) + '...': label;
                },
              }
            }
          }
        },

        showErrors: false,
        showSuccess: false,
        selectedItem: null,
        tab: null,
        allUserAnswers: null,
        allUsersAnswers: null,
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
        teachersFio: GET_TEACHERS_FIO_GETTER,
        allUserAnswers: FETCH_USER_ANSWERS_ACTION

      }),
      ...mapGetters('auth', {
        author: GET_USER_DATA_GETTER
      }),

      dateArr() {
        let dataSet = [];
        this.allUserAnswers.forEach(ans => {
          if (!dataSet.includes(ans.formatedDate)) {
            dataSet.push(ans.formatedDate);
          }
        });
        return dataSet;
      },

      descArr() {
        let dataSet = [];
        this.allUserAnswers.forEach(ans => {
            if(this.selectedDate === null){
              dataSet.push(ans)
            }else if(this.selectedDate === ans.formatedDate){
              dataSet.push(ans)
            }
        });
        return dataSet;
      },

      statArr() {
        let dataSet = [];

        this.allUsersAnswers.forEach(ans = {

        })


      },

      radarDta() {
          let datasets = [];
          this.allUserAnswers.forEach(ans => {

            if(this.selectedDate === null){

              const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
              const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
              const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue

              datasets.push({
                label: ans.authorName,
                backgroundColor: `rgba(${r},${g},${b},0.2)`,
                borderColor: `rgba(${r},${g},${b},1)`,
                pointBackgroundColor: `rgba(${r},${g},${b},1)`,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: `rgba(${r},${g},${b},1)`,
                data: JSON.parse(ans.answer)?.slice(0,15)
              })

            }else if(ans.formatedDate === this.selectedDate){

              const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
              const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
              const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue

              datasets.push({
                label: ans.authorName,
                backgroundColor: `rgba(${r},${g},${b},0.2)`,
                borderColor: `rgba(${r},${g},${b},1)`,
                pointBackgroundColor: `rgba(${r},${g},${b},1)`,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: `rgba(${r},${g},${b},1)`,
                data: JSON.parse(ans.answer)?.slice(0,15)
              })
            }


          });

        let labels = [
          'Учитель организует классное пространство и оборудование для разных форм работы, для поддержки активности и свободного передвижения во время урока',
          'Климат в классе свидетельствует о взаимной вежливости и уважении (учитель - ученик/ученик - ученик). Ученики получают поддержку как в вербальной, так и невербальной форме.',
          'Учитель минимизирует время ожидания учеников между заданиями',
          'частая смена задач обеспечивает концентрацию внимания и сосредоточенность на задании',
          'Поведение учеников и качество их учебной работы свидетельствуют о том, что им понятны цели обучения и ожидаемые результаты урока.',
          'В ходе урока учебная деятельность учеников эффективно отслеживается, неприемлемое поведение останавливается.',
          'Урок учителя разработан самостоятельно / совместно с коллегами / в рамках исследования урока (LS) / в рамках исследования практики (AR) / по авторской программе / по авторской методике',
          'Структура плана урока отражает логическую взаимосвязь между этапами урока. ',
          'Учебный материал отражает взаимосвязь темы с другими темами и разделами учебной программы, преемственность и непрерывность ее изучения, межпредметные связи.',
          'Учитель обсуждает с учащимися цели обучения, вовлекает в осмысление целей, логики и результатов урока. ',
          'Выбранные формы работы, повышают эффективность учебной деятельности. Учитель использует ресурсы, направленные на удовлетворение потребностей / развитие способностей учащихся / исследовательских навыков.',
          'Ученики имеют возможность самостоятельно практиковаться в изучаемых понятиях и учениях, применяются различные виды дифференциации (персонализация, индивидуализация). ',
          'Учитель обеспечивает всех учеников своевременной обратной связью. ',
          'Краткий отзыв о наблюдении урока',
          'Краткий отзыв о продвижении учителя к достижению цели профессионального развития'
        ];

        return {labels: labels, datasets: datasets};
      }


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


      submitSurvey() {




        if (this.selectedItem){
          let answers = [];
          this.showErrors = false;
          this.showSuccess = true;

          this.strForm.forEach(form => {
            answers.push(form.value);
            form.value = 0;
          });
          this.saveAnswers({
            'authorEmail': this.author.email,
            'authorName': this.author.name,
            'subjectEmail': this.selectedItem.desc,
            'subjectName': this.selectedItem.title,
            'answer': answers
          }).then(responce => {
            this.selectedItem = null;
            console.log(responce);
          }).catch(error => {
            console.log(error);
          });
        }else {
          this.showErrors = true;

        }



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