<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field v-model="requiredProfile[0].value" :label="requiredProfile[0].label" :readonly="!isEditing"></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-select
                            v-model="requiredProfile[1].value"
                            :items="skillLevels"
                            :label="requiredProfile[1].label"
                            :readonly="!isEditing"
                    ></v-select>
                </v-col>
                <v-col>
                    <v-text-field
                            v-model="requiredProfile[2].value"
                            :label="requiredProfile[2].label"
                            :readonly="!isEditing">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea
                            v-model="requiredProfile[3].value"
                            :label="requiredProfile[3].label"
                            :readonly="!isEditing">
                    </v-textarea>
                </v-col>
            </v-row>


            <v-row v-for="(item, index) in additionalProfile">
                <v-col>
                    <v-textarea
                            v-model="additionalProfile[index].label"
                            label="Наименование"
                            :readonly="!isEditing"
                    ></v-textarea>
                </v-col>
                <v-col>
                    <v-textarea
                            v-model="additionalProfile[index].value"
                            label="Значение"
                            :readonly="!isEditing">
                    </v-textarea>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-btn @click="()=>additionalProfile.push({label: '', value: ''})" style="width: 100%">+ добавить поле</v-btn>
                </v-col>
            </v-row>
            <!-- Дополнительные поля -->



            <v-row>
                <v-col cols="12">
                    <v-btn @click="toggleEditing" :loading="isSaving" :disabled="isSaving">
                        {{ isEditing ? 'Сохранить' : 'Редактировать' }}
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
                skillLevels: [
                    'учитель-стажер NIS',
                    'учитель NIS',
                    'учитель-модератор NIS',
                    'учитель-эксперт NIS',
                    'учитель-исследователь NIS',
                ],
                requiredProfile: [
                    {
                        label: '1. ФИО Учителя',
                        value: ''
                    },
                    {
                        label: '2. Уровень педагогического мастерства',
                        value: ''
                    },
                    {
                        label: '3. Аттестационный период (в формате 2023-2024г)',
                        value: ''
                    },
                    {
                        label: '4. Тема исследования урока Lesson Study / исследования практики Action Research',
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
                this.requiredProfile = profile.requiredProfile;
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