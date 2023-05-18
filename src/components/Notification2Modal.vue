<template>
    <div class="root">
        <teleport to="body">
            <div class="modal">

                <div class="tab_container">
                    <div class="tab">
                        <button class="tablinks" :style="tab[0]?'background-color: #FFFFFF; color: #224084; border-bottom: none;':''" @click="onTabClick(0)">Қазақша</button>
                        <button class="tablinks" :style="tab[1]?'background-color: #FFFFFF; color: #224084; border-bottom: none;':''" @click="onTabClick(1)">Русский</button>
                    </div>
                    <div v-show="tab[0]" class="tabcontent">

                        <div style="padding: 40px 70px; border-bottom: 1px solid #D4D3D4;max-width: 800px;">
                            <p style="text-align: center; font-weight: bold; font-size: 22px; padding-bottom: 10px;">Qūrmettı ata-analar men talapkerler!</p>
                            <div class="msg_txt">
                                <p>
                                   «Назарбаев Зияткерлік мектептері» дербес білім беру ұйымы Назарбаев Зияткерлік мектептерінің 7-сыныптарына оқушыларды конкурстық іріктеудің байқау тестілеуін (бұдан әрі – байқау тестілеуі) өткізетінін хабарлайды.
                                </p>
                                <p>
                                   Назарбаев Зияткерлік мектептерінде және Астана қ. Халықаралық мектепте өткізілетін байқау тестілеуі компьютерлік форматта жүргізіледі. Әр мектеп бойынша шектеулі орын саны бөлінеді. Байқау тестілеуі 7-сыныптарға конкурстық іріктеудің барлық тест бөлімін қамтиды.
                                </p>
                                <p>
                                    Бір байқау тестілеуіне қатысу бағасы 12 000 теңгені құрайды. <a href="https://mailnisedu-my.sharepoint.com/:w:/g/personal/abzal_amantay_fmsh_nis_edu_kz/ERv1ZrC7459KuWc4-RBd2RQBCdoYGmwMV0mpohjziTPseg?e=tlLcOY">Толығырак білу...</a>
                                </p>
                                <p>
                                    Зияткерлік мектептердің 7-сыныптарына оқушыларды конкурстық іріктеуге қатысуға құжаттарды тапсыру үшін сайтта онлайн-брондау сервисі арқылы талон алу мүмкіндігі болмаған жағдайда Зияткерлік мектептердің қабылдау комиссияларына келіп, кезек тәртібімен құжат тапсыруға болады.
                                </p>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <button class="btn_click-me" @click="this.$emit('close')">Таныстым</button>
                            <a class="btn_click-me" style="text-decoration: none;" href="https://trialtest.nis.edu.kz/">Келесі байқау тестілеуіне тіркелі</a>
                        </div>

                    </div>
                    <div v-show="tab[1]" class="tabcontent">

                        <div style="padding: 40px 70px; border-bottom: 1px solid #D4D3D4;max-width: 800px;">
                            <p style="text-align: center; font-weight: bold; font-size: 22px; padding-bottom: 10px;">Уважаемые родители и претенденты!</p>
                            <div class="msg_txt">
                                <p>
                                    Автономная организация образования «Назарбаев Интеллектуальные школы» объявляет о проведении пробного тестирования конкурсного отбора учащихся в 7 классы Назарбаев Интеллектуальных школ  (далее – пробное тестирование).
                                </p>
                                <p>
                                    Пробное тестирование проводится в формате компьютерного теста на базе Назарбаев Интеллектуальных школ и Международной школы г.Астана с ограниченным количеством мест по каждой школе.
                                </p>
                                <p>
                                    Пробное тестирование включает в себя все разделы тестирования конкурсного отбора учащихся в 7 классы.
                                </p>
                                <p>
                                    Стоимость участия в 1 пробном тестировании составляет 12 000 тенге. <a href="https://mailnisedu-my.sharepoint.com/:w:/g/personal/abzal_amantay_fmsh_nis_edu_kz/EeItxzKvl25JtWAz39uEMoYBd-QlYrmp0ifDy0WcjO6Cxw?e=PmFrYx">Узнать больше...</a>
                                </p>
                                <p>
                                    В случае отсутствия возможности получения талона через сервис онлайн-бронирования на сайте для подачи документов на участие в конкурсном отборе учащихся в 7 классы Интеллектуальных школ просим обращаться в приемные комиссии Интеллектуальных школ в порядке живой очереди.
                                </p>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <button class="btn_click-me" @click="this.$emit('close')">Отменить</button>
                            <a class="btn_click-me" style="text-decoration: none;" href="https://outlook.office365.com/owa/calendar/Bookings973113@nis.edu.kz/bookings/s/j_VHU0k6VEujQ1xASVgGrw2">Забронировать место на пробное тестирование</a>
                        </div>

                    </div>
                </div>

            </div>
        </teleport>
    </div>

</template>

<script>
    export default {
        name: 'Notification2Modal',
        props:{title: String,msg: String},
        data(){
            return {
                tab:[true,false],
            }
        },
        methods:{
            onTabClick(id){

                for(let i = 0;i<this.tab.length;i++){
                    if(id === i)
                        this.tab[i] = true;
                    else this.tab[i] = false;
                }
            }
        }
    }
</script>
<style scoped>
    .root{
        position: relative;
        max-width: 800px;
    }
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal > div {
        background-color: #ffffff;
        padding: 24px;
    }
    .btn_click-me{
        width: 132px;
        height: 49px;
        padding: 15px 24px;
        background: #224084;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #FAFBFE;
        border: none;
        margin: 24px 10px;
    }
    .btn_click-me:hover{
        background-color: #174ec9;
    }
    .msg_txt{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #3F3F3F;
    }
    .msg_txt a{
        text-decoration: none;

    }
    .msg_txt p{
        padding: 5px 0;
    }
    .tab {
        overflow: hidden;
        border-top: 1px solid #ccc;
        /*background-color: #f1f1f1;*/

    }

    /* Style the buttons inside the tab */
    .tab button {
        background-color: inherit;
        float: left;
        font-weight: 500;
        font-size: 14px;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        border: 1px solid #ccc;
        border-top: none;
    }

    /* Change background color of buttons on hover */
    .tab button:hover {
        background-color: #ddd;
    }

    .btn_tab__active{
        background-color: #ccc;
    }
    /* Style the tab content */
    .tabcontent {
        padding: 6px 12px;
        /*border: 1px solid #ccc;*/
        border-top: none;
    }
</style>