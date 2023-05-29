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

        <!--<video-transliasia></video-transliasia>-->

        <!--<notification2-modal v-if="showNotification" @close="showNotification=false"></notification2-modal>-->

        <about-school2></about-school2>
        <last-news></last-news>
        <!--<last-activities></last-activities>-->
        <!--Vidieos start-->
        <div class="videos">
            <div class="videos__wrapper">
                <div class="video__item">

                    <iframe class="video__element" src="https://www.youtube.com/embed/1z-TnLOb8e4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
import LastActivities from "@/components/activities/LastActivities";
import NotificationModal from "@/components/NotificationModal";
import Notification2Modal from "@/components/Notification2Modal";
import VideoTransliasia from "@/components/VideoTransliasia";
export default {
  name: 'HomeView',
    components: {
        VideoTransliasia,
        Notification2Modal,
        NotificationModal, LastActivities, AboutSchool2, AboutSchool, LastNews, GridBox, Icon},
    data(){
      return{
          showNotification: false,
          showNotification2: false,

      }
    },
    methods:{
        convert(){
            let abcLat = ['ı','I','u','U','k','K','e','Е','n','N','g','G','ş','Ş','z','Z','h','H','f','F','y','Y','v','V','a','A','p','P','r','R','o','O','l','L','d','D','j','J','s','S','m','M','i','I','t','T','b','B','ä','Ä','ñ','ğ','Ğ','ü','Ü','ū','Ū','q','Q','ö','Ö','h','H',' '];
            let abcKer = ['і','І','у','У','к','К','е','Е','н','Н','г','Г','ш','Ш','з','З','х','Х','ф','Ф','ы','Ы','в','В','а','А','п','П','р','Р','о','О','л','Л','д','Д','ж','Ж','с','С','м','М','и','И','т','Т','б','Б','ә','Ә','ң','ғ','Ғ','ү','Ү','ұ','Ұ','қ','Қ','ө','Ө','һ','Н',' '];
            let txt = 'Şımkenttik muğalim Ulıbrïtanïya mektebinde täjirïbe almastı';

            let nTxt = '';
            for (let i = 0; i < txt.length; i++){
                for (let j = 0; j < abcLat.length; j++){
                    if (abcLat[j] == txt.charAt(i)){
                        nTxt = nTxt + abcKer[j];
                        break;
                    }

                }
            }
            console.log(nTxt)
        }
    },
    created() {
      setTimeout(()=>{this.showNotification=true},2000);
      this.convert();
    }
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
