<template>
    <v-dialog v-model="show" style="max-width: 1200px">
        <v-card>
            <v-card-title>

                {{ selectedLessonPlan ? $t("criteria.edit-lesson") : $t("criteria.add-lesson") }}
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="saveLessonPlan">

                    <v-divider :thickness="2"></v-divider>
                    <v-row align="center">
                        <v-col>
                                <v-row>
                                    <v-text-field v-model="lessonPlan.subject" :label="({kz: 'Пәні', ru: 'Предмет', en: 'Subject'})[this.$i18n.locale]" required></v-text-field>
                                </v-row>
                                <v-row>
                                    <v-select
                                            v-model="lessonPlan.grade"
                                            :label="({kz: 'Сыныбы', ru: 'Класс', en: 'Grade'})[this.$i18n.locale]"
                                            :items="['7', '8', '9', '10', '11', '12']"
                                            required
                                    ></v-select>
                                    <v-select
                                            v-model="lessonPlan.grade1"
                                            :label="({kz: 'Сыныбы', ru: 'Класс', en: 'Grade'})[this.$i18n.locale]"
                                            :items="['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K', 'L', 'M']"
                                            required
                                    ></v-select>
                                </v-row>
                                <v-row>
                                    <v-text-field
                                            v-model="lessonPlan.unit"
                                            :label="({kz: 'Тақырыбы', ru: 'Тема урока', en: 'Unit'})[this.$i18n.locale]"
                                            required
                                    ></v-text-field>
                                </v-row>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-date-picker v-model="lessonPlan.date" scrollable actions required>
                                </v-date-picker>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-divider :thickness="2"></v-divider>

                    <!--<v-text-field
                            v-model="lessonPlan.pd"
                            :label="({kz: 'КДМ', ru: 'ЦПР', en: 'PD'})[this.$i18n.locale]"
                    ></v-text-field>-->

                    <v-text-field
                            v-model="lessonPlan.lessonObjectives"
                            :label="({kz: 'Сабақтың мақсаты', ru: 'Цели урока', en: 'Lesson objectives'})[this.$i18n.locale]"
                    ></v-text-field>

                    <v-divider :thickness="2"></v-divider>
                    <v-row align="center">
                        <v-col>
                            <v-card>
                                <v-textarea
                                        v-model="lessonPlan.beginning"
                                        :label="({kz: 'Сабақ барысы (ұйым.кезеңі)', ru: 'Начало урока(орг.момент)', en: 'Beginning  (introduction)'})[this.$i18n.locale]"
                                ></v-textarea>
                                <v-textarea
                                        v-model="lessonPlan.middle"
                                        :label="({kz: 'Сабақ ортасы (тапсырмалар)', ru: 'Середина урока (задание)', en: 'Middle (actions)'})[this.$i18n.locale]"
                                ></v-textarea>
                                <v-textarea
                                        v-model="lessonPlan.end"
                                        :label="({kz: 'Қорытындылау(бекіту)', ru: 'Конец урока(закрепление)', en: 'End (consolidation)'})[this.$i18n.locale]"
                                ></v-textarea>
                            </v-card>

                            <v-card-title>{{({kz: 'Мұғалімнің кері байланысы', ru: 'Рефлексия учителя', en: 'Teacher’s Reflection'})[this.$i18n.locale]}}</v-card-title>
                            <v-card>
                                <v-row>
                                    <v-col>
                                        <v-textarea
                                                v-model="lessonPlan.teachersReflection.atw"
                                                :label="({kz: 'Ұтымды тұстары', ru: 'Что прошло хорошо', en: 'Activities that worked'})[this.$i18n.locale]"
                                        ></v-textarea>
                                    </v-col>
                                    <v-col>
                                        <v-textarea
                                                v-model="lessonPlan.teachersReflection.atbi"
                                                :label="({kz: 'Жақсартуды қажет етеді', ru: 'Что требует улучшения', en: 'Activities  to be improved'})[this.$i18n.locale]"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-card>

                        </v-col>
                        <v-col>
                            <v-card-title style="text-align: center">{{ ({kz: 'Стратегиялар\\тапсырмалар', ru: 'Стратегии\\активити', en: 'Strategies/Activities'})[this.$i18n.locale] }}</v-card-title>
                            <v-card>
                                <v-checkbox
                                        v-for="str in strategies"
                                        v-model="lessonPlan.strategies"
                                        color="primary"
                                        class="pa-0 m-0"
                                        :label="str[this.$i18n.locale]"
                                        :value="str[this.$i18n.locale]"
                                ></v-checkbox>
                            </v-card>

                            <v-card-title style="text-align: center">{{ ({kz: 'Формативті бағалау', ru: 'Формативное  оценивание', en: 'Assessment as Learning'})[this.$i18n.locale] }}</v-card-title>
                            <v-card>
                                <v-checkbox
                                        v-for="str in strategies"
                                        v-model="lessonPlan.assessmentAsLearning"
                                        color="primary"
                                        class="pa-0 m-0"
                                        :label="str[this.$i18n.locale]"
                                        :value="str[this.$i18n.locale]"
                                ></v-checkbox>
                            </v-card>

                            <v-card-title style="text-align: center">{{ ({kz: 'Оқытуды бағалау', ru: 'Оценивание обучения', en: 'Assessment of Learning'})[this.$i18n.locale] }}</v-card-title>
                            <v-card>
                                <v-checkbox
                                        v-for="str in strategies"
                                        v-model="lessonPlan.assessmentOfLearning"
                                        color="primary"
                                        class="pa-0 m-0"
                                        :label="str[this.$i18n.locale]"
                                        :value="str[this.$i18n.locale]"
                                ></v-checkbox>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-divider :thickness="2"></v-divider>


                    <v-btn type="submit" color="primary">{{ selectedLessonPlan ? 'Сохранить' : 'Добавить' }}</v-btn>
                    <v-btn @click.stop="show=false">Отмена</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    export default {
        name: "LessonPlanDialog",
        components: { VueDatePicker },
        props: {
            dialog: Boolean,
            selectedLessonPlan: Object,
        },
        data() {
            return {
                strategies: [
                    {'kz':'Графикалық ұйымдастырушы','ru':'Графический органайзер','en':'Graphic Organizer'},
                    {'kz':'Think/Pair/Share','ru':'Think/Pair/Share','en':'Think/Pair/Share'},
                    {'kz':'Модельдеу','ru':'Моделирование','en':'Modeling'},
                    {'kz':'Ынтымақтастық','ru':'Сотрудничество','en':'Collaboration'},
                    {'kz':'Талқылауға арналған сұрақтар','ru':'Вопросы для обсуждения','en':'Discussion Question'},
                    {'kz':'Станциялар бойынша тапсырма','ru':'Задание по станциям','en':'Learning Stations'},
                ],
                assessmentAsLearning: [
                    {'kz':'Өзін-өзі бағалау','ru':'Самооценивание','en':'Self-assessment'},
                    {'kz':'Өз ара бағалау ','ru':'Взаимооценивание','en':'Peer-assessment'},
                    {'kz':'Презентация','ru':'Презентация ','en':'Presentation'},
                    {'kz':'Үй жұмысы','ru':'Домашнее задание','en':'Homework'},
                ],
                assessmentOfLearning: [
                    {'kz':'Тест тапсырмасы','ru':'Контрольные задание','en':'Quiz'},
                    {'kz':'Презентация','ru':'Презентация ','en':'Presentation'},
                    {'kz':'Жобалық жұмыс','ru':'Проектная работа','en':'Project'},
                    {'kz':'Тест','ru':'Тест','en':'Test'},
                ],
                lessonPlan: { // Используется для хранения данных формы
                    teacherName: '',
                    subject: '',
                    grade: null,
                    grade1: null,
                    unit: '',
                    date: null,
                    pd: '',
                    lessonObjectives: '',
                    beginning: '',
                    middle: '',
                    end: '',
                    teachersReflection: {
                        atw: '',
                        atbi: ''
                    },
                    strategies: [],
                    assessmentAsLearning: [],
                    assessmentOfLearning: []
                },
            };
        },
        watch: {
            selectedLessonPlan(newVal) {
                // При изменении выбранного урока, обновляем данные формы
                this.lessonPlan = { ...newVal };
            },
        },
        computed: {
            show: {
                get () {
                    return this.dialog
                },
                set (value) {
                    this.$emit('close', value)
                }
            }
        },
        methods: {
            saveLessonPlan() {
                // Валидация данных и отправка данных на сохранение
                if(this.lessonPlan.grade && this.lessonPlan.grade1 && this.lessonPlan.date){
                    this.$emit('save', { ...this.lessonPlan });
                    this.show = false;
                }

                // Закрытие диалога
                //this.$emit('close');
            },
            closeDialog() {
                // Очистка данных формы и закрытие диалога
                this.lessonPlan = {
                    teacherName: '',

                    subject: '',
                    grade: '',
                    // Добавьте остальные поля
                    // ...
                };
                this.show = false;
                this.$emit('close');
            },
        },
    };
</script>



<style scoped>

</style>