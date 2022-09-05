<template>
    <div class="wrapper">

        <div class="top__img" style="margin-top: -5px">
            <Icon name="main-school" alt="image" style="margin-bottom: 20px;" />
            <div class="content-head">
                <h1>Миссия школы</h1>
            </div>
            <div class="content-body">
                <p>Способствовать повышению качества Казахстанского образования через воспитание интеллектуального и физически развитого гражданина мира с высокими моральными ценностями</p>
            </div>
        </div>

        <about-school2></about-school2>
        <last-news></last-news>
        <grid-box style="margin-bottom: 40px"></grid-box>
    </div>

</template>

<script>

import Icon from "@/components/Icon";
import GridBox from "@/components/GridBox";
import NewsBlock from "@/components/news/NewsBlock";
import LastNews from "@/components/news/LastNews";
import AboutSchool from "@/components/AboutSchool";
import AboutSchool2 from "@/components/AboutSchool2";
export default {
  name: 'HomeView',
    components: {AboutSchool2, AboutSchool, LastNews, NewsBlock, GridBox, Icon},
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
        max-width: 1200px;
        max-height: 600px;
        object-position: 10% 10%;
        object-fit: cover;
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
</style>
