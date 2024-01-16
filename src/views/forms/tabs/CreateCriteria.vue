<template>
    <v-container>

        <v-dialog v-model="showCurrentProfile">
            <v-card>
                <v-card-title class="text-h5">Profile</v-card-title>
                <v-card-actions>
                    <p>
                        {{requiredProfile[0][this.$i18n.locale]}}
                        <span>
                            {{currentProfile}}
                        </span>
                    </p>

                    <br />
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="showCurrentProfile = false" >OK</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="showLessonPlan">
            <v-card>
                <v-card-title class="text-h5">Lesson plan</v-card-title>
                <v-card-actions>
                    {{currentLessonPlan}}
                    <br />
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="showLessonPlan = false" >OK</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-autocomplete
                v-model="selectedItem"
                :label="$t('criteria.select-teacher')"
                :items="teachersFio"
                item-value="desc"
                item-text="title"
                :error-messages="errorMsg"
                return-object
        ></v-autocomplete>
        <v-form @submit.prevent="submitSurvey">
            <v-card>
                <v-card-title class="headline">
                    {{$t('criteria.lesson-control')}}  {{selectedItem?'"'+selectedItem.desc+'"':''}}

                    <template v-if="selectedItem">
                            <v-icon v-if="currentProfile" @click="showCurrentProfile = true" style="margin: 10px; cursor: pointer;">
                                mdi-account-file
                            </v-icon>

                            <v-icon v-if="currentLessonPlan"  @click="showLessonPlan = true" style="margin: 10px; cursor:pointer;">
                                mdi-alpha-l-box
                            </v-icon>
                    </template>

                </v-card-title>
                <v-card-text>
                    <template v-for="(form,idx) in strForm"  :key="idx + '_str_form'">

                        <v-row v-if="form.type === 'combobox'">
                            <v-col >
                                <v-textarea v-model="form.title[this.$i18n.locale]" rows="2"  :label="form.tags.map(tag => tag[this.$i18n.locale]).join(',')" readonly></v-textarea>
                            </v-col>
                            <v-col>
                                <v-select
                                        :label="$t('criteria.select')"
                                        v-model="strForm[idx].value"
                                        :items="answers[this.$i18n.locale]"
                                        item-title="title"
                                        item-value="value"
                                ></v-select>
                                <!--<v-slider
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

                                </v-slider>-->
                            </v-col>
                        </v-row>


                        <v-row v-if="form.type === 'textarea'">
                            <v-textarea
                                    v-model="strForm[idx].value"
                                    rows="2"
                                    :label="form.title[this.$i18n.locale]"
                            ></v-textarea>
                        </v-row>



                    </template>
                </v-card-text>
                <v-alert v-if="showErrors"  type="error" dismissible>
                    {{$t('criteria.teacher-not-found')}}
                </v-alert>
                <v-alert v-if="showSuccess" type="success" dismissible>
                    {{$t('criteria.success-saved')}}
                </v-alert>
                <v-card-actions>
                    <v-btn color="primary" type="submit">{{$t('criteria.submit')}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-container>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import {
        GET_TEACHER_PLAN_ACTION,
        GET_TEACHER_PROFILE_ACTION,
        GET_TEACHERS_FIO_GETTER,
        GET_USER_DATA_GETTER
    } from "@/store/storeconstants";

    export default {
        name: "CreateCriteria",
        props: ['form'],
        data(){
            return {
                strForm: [...this.form],
                showErrors: false,
                showSuccess: false,
                selectedItem: null,
                errorMsg: null,
                dateStringIso: '2024-01-19T18:00:00.000Z',

                currentLessonPlan: null,
                showLessonPlan: false,

                currentProfile: null,
                showCurrentProfile: false,

                answers: {
                    ru: [
                        {title: 'Н/Н – не наблюдается', value: 0},
                        {title: '1 - нуждается в улучшении', value: 1},
                        {title: '2 - хорошо', value: 2},
                    ],
                    kz: [
                        {title: "Б - бақыланбайды", value: 0},
                        {title: "1 - Жақсартуды қажет етеді", value: 1},
                        {title: "2 - жақсы", value: 2},
                    ],
                    en: [
                        {title: "N – No", value: 0},
                        {title: "1 – needs improvement", value: 1},
                        {title: "2 - good", value: 2},
                    ],
                    },
                satisfactionEmojis: ['☹️', '😐', '😍'],

                skillLevels: {'ru':[
                        {'title':'учитель-стажер NIS','value':0},
                        {'title':'учитель NIS','value':1},
                        {'title':'учитель-модератор NIS','value':2},
                        {'title':'учитель-эксперт NIS','value':3},
                        {'title':'учитель-исследователь NIS','value':4},
                    ],
                    'kz':[
                        {'title':'НЗМ стажер оқытушысы','value':0},
                        {'title':'НЗМ мұғалімі','value':1},
                        {'title':'НЗМ оқытушы-модераторы','value':2},
                        {'title':'НЗМ сарапшы мұғалімі','value':3},
                        {'title':'НЗМ оқытушы-зерттеуші','value':4},
                    ],
                    'en':[
                        {'title':'NIS trainee teacher','value':0},
                        {'title':'NIS teacher','value':1},
                        {'title':'NIS teacher-moderator','value':2},
                        {'title':'NIS expert teacher','value':3},
                        {'title':'NIS teacher-researcher','value':4},
                    ]
                },

                requiredProfile: [
                    {'ru':'2. Уровень педагогического мастерства','kz':'2. Оқыту шеберлігінің деңгейі','en':'2. Level of teaching skills'},
                    {'ru':'3. Аттестационный период','kz':'3. Аттестаттау кезеңі','en':'3. Attestation period'},
                    {'ru':'4. Тема исследования урока Lesson Study / исследования практики Action Research','kz':'4. Lesson Study / Action Research тақырыбы','en':'4. Lesson Study / Action Research topic'},
                    {'ru':'5. Цель профессионального развития','kz':'5. Біліктілікті арттыру мақсаты','en':'5. Goal of professional development'},
                ],

            }
        },
        created() {
            const date = new Date();
            this.dateStringIso = date.toISOString().split('T')[0] + 'T18:00:00.000Z';
        },
        watch: {
            selectedItem: {
                handler(val){
                    if(val && val.desc){
                        this.getTeacherPlan({email: val.desc, date: this.dateStringIso}).then(res => {
                            console.log(res)
                            this.currentLessonPlan = res? JSON.parse(res):res;
                        }).catch(e => {
                        });
                        this.getTeacherProfile(val.desc).then(res => {
                            console.log(res)
                            this.currentProfile = res? JSON.parse(res): res;
                        }).catch(e => {
                        })
                    }
                },
                deep: true
            }
        },
        computed: {
            ...mapGetters('form', {
                teachersFio: GET_TEACHERS_FIO_GETTER,
            }),
            ...mapGetters('auth', {
                author: GET_USER_DATA_GETTER
            }),

        },

        methods: {
            ...mapActions('user', {
                getTeacherPlan: GET_TEACHER_PLAN_ACTION,
                getTeacherProfile: GET_TEACHER_PROFILE_ACTION
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

                    this.$emit('save',{
                        'authorEmail': this.author.email,
                        'authorName': this.author.name,
                        'subjectEmail': this.selectedItem.desc,
                        'subjectName': this.selectedItem.title,
                        'answer': answers
                    });

                    this.selectedItem = null;

                }else {
                    this.showErrors = true;
                }
            },
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 830px) {
        .v-row {
            flex-direction: column;
        }
    }
</style>