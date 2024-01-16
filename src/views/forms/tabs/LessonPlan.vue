<template>

    <v-data-table
            :headers="headers"
            :items="items"
            :sort-by="[{ key: 'date', order: 'asc' }]"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Plans</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn style="margin: 10px;" @click="showLessonPlanDialog">{{$t('criteria.add-lesson')}}</v-btn>

                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon
                    size="small"
                    class="me-2"
                    @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                    size="small"
                    @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn
                    color="primary"
                    @click="initialize"
            >
                Reset
            </v-btn>
        </template>
    </v-data-table>

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
    import {
        CREATE_PLAN_ACTION, DELETE_TEACHER_PLAN_ACTION,
        GET_TEACHER_PLAN_ACTION,
        GET_TEACHER_PLANS_ACTION,
        GET_USER_DATA_GETTER
    } from "@/store/storeconstants";
    export default {
        name: "LessonPlan",
        components: {LessonPlanDialog},
        data() {
            return {
                dialogDelete: false,
                deleteId: -1,
                lessonPlans: [{date: '12',subject: '12', grade: '12' }], // Ваши уроки будут храниться здесь
                selectedLessonPlan: null,
                dialog: false,

                items : [],

                headers: [
                    {
                        title: ({kz:'Уақыт',ru:'Дата',en:'Date'})[this.$i18n.locale],
                        align: 'start',
                        value: 'date'
                    },
                    {
                        title: ({kz:'Класс',ru:'Класс',en:'Класс'})[this.$i18n.locale],
                        value: 'grade'
                    },
                    {
                        title: ({kz: 'Пәні', ru: 'Предмет', en: 'Subject'})[this.$i18n.locale],
                        value: 'plan.subject'
                    },
                    {
                        title: 'Actions',
                        key: 'actions',
                        align: 'end',
                        sortable: false
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
                getTeacherPlans: GET_TEACHER_PLANS_ACTION,
                getTeacherPlan: GET_TEACHER_PLAN_ACTION,
                deleteTeacherPlan: DELETE_TEACHER_PLAN_ACTION
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

            editItem (item) {

            },

            deleteItem (item) {
                this.deleteId  = item.id;
                this.dialogDelete = true;
            },

            deleteItemConfirm () {
                this.deleteTeacherPlan({id: this.deleteId, email: this.userData.email}).then( res => {
                    console.log(res);
                    this.getPlans();
                }).catch(e => {
                    console.log(e);
                });
                this.dialogDelete = false;

            },

            closeDelete () {
                this.deleteId = -1;
                this.dialogDelete = false;
            },

            save () {

            },


        },
    }
</script>

<style scoped>

</style>