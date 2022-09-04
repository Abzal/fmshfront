<template>
    <!-- About Start -->
    <div class="container-fluid py-5">
        <div class="container py-2">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">О школе</span></p>
            </div>
            <div class="row">
                <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100" :src="require('@/assets/img/about/about.jpg')" style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="position-relative mb-4">
                        <!--<h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">О школе</h6>-->
                        <h1 class="display-4">Лучшая школа для ваших детей</h1>
                    </div>
                    <p>Назарбаев Интеллектуальная школа физико-математического направления г. Шымкент открылась 16 февраля 2013 года. В торжественном мероприятии принял участие Аким Южно-Казахстанской области Аскар Мырзахметов.</p>
                    <p>Новая школа в одном из крупнейших регионов Казахстана стала девятой в семействе Назарбаев Интеллектуальных школ и призвана обеспечить качественный рост образования, внедрение инноваций в учебный процесс, повышение квалификации педагогических кадров. Для этого здесь созданы все условия.<a href="#!" class="text-decoration-none"> Узнать больше....</a></p>
                    <div class="row pt-3 mx-0">
                        <div class="col-3 px-0" >
                            <div class="bg-success text-center p-4 h-100">
                                <h1 class="text-white" data-toggle="counter-up">698</h1>
                                <h6 class="text-uppercase text-white">Выпускники<span class="d-block">2015-2021</span></h6>
                            </div>
                        </div>
                        <div class="col-3 px-0">
                            <div class="bg-primary text-center p-4 h-100">
                                <h1 class="text-white" data-toggle="counter-up">63</h1>
                                <h6 class="text-uppercase text-white">Поступили<span class="d-block">В Зарубежный ВУЗ</span></h6>
                            </div>
                        </div>
                        <div class="col-3 px-0">
                            <div class="bg-secondary text-center p-4 h-100">
                                <h1 class="text-white" data-toggle="counter-up">429</h1>
                                <h6 class="text-uppercase text-white">Поступили<span class="d-block">В Казахстанский ВУЗ</span></h6>
                            </div>
                        </div>
                        <div class="col-3 px-0">
                            <div class="bg-warning text-center p-4 h-100">
                                <h1 class="text-white" data-toggle="counter-up">206</h1>
                                <h6 class="text-uppercase text-white">Поступили<span class="d-block">В Назарбаев Университет</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->
</template>

<script>
    export default {
        name: "AboutSchool2"
    }
</script>

<style scoped>

</style>