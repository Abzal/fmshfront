<template>

    <v-btn style="margin: 10px;" @click="showLessonPlanDialog">{{$t('criteria.add-lesson')}}</v-btn>

    <v-data-table :headers="headers" :items="items"></v-data-table>

    <lesson-plan-dialog
            :dialog="dialog"
            :lessonPlan="selectedLessonPlan"
            @save="saveLessonPlan"
            @close="closeLessonPlanDialog"
    ></lesson-plan-dialog>

</template>

<script>
    import LessonPlanDialog from "@/views/forms/tabs/LessonPlanDialog";
    import {mapActions, mapGetters} from 'vuex'
    import {CREATE_PLAN_ACTION, GET_TEACHER_PLANS_ACTION, GET_USER_DATA_GETTER} from "@/store/storeconstants";
    export default {
        name: "LessonPlan",
        components: {LessonPlanDialog},
        data() {
            return {
                lessonPlans: [{date: '12',subject: '12', grade: '12' }], // Ваши уроки будут храниться здесь
                selectedLessonPlan: null,
                dialog: false,

                items : [],

                headers: [
                    {
                        title: ({kz:'Уақыт',ru:'Дата',en:'Date'})[this.$i18n.locale],
                        align: 'start',
                        sortable: false,
                        value: 'date'
                    },
                    {
                        title: ({kz:'Класс',ru:'Класс',en:'Класс'})[this.$i18n.locale],

                        sortable: false,
                        value: 'grade'
                    },
                    {
                        title: ({kz: 'Пәні', ru: 'Предмет', en: 'Subject'})[this.$i18n.locale],
                        align: 'end',
                        sortable: false,
                        value: 'plan.subject'
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
        created() {
            this.getPlans();
        },
        computed: {
            ...mapGetters('auth',{
                userData: GET_USER_DATA_GETTER
            }),
        },
        methods: {
            ...mapActions('user', {
                createTeacherPlan: CREATE_PLAN_ACTION,
                getTeacherPlans: GET_TEACHER_PLANS_ACTION
            }),

            getPlans(){
                this.getTeacherPlans(this.userData.email).then(res => {
                    this.items = res;
                    for (let i = 0; i < this.items.length; i++){
                        let d = new Date(this.items[i].date);
                        this.items[i].date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() ;
                        this.items[i].plan = JSON.parse(this.items[i].plan);
                    }
                }).catch(e => {
                    console.error(e)
                })
            },
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
                let lp = {
                    email: this.userData.email,
                    iin: this.userData.iin,
                    date: lessonPlan.date.toISOString(),
                    grade: lessonPlan.grade + lessonPlan.grade1,
                    plan: {...lessonPlan, teacherName: this.userData.name}
                }
                this.createTeacherPlan(lp).then(res => {
                    this.getPlans();
                }).catch(e => {
                    console.log(e)
                })

               /* // Ваш код для сохранения/обновления урока
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

                this.dialog = false;*/
            },
            closeLessonPlanDialog() {
                this.dialog = false;
            },
        },
    }
</script>

<style scoped>

</style>