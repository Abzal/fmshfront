<template>
    <section class="places">
        <div class="wrapper__under">
            <div class="places__cards">
                <figure class="places__card places__card_size_sm places__card_style_one">
                    <Icon name="library-pic" alt="news1" class="places__card_pic" />
                    <figcaption class="places__card_title">
                        Библиотека
                    </figcaption>
                    <a href="#!" class="places__card_link"></a>
                </figure>
                <figure class="places__card places__card_size_sm places__card_style_two">
                    <Icon name="museam-pic" alt="news1" class="places__card_pic" />
                    <figcaption class="places__card_title">
                        Методический кабинет
                    </figcaption>
                    <a href="#!" class="places__card_link"></a>
                </figure>
                <figure class="places__card places__card_size_sm places__card_style_one">
                    <Icon name="business-pic" alt="news1" class="places__card_pic" />
                    <figcaption class="places__card_title">
                        Школьная жизнь
                    </figcaption>
                    <a href="#!" class="places__card_link"></a>
                </figure>
                <figure class="places__card places__card_size_sm places__card_style_two">
                    <Icon name="almuni-pic" alt="news1" class="places__card_pic" />
                    <figcaption class="places__card_title">
                        Выпускники
                    </figcaption>
                    <a href="#!" class="places__card_link"></a>
                </figure>
                <figure class="places__card places__card_size_sm places__card_style_one">
                    <Icon name="research-pic" alt="news1" class="places__card_pic" />
                    <figcaption class="places__card_title">
                        Проекты
                    </figcaption>
                    <a href="#!" class="places__card_link"></a>
                </figure>
                <figure class="places__card places__card_size_sm places__card_style_two">
                    <Icon name="sport-pic" alt="news1" class="places__card_pic" />
                    <figcaption class="places__card_title">
                        Спорт
                    </figcaption>
                    <a href="#!" class="places__card_link"></a>
                </figure>

            </div>
        </div>
    </section>
</template>

<script>
    import Icon from "@/components/Icon";
    export default {
        name: "GridBox",
        components: {Icon}
    }
</script>

<style scoped>
    .places__cards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0px;
    }
    .news__card_size_lg{
        grid-column: span 3;
    }
    .places__card_size_sm{

    }
    .places__card_pic{
        height: 400px;
        width: 400px;
        object-fit: cover;
        transition: .15s all;
    }
    .places__card{
        position: relative;
        overflow: hidden;
    }
    .places__card::after{
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        background-color: rgba(21, 24, 36, 0.20);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .places__card:hover .places__card_pic{
        transform: scale(1.05);
    }
    .places__card_title{
        line-height: 60px;
        color: #FFFFFF;
        position: absolute;
        bottom: 10px;
        left: 15px;
        right: 15px;
        z-index: 3;
        background-color: #222222;
        text-align: center;
        font-size: 1.2rem;

    }

    .places__card_link{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
    }
    .places__card_style_one:hover .places__card_title{
        background-color: #E5007D;
    }

    .places__card_style_two:hover .places__card_title{
        background-color: #8dc041;
    }
</style>
