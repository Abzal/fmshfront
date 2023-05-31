<template>
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img class="img-fluid rounded mb-5 mb-lg-0" :src="require('@/assets/img/students/feedback.png')" alt="">
                </div>
                <div class="col-lg-7" v-if="this.$i18n.locale === 'ru'">
                    <p class="section-title pr-5"><span class="pr-2">О совете лидеров</span></p>
                    <p>Организация ученического самоуправления - это форма участия учащихся Назарбаев Интеллектуальной школы в самоуправлении, где члены организации самоуправления совместно с руководством интеллектуальной школы и координаторами работают над решением вопросов организации общественных работ.</p>
                    <p>Основная цель организации ученического самоуправления - реализация прав учащихся в управлении школой, воспитание личности с организаторскими качествами, интеллектуального, нравственного, здорового гражданина мира, способного самостоятельно принимать решения, ответственного и дисциплинированного, имеющего активную жизненную позицию и обладающего современными образовательными навыками.</p>
                </div>
                <div class="col-lg-7" v-if="this.$i18n.locale === 'kz'">
                    <p class="section-title pr-5"><span class="pr-2">Көшбасшылар кеңесі туралы</span></p>
                    <p>Студенттердің өзін-өзі басқару ұйымы – Назарбаев Зияткерлік мектебі оқушыларының өзін-өзі басқаруға қатысуының бір түрі, мұнда өзін-өзі басқару ұйымының мүшелері зияткерлік мектеп басшылығымен және үйлестірушілермен бірлесіп ұйымдастыру мәселелерін шешуге жұмыс істейді. қоғамдық жұмыстар.</p>
                    <p>Оқушылардың өзін-өзі басқаруын ұйымдастырудың негізгі мақсаты – мектепті басқаруда оқушылардың құқықтарын жүзеге асыру, ұйымдастырушылық қасиетке ие, интеллектуалды, адамгершілігі мол, дүние жүзінің дені сау, өз бетінше шешім қабылдауға қабілетті, жауапкершілігі мол азаматты тәрбиелеу. және тәртіпті, белсенді өмірлік ұстанымы бар және заманауи білім беру дағдыларына ие.</p>
                </div>
                <div class="col-lg-7" v-if="this.$i18n.locale === 'en'">
                    <p class="section-title pr-5"><span class="pr-2">About the council of leaders</span></p>
                    <p>The organization of student self-government is a form of participation of students of the Nazarbayev Intellectual School in self-government, where members of the self-government organization, together with the leadership of the intellectual school and coordinators, work to resolve issues of organizing public works.</p>
                    <p>The main goal of the organization of student self-government is the realization of the rights of students in school management, the education of a person with organizational qualities, an intellectual, moral, healthy citizen of the world, capable of making decisions independently, responsible and disciplined, having an active life position and possessing modern educational skills.</p>
                </div>
            </div>
            <div class="row align-items-center">

                <div class="col-lg-7" v-if="this.$i18n.locale === 'ru'">
                    <p class="section-title pr-5"><span class="pr-2">О кружках</span></p>
                    <p>Дополнительное образование учащихся Интеллектуальных школ направлено на формирование и развитие творческих способностей, удовлетворение их индивидуальных потребностей в интеллектуальном, нравственном и физическом совершенствовании, формирование культуры здорового и безопасного образа жизни, укрепление здоровья, а также на организацию их свободного времени.</p>
                    <p>Дополнительное образование помогает ребенку адаптироваться к жизни в современном обществе, обеспечивает профессиональную ориентацию детей, а также выявление и поддержку детей, проявивших исключительные способности.</p>
                    <p>Система дополнительного образования НИШ представлена широким спектром форм активизации и взаимодействия учащихся, но все они влияют на формирование и становление личности.</p>
                </div>
                <div class="col-lg-7" v-if="this.$i18n.locale === 'kz'">
                    <p class="section-title pr-5"><span class="pr-2">Үйірмелер туралы</span></p>
                    <p>Зияткерлік мектептер оқушыларының қосымша білім беруі шығармашылық қабілеттерін қалыптастыруға және дамытуға, олардың зияткерлік, моральдық және физикалық жетілдіруге жеке қажеттіліктерін қанағаттандыруға, салауатты және қауіпсіз өмір салты мәдениетін қалыптастыруға, денсаулықты нығайтуға, сондай-ақ олардың бос уақытын ұйымдастыру.</p>
                    <p>Қосымша білім беру балаға қазіргі қоғамдағы өмірге бейімделуге көмектеседі, балаларға кәсіби бағдар береді, сонымен қатар ерекше қабілеттерін көрсеткен балаларды анықтау және қолдау көрсетеді.</p>
                    <p>Қосымша білім берудің НЗМ жүйесі студенттерді белсендіру және өзара әрекеттесу формаларының кең спектрімен ұсынылған, бірақ олардың барлығы тұлғаның қалыптасуы мен дамуына әсер етеді.</p>
                </div>
                <div class="col-lg-7" v-if="this.$i18n.locale === 'en'">
                    <p class="section-title pr-5"><span class="pr-2">About mugs</span></p>
                    <p>Additional education of students of the Intellectual Schools is aimed at the formation and development of creative abilities, satisfaction of their individual needs for intellectual, moral and physical improvement, the formation of a culture of a healthy and safe lifestyle, health promotion, as well as the organization of their free time.</p>
                    <p>Additional education helps the child adapt to life in modern society, provides professional guidance for children, as well as the identification and support of children who have shown exceptional abilities.</p>
                    <p>The NIS system of additional education is represented by a wide range of forms of activation and interaction of students, but all of them influence the formation and development of a personality.</p>
                </div>
                <div class="col-lg-5">
                    <img class="img-fluid rounded mb-5 mb-lg-0" :src="require('@/assets/img/students/brainstorming.png')" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StudentsView"
    }
</script>

<style scoped>

</style>