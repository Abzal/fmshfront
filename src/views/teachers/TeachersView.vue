<template>
    <!-- Testimonials -->
    <div class="slider-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="image-container">
                        <img class="img-fluid" :src="require('@/assets/img/teachers/testimonials-2-men-talking.svg')" alt="alternative">
                    </div> <!-- end of image-container -->
                </div> <!-- end of col -->
                <div class="col-lg-6">
                    <h2 style="padding-right: 50px; font-size: 2rem;">{{ $t("teachers.best") }}</h2>

                    <!-- Card Slider -->
                    <div class="slider-container">
                        <div class="swiper-container card-slider">
                            <div class="swiper-wrapper">

                                <!-- Slide -->
                                <div class="swiper-slide">
                                    <div class="card">
                                        <img class="card-image" style="object-fit: cover; object-position: 20% 20%;" :src="require('@/assets/img/'+trainerData[this.tIdx].image)" alt="alternative">
                                        <div class="card-body">
                                            <p class="testimonial-text">{{trainerData[this.tIdx].course[this.$i18n.locale]}}</p>
                                            <p class="testimonial-author">{{trainerData[this.tIdx].name[this.$i18n.locale] + ' - "'+ trainerData[this.tIdx].level[this.$i18n.locale] + '"'}}</p>
                                            <br />
                                            <br />
                                            <router-link to="trainers" class="btn btn-info px-4 mx-auto my-2">{{ $t("teachers.all") }}</router-link>
                                        </div>
                                    </div>

                                </div> <!-- end of swiper-slide -->
                                <!-- end of slide -->


                            </div> <!-- end of swiper-wrapper -->

                            <!-- Add Arrows -->
                            <div @click="nextTrainer(1)" class="swiper-button-next"></div>
                            <div @click="nextTrainer(-1)" class="swiper-button-prev"></div>
                            <!-- end of add arrows -->

                        </div> <!-- end of swiper-container -->
                    </div> <!-- end of slider-container -->
                    <!-- end of card slider -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of slider-2 -->
    <!-- end of testimonials -->
</template>

<script>
    import {mapState, mapMutations, mapGetters} from 'vuex'
    export default {
        name: "TeachersView",
        data(){
          return{
              tIdx : Math.floor(Math.random() * 10)
          }
        },
        computed:{
            ...mapGetters({
                 trainerData: 'trainer/getTrainers',
            }),
        },
        methods : {
            nextTrainer(i){
                let t = this.tIdx + i
                if(t < 0)
                    this.tIdx = this.trainerData.length - 1
                else if (t >= this.trainerData.length)
                    this.tIdx = 0
                else this.tIdx = t;
            }
        }

    }
</script>

<style scoped>

</style>