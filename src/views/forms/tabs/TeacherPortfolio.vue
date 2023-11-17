<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="profile.teacherName" label="1. ФИО Учителя" :readonly="!isEditing"></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="6">
                    <v-select
                            v-model="profile.skillLevel"
                            :items="skillLevels"
                            label="2. Уровень педагогического мастерства"
                            :readonly="!isEditing"
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="profile.subject" label="3. Аттестационный период (в формате 2023-2024г)" :readonly="!isEditing"></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-textarea v-model="profile.lessonTopic" label="4. Тема исследования урока Lesson Study / исследования практики Action Research" :readonly="!isEditing"></v-textarea>
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
    import {mapGetters} from "vuex";
    import {GET_USER_DATA_GETTER} from "@/store/storeconstants";

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
                        label: '2. Уровень педагогического мастерства',
                        value: ''
                    },
                    {
                        label: '2. Уровень педагогического мастерства',
                        value: ''
                    }
                ],
                profile: {
                    teacherName: 'John Doe',
                    skillLevel: '',
                    period: '',
                    lessonTopic: '',
                    // Дополнительные поля
                    // ...
                },
                menu: false,
            };
        },
        computed: {
            ...mapGetters('auth', {
                author: GET_USER_DATA_GETTER
            }),
        },
        methods: {
            toggleEditing() {
                if (this.isEditing) {
                    // Ваш код для сохранения профиля
                    // Обычно это будет запрос к API
                    this.isSaving = true;

                    // Ваш код для сохранения данных

                    // Предположим, что сохранение успешно
                    setTimeout(() => {
                        this.isSaving = false;
                        this.isEditing = false;
                    }, 1000);
                } else {
                    this.isEditing = true;
                }
            },
        },
    }
</script>

<style scoped>

</style>