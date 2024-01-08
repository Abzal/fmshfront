<template>
    <v-dialog v-model="show">
        <v-card>
            <v-card-title>
                {{ selectedLessonPlan ? 'Редактировать урок' : 'Добавить урок' }}
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="saveLessonPlan">

                    <v-divider :thickness="2"></v-divider>
                    <v-row align="center">
                        <v-col>
                                <v-text-field v-model="lessonPlan.subject" label="Предмет"></v-text-field>
                                <v-select
                                        v-model="lessonPlan.grade"
                                        label="Класс"
                                        :items="['7', '8', '9', '10', '11', '12']"
                                ></v-select>
                                <v-text-field v-model="lessonPlan.unit" label="Тема урока"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-date-picker v-model="lessonPlan.date" scrollable actions>
                                </v-date-picker>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-divider :thickness="2"></v-divider>

                    <v-text-field v-model="lessonPlan.pd"></v-text-field>




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
                lessonPlan: { // Используется для хранения данных формы
                    teacherName: '',
                    subject: '',
                    grade: '',
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
                this.$emit('save', { ...this.lessonPlan });

                // Очистка данных формы
                this.lessonPlan = {
                    teacherName: '',
                    date: null,
                    subject: '',
                    grade: '',
                    // Добавьте остальные поля
                    // ...
                };

                this.show = false;
                // Закрытие диалога
                this.$emit('close');
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