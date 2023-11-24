<template>
    <v-dialog v-model="dialog" max-width="600">
        <v-card>
            <v-card-title>
                {{ selectedLessonPlan ? 'Редактировать урок' : 'Добавить урок' }}
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="saveLessonPlan">
                    <!-- Добавьте поля формы в соответствии с вашим объектом lessonPlan -->
                    <v-text-field v-model="lessonPlan.teacherName" label="ФИО учителя"></v-text-field>
                    <v-text-field v-model="lessonPlan.date" label="Дата"></v-text-field>
                    <v-text-field v-model="lessonPlan.subject" label="Предмет"></v-text-field>
                    <v-text-field v-model="lessonPlan.grade" label="Класс"></v-text-field>
                    <!-- Добавьте остальные поля -->
                    <!-- ... -->

                    <v-btn type="submit" color="primary">{{ selectedLessonPlan ? 'Сохранить' : 'Добавить' }}</v-btn>
                    <v-btn @click="closeDialog">Отмена</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "LessonPlanDialog",
        props: {
            dialog: Boolean,
            selectedLessonPlan: Object,
        },
        data() {
            return {
                lessonPlan: { // Используется для хранения данных формы
                    teacherName: '',
                    date: '',
                    subject: '',
                    grade: '',
                    // Добавьте остальные поля
                    // ...
                },
            };
        },
        watch: {
            selectedLessonPlan(newVal) {
                // При изменении выбранного урока, обновляем данные формы
                this.lessonPlan = { ...newVal };
            },
        },
        methods: {
            saveLessonPlan() {
                // Валидация данных и отправка данных на сохранение
                this.$emit('save', { ...this.lessonPlan });

                // Очистка данных формы
                this.lessonPlan = {
                    teacherName: '',
                    date: '',
                    subject: '',
                    grade: '',
                    // Добавьте остальные поля
                    // ...
                };

                // Закрытие диалога
                this.$emit('close');
            },
            closeDialog() {
                // Очистка данных формы и закрытие диалога
                this.lessonPlan = {
                    teacherName: '',
                    date: '',
                    subject: '',
                    grade: '',
                    // Добавьте остальные поля
                    // ...
                };

                this.$emit('close');
            },
        },
    };
</script>



<style scoped>

</style>