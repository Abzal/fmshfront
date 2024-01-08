<template>
    <v-container>

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
                <v-card-title class="headline">{{$t('criteria.lesson-control')}}  {{selectedItem?'"'+selectedItem.desc+'"':''}}</v-card-title>
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
                <v-alert v-if="showErrors" type="error" dismissible>
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
    import {mapGetters} from "vuex";
    import {GET_TEACHERS_FIO_GETTER, GET_USER_DATA_GETTER} from "@/store/storeconstants";

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
                answers: {
                    ru: [
                        {title: 'Н/Н', value: 0},
                        {title: 'Н/У', value: 1},
                        {title: 'хорошо', value: 2},
                    ],
                    kz: [
                        {title: "бақыланбайды", value: 0},
                        {title: "Жақсартуды қажет етеді", value: 1},
                        {title: "жақсы", value: 2},
                    ],
                    en: [
                        {title: "No", value: 0},
                        {title: "needs improvement", value: 1},
                        {title: "good", value: 2},
                    ],
                    },
                satisfactionEmojis: ['☹️', '😐', '😍'],
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