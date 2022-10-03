<template>
    <div class="wrapper_big">
        <div class="top__img">
            <Icon name="main-school" alt="image" style="margin-bottom: 20px;" />
            <div class="content-head">
                <h1>{{$t('main-page.mission')}}</h1>
            </div>
            <div class="content-body">
                <p>{{$t('main-page.mission-description')}}</p>
            </div>
        </div>
    </div>
    <div class="wrapper">


        <about-school2></about-school2>
        <last-news></last-news>
        <!--Vidieos start-->
        <div class="videos">
            <div class="videos__wrapper">
                <div class="video__item">
                    <iframe class="video__element" src="https://www.youtube.com/embed/vtYM2dy22lM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <!--<grid-box style="margin-bottom: 40px"></grid-box>-->
    </div>

</template>

<script>

import Icon from "@/components/Icon";
import GridBox from "@/components/GridBox";
import LastNews from "@/components/news/LastNews";
import AboutSchool from "@/components/AboutSchool";
import AboutSchool2 from "@/components/AboutSchool2";
export default {
  name: 'HomeView',
    components: {AboutSchool2, AboutSchool, LastNews, GridBox, Icon},
}
</script>
<style scoped>
    .top__img {
        position: relative;
        margin: 0 auto;

    }

    .top__img img {
        vertical-align: middle;
        width: 100%;
        max-height: 600px;
        object-position: 10% 10%;
        object-fit: cover;
        margin-top: -15px;
    }

    .top__img .content-head {
        position: absolute;
        bottom: 200px;
        background-color: #8dc041;
        color: #000000;
        width: auto;
        padding: 20px;
        font-weight: 500;
        right: 0;
        font-size: 24px;
    }
    .top__img .content-body{
        position: absolute;
        right: 0;
        bottom: 70px;
        background: #222222;
        color: #f1f1f1;
        width: 50%;
        padding: 20px;
        font-weight: 500;
    }
    .videos{
        width: 100%;
    }
    .videos__wrapper{
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .video__item{
        padding-top: 56%;
    }
    .video__element{
        position: absolute;
        top: -15px;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>
