<template>
    <v-data-table :items="items"></v-data-table>
    <v-container>
        <v-container>
            <v-btn @click="showLessonPlanDialog">Добавить урок</v-btn>

            <!--<v-data-table :headers="headers" :items="lessonPlans" item-key="id" class="elevation-1">
                <template v-slot:item="{ item }">
                    <tr>
                        <td>{{ item.date[this.$i18n.locale] }}</td>
                        <td>{{ item.subject[this.$i18n.locale] }}</td>
                        <td>{{ item.grade[this.$i18n.locale] }}</td>
                        <td>
                            <v-btn @click="editLessonPlan(item)">Редактировать</v-btn>
                            <v-btn @click="deleteLessonPlan(item)">Удалить</v-btn>
                        </td>
                    </tr>
                </template>
            </v-data-table>-->



            <lesson-plan-dialog
                    :dialog="dialog"
                    :lessonPlan="selectedLessonPlan"
                    @save="saveLessonPlan"
                    @close="closeLessonPlanDialog"
            ></lesson-plan-dialog>
        </v-container>
    </v-container>
</template>

<script>
    import LessonPlanDialog from "@/views/forms/tabs/LessonPlanDialog";
    export default {
        name: "LessonPlan",
        components: {LessonPlanDialog},
        data() {
            return {
                lessonPlans: [{date: '12',subject: '12', grade: '12' }], // Ваши уроки будут храниться здесь
                selectedLessonPlan: null,
                dialog: false,

                items : [
                    {
                        name: 'African Elephant',
                        species: 'Loxodonta africana',
                        diet: 'Herbivore',
                        habitat: 'Savanna, Forests',
                    },
                ],

                headers: [
                    {
                        title: {kz:'Уақыт',ru:'Дата',en:'Date'},
                        align: 'start',
                        sortable: false,
                        value: 'date'
                    },
                    {
                        title: {kz:'Предмет',ru:'Предмет',en:'Предмет'},
                        align: 'start',
                        sortable: false,
                        value: 'subject'
                    },
                    {
                        title: {kz:'Класс',ru:'Класс',en:'Класс'},
                        align: 'end',
                        sortable: false,
                        value: 'grade'
                    },
                    {
                        title: {kz:'Класс',ru:'Класс',en:'Класс'},
                        align: 'end',
                        sortable: false,
                        value: 'grade'
                    },
                ],


                lessonPlan: {
                    teacherName: '',
                    date: '',
                    subject: '',
                    grade: '',
                    unit: '',
                    pd: '',
                    lessonObjectives: '',
                    beginning: '',
                    middle: '',
                    end: '',
                    teachersReflection: {
                        activitiesWorked: '',
                        activitiesImproved: ''
                    },
                    strategies: {
                        graphicOrganizer: false,
                        thinkPairShare: false,
                        modeling: false,
                        collaboration: false,
                        discussionQuestion: false,
                        learningStations: false,
                        additional: []
                    },
                    assessmentAsLearning: {
                        selfAssessment: false,
                        peerAssessment: false,
                        presentation: false,
                        homework: false,
                        additional: []
                    },
                    assessmentOfLearning: {
                        quiz: false,
                        presentation: false,
                        project: false,
                        test: false,
                        additional: []
                    }
                }

            }
        },
        methods: {
            showLessonPlanDialog() {
                this.selectedLessonPlan = null;
                this.dialog = true;
            },
            editLessonPlan(lessonPlan) {
                this.selectedLessonPlan = lessonPlan;
                this.dialog = true;
            },
            deleteLessonPlan(lessonPlan) {
                // Ваш код для удаления урока
                const index = this.lessonPlans.indexOf(lessonPlan);
                if (index !== -1) {
                    this.lessonPlans.splice(index, 1);
                }
            },
            saveLessonPlan(lessonPlan) {
                // Ваш код для сохранения/обновления урока
                if (this.selectedLessonPlan) {
                    // Редактирование урока
                    const index = this.lessonPlans.indexOf(this.selectedLessonPlan);
                    if (index !== -1) {
                        this.lessonPlans[index] = lessonPlan;
                    }
                } else {
                    // Добавление нового урока
                    this.lessonPlans.push(lessonPlan);
                }

                this.dialog = false;
            },
            closeLessonPlanDialog() {
                this.dialog = false;
            },
        },
    }
</script>

<style scoped>

</style>