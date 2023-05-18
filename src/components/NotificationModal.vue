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
                                «Назарбаев Зияткерлік мектептері» ДББҰ 2023-2024 оқу жылынан бастап Назарбаев Зияткерлік мектептерінің 7-сыныбында білім алу үшін «Өркен» білім беру грантын тағайындауға үміткерлерді конкурстық іріктеуге қатысу үшін құжаттарды қабылдаудың басталғаны туралы хабарлайды.

                                <p style="font-weight: bold">Құжаттарды қабылдау 2022 жылдың 1 желтоқсаннан 2023 жылдың 10 қаңтарына дейін жалғасады</p>

                                Қабылдау кабинетінің жұмыс уақыты (бұл үшін сізге мектепке баруға <a href="https://outlook.office365.com/owa/calendar/Bookings973113@nis.edu.kz/bookings/s/j_VHU0k6VEujQ1xASVgGrw2">тапсырыс</a> беруіңіз қажет):

                                <p style="font-weight: bold">Дүйсенбі - жұма 9.00-ден 18.00-ге дейін</p>

                                <p style="font-weight: bold">Сенбі күні сағат 9.00-ден 13.00-ге дейін</p>

                                <p style="font-weight: bold">Түскі үзіліс 12.00-13.00</p>

                                <p style="font-weight: bold">Мереке күндері: 2022 жылдың 16, 31 желтоқсаны. 2023 жылдың 1, 2, 7 қаңтары.</p>

                                <p style="font-weight: bold">Демалыс күні: 2022 жылғы 17 желтоқсан.</p>

                                <p style="font-weight: bold">Кешенді тестілеу 2023 жылдың 2-3 наурызында өткізіледі.</p>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <button class="btn_click-me" @click="this.$emit('close')">Таныстым</button>
                            <a class="btn_click-me" style="text-decoration: none;" href="https://outlook.office365.com/owa/calendar/Bookings973113@nis.edu.kz/bookings/s/j_VHU0k6VEujQ1xASVgGrw2">Мектепке баруға тапсырыс беру</a>
                        </div>

                    </div>
                    <div v-show="tab[1]" class="tabcontent">

                        <div style="padding: 40px 70px; border-bottom: 1px solid #D4D3D4;max-width: 800px;">
                            <p style="text-align: center; font-weight: bold; font-size: 22px; padding-bottom: 10px;">Уважаемые родители и претенденты!</p>
                            <div class="msg_txt">
                                АОО «Назарбаев Интеллектуальные школы» объявляет прием документов для участия в конкурсном отборе претендентов на присуждение образовательного гранта «Өркен» для обучения в 7 классах Назарбаев Интеллектуальных школ с 2023–2024 учебного года.

                                <p style="font-weight: bold">Прием документов с 1 декабря 2022 года по 10 января 2023 года</p>

                                График работы приемной комиссии (для этого Вам надо  <a href="https://outlook.office365.com/owa/calendar/Bookings973113@nis.edu.kz/bookings/s/j_VHU0k6VEujQ1xASVgGrw2">забронировать</a> посещение школы):

                                <p style="font-weight: bold">Понедельник - пятница с 9.00 до 18.00 часов</p>

                                <p style="font-weight: bold"> В субботу с 9.00 до 13.00 часов</p>

                                <p style="font-weight: bold">Обеденный перерыв с 12.00-13.00 часов</p>

                                <p style="font-weight: bold">Праздничные дни: 16, 31 декабря 2022 года. 1, 2, 7 января 2023 года.</p>

                                <p style="font-weight: bold">Выходной день: 17 декабря 2022 года.</p>

                                <p style="font-weight: bold">Комплексные тестирования проводятся 2-3 марта 2023 года.</p>
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <button class="btn_click-me" @click="this.$emit('close')">Отменить</button>
                            <a class="btn_click-me" style="text-decoration: none;" href="https://outlook.office365.com/owa/calendar/Bookings973113@nis.edu.kz/bookings/s/j_VHU0k6VEujQ1xASVgGrw2">Забронировать посещение школы</a>
                        </div>

                    </div>
                </div>

            </div>
        </teleport>
    </div>

</template>

<script>
    export default {
        name: 'NotificationModal',
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