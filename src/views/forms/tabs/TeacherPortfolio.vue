<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field v-model="requiredProfile[0].value" :label="requiredProfile[0].label[this.$i18n.locale]" :readonly="!isEditing"></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-select
                            v-model="requiredProfile[1].value"
                            :items="skillLevels[this.$i18n.locale]"
                            :label="requiredProfile[1].label[this.$i18n.locale]"
                            :readonly="!isEditing"
                            item-title="title"
                            item-value="value"
                    ></v-select>
                </v-col>
                <v-col>
                    <v-select
                            v-model="requiredProfile[2].value"
                            :items="atLevels"
                            :label="requiredProfile[2].label[this.$i18n.locale]"
                            :readonly="!isEditing"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea
                            v-model="requiredProfile[3].value"
                            :label="requiredProfile[3].label[this.$i18n.locale]"
                            :readonly="!isEditing">
                    </v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea
                            v-model="requiredProfile[4].value"
                            :label="requiredProfile[4].label[this.$i18n.locale]"
                            :readonly="!isEditing">
                    </v-textarea>
                </v-col>
            </v-row>

            <v-row v-for="(item, index) in additionalProfile">
                <v-col>
                    <v-textarea
                            v-model="additionalProfile[index].label"
                            :label="$t('criteria.name')"
                            :readonly="!isEditing"
                    ></v-textarea>
                </v-col>
                <v-col>
                    <v-textarea
                            v-model="additionalProfile[index].value"
                            :label="$t('criteria.value')"
                            :readonly="!isEditing">
                    </v-textarea>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-btn @click="()=>additionalProfile.push({label: '', value: ''})" style="width: 100%">+ {{$t('criteria.add-line')}}</v-btn>
                </v-col>
            </v-row>
            <!-- Дополнительные поля -->



            <v-row>
                <v-col cols="12">
                    <v-btn @click="toggleEditing" :loading="isSaving" :disabled="isSaving">
                        {{ isEditing ? $t('criteria.save') : $t('criteria.edit') }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import {CREATE_PROFILE_ACTION, GET_TEACHER_PROFILE_ACTION, GET_USER_DATA_GETTER} from "@/store/storeconstants";

    export default {
        name: "TeacherPortfolio",
        data() {
            return {
                isEditing: false,
                isSaving: false,
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
                atLevels: [
                    '2023-2024',
                    '2024-2025',
                    '2025-2026',
                    '2026-2027',
                    '2027-2028',
                    '2028-2029',
                    '2029-2030',
                    '2030-2031',
                ],

                requiredProfile: [
                    {
                        label: {'ru':'1. ФИО Учителя','kz':'1. Мұғалімнің аты-жөні','en':'1. Full name of the Teacher'},
                        value: ''
                    },
                    {
                        label: {'ru':'2. Уровень педагогического мастерства','kz':'2. Оқыту шеберлігінің деңгейі','en':'2. Level of teaching skills'},
                        value: ''
                    },
                    {
                        label: {'ru':'3. Аттестационный период','kz':'3. Аттестаттау кезеңі','en':'3. Attestation period'},
                        value: ''
                    },
                    {
                        label: {'ru':'4. Тема исследования урока Lesson Study / исследования практики Action Research','kz':'4. Lesson Study / Action Research тақырыбы','en':'4. Lesson Study / Action Research topic'},
                        value: ''
                    },
                    {
                        label: {'ru':'5. Цель профессионального развития','kz':'5. Біліктілікті арттыру мақсаты','en':'5. Goal of professional development'},
                        value: ''
                    }
                ],
                additionalProfile: [],
                menu: false,
            };
        },
        computed: {
            ...mapGetters('auth', {
                author: GET_USER_DATA_GETTER
            }),
        },
        created() {
            if(this.requiredProfile[0].value === ''){
                this.requiredProfile[0].value = this.author.name;
            }
            this.getTeacherProfile(this.author.email).then(res => {
                let profile = JSON.parse(res);
                let i=0;
                profile.requiredProfile.forEach(rp=>{
                    console.log(rp)
                    this.requiredProfile[i].value = rp.value;
                    i++;
                })
                //this.requiredProfile = profile.requiredProfile;
                this.additionalProfile = profile.additionalProfile;
            }).catch(err => {
                console.log(err)
            })
        },
        methods: {
            ...mapActions('user', {
                createTeacherProfile: CREATE_PROFILE_ACTION,
                getTeacherProfile: GET_TEACHER_PROFILE_ACTION
            }),

            toggleEditing() {
                if (this.isEditing) {
                    // Ваш код для сохранения профиля
                    // Обычно это будет запрос к API
                    this.isSaving = true;

                    this.createTeacherProfile({
                        profile: JSON.stringify({
                            requiredProfile: this.requiredProfile,
                            additionalProfile: this.additionalProfile,
                        }),
                        email: this.author.email,
                        iin: this.author.iin
                    }).then(res => {
                        console.log(res);
                        this.isSaving = false;
                    }).catch(err => {
                        console.log(err);
                        this.isSaving = false;
                    })
                    this.isEditing = false;

                } else {
                    this.isEditing = true;
                }
            },
        },
    }
</script>

<style scoped>

</style>