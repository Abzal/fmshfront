<template>
    <div class="wrapper">

        <!-- Blog Start -->
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="text-center pb-2">
                    <p class="section-title px-5"><span class="px-2">Сертифицированные тренеры</span></p>
                    <h1 class="mb-4">СПИСОК ТРЕНЕРОВ</h1>
                </div>
                <div class="row pb-3">
                    <template v-for="item in trainerData">
                        <div class="col-lg-4 mb-4">
                            <div class="card border-0 shadow-sm mb-2">
                                <img class="card-img-top mb-2"  :src="require('@/assets/img/'+item.image)" alt="">
                                <div class="card-body bg-light text-center p-4">
                                    <h4 class="">{{item.name[this.$i18n.locale]}}</h4>
                                    <div class="d-flex justify-content-center mb-3">
                                        <small class="mr-3"><i class="fa fa-user text-primary"></i>{{item.level[this.$i18n.locale]}}</small>
                                    </div>
                                    <p>{{item.course[this.$i18n.locale]}}</p>
                                    <a href="" class="btn btn-primary px-4 mx-auto my-2">Узнать больше</a>
                                </div>
                            </div>
                        </div>
                    </template>


                    <!--                    <div class="col-md-12 mb-4">
                                            <nav aria-label="Page navigation">
                                                <ul class="pagination justify-content-center mb-0">
                                                    <li class="page-item disabled">
                                                        <a class="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true">&laquo;</span>
                                                            <span class="sr-only">Previous</span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#" aria-label="Next">
                                                            <span aria-hidden="true">&raquo;</span>
                                                            <span class="sr-only">Next</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>-->
                </div>
            </div>
        </div>
        <!-- Blog End -->

    </div>
</template>

<script>
    import {mapState, mapMutations, mapGetters} from 'vuex'
    export default {
        name: "TrainersView",
        computed:{
            ...mapGetters({
                trainerData: 'trainer/getTrainers',
            }),
        },
    }
</script>

<style scoped>

</style>