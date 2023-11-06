<template>
    <v-container >
        <v-card>
            <p>
                <v-autocomplete
                        v-model="selectedDate"
                        :items="dateArr"
                        label="Выбрать дату"
                        item-value="desc"
                        item-text="title"
                ></v-autocomplete>
            </p>
            <v-list lines="one">
                <v-list-item
                        v-for="(uans, n) in descArr"
                        :key="n"
                        :title="uans.authorName"
                        :subtitle="JSON.parse(uans.answer)[15]+ '; ' + JSON.parse(uans.answer)[16]"
                ></v-list-item>
            </v-list>
        </v-card>

        <v-card>
            <Radar :data="radarDta" :options="radarOptions" />
        </v-card>
    </v-container>
</template>

<script>
    import {
        Chart as ChartJS,
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    } from 'chart.js';
    import { Radar } from 'vue-chartjs';
    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );
    export default {
        name: "CriteriaGraph",
        props: ['allUserAnswers'],
        components: {Radar},

        data(){
            return {
                selectedDate : null,

                radarOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'left'
                        },
                        datalabels: {
                            color: function(context) {
                                return 'green';
                            },
                        },
                    },
                    scales: {
                        r: {
                            pointLabels: {
                                callback: function(label){
                                    return label.length > 20? label.substring(0, 20) + '...': label;
                                },
                            }
                        }
                    }
                },
            }
        },
        computed: {

            dateArr() {
                let dataSet = [];
                this.allUserAnswers.forEach(ans => {
                    if (!dataSet.includes(ans.formatedDate)) {
                        dataSet.push(ans.formatedDate);
                    }
                });
                return dataSet;
            },
            descArr() {
                let dataSet = [];
                this.allUserAnswers.forEach(ans => {
                    if(this.selectedDate === null){
                        dataSet.push(ans)
                    }else if(this.selectedDate === ans.formatedDate){
                        dataSet.push(ans)
                    }
                });
                return dataSet;
            },
            radarDta() {
                let datasets = [];
                this.allUserAnswers.forEach(ans => {

                    if(this.selectedDate === null){

                        const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
                        const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
                        const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue

                        datasets.push({
                            label: ans.authorName,
                            backgroundColor: `rgba(${r},${g},${b},0.2)`,
                            borderColor: `rgba(${r},${g},${b},1)`,
                            pointBackgroundColor: `rgba(${r},${g},${b},1)`,
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: `rgba(${r},${g},${b},1)`,
                            data: JSON.parse(ans.answer)?.slice(0,15)
                        })

                    }else if(ans.formatedDate === this.selectedDate){

                        const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
                        const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
                        const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue

                        datasets.push({
                            label: ans.authorName,
                            backgroundColor: `rgba(${r},${g},${b},0.2)`,
                            borderColor: `rgba(${r},${g},${b},1)`,
                            pointBackgroundColor: `rgba(${r},${g},${b},1)`,
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: `rgba(${r},${g},${b},1)`,
                            data: JSON.parse(ans.answer)?.slice(0,15)
                        })
                    }


                });

                let labels = [
                    'Учитель организует классное пространство и оборудование для разных форм работы, для поддержки активности и свободного передвижения во время урока',
                    'Климат в классе свидетельствует о взаимной вежливости и уважении (учитель - ученик/ученик - ученик). Ученики получают поддержку как в вербальной, так и невербальной форме.',
                    'Учитель минимизирует время ожидания учеников между заданиями',
                    'частая смена задач обеспечивает концентрацию внимания и сосредоточенность на задании',
                    'Поведение учеников и качество их учебной работы свидетельствуют о том, что им понятны цели обучения и ожидаемые результаты урока.',
                    'В ходе урока учебная деятельность учеников эффективно отслеживается, неприемлемое поведение останавливается.',
                    'Урок учителя разработан самостоятельно / совместно с коллегами / в рамках исследования урока (LS) / в рамках исследования практики (AR) / по авторской программе / по авторской методике',
                    'Структура плана урока отражает логическую взаимосвязь между этапами урока. ',
                    'Учебный материал отражает взаимосвязь темы с другими темами и разделами учебной программы, преемственность и непрерывность ее изучения, межпредметные связи.',
                    'Учитель обсуждает с учащимися цели обучения, вовлекает в осмысление целей, логики и результатов урока. ',
                    'Выбранные формы работы, повышают эффективность учебной деятельности. Учитель использует ресурсы, направленные на удовлетворение потребностей / развитие способностей учащихся / исследовательских навыков.',
                    'Ученики имеют возможность самостоятельно практиковаться в изучаемых понятиях и учениях, применяются различные виды дифференциации (персонализация, индивидуализация). ',
                    'Учитель обеспечивает всех учеников своевременной обратной связью. ',
                    'Краткий отзыв о наблюдении урока',
                    'Краткий отзыв о продвижении учителя к достижению цели профессионального развития'
                ];

                return {labels: labels, datasets: datasets};
            }
        }
    }
</script>

<style scoped>

</style>