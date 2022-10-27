<template>
    <div class="wrapper" style="padding-bottom: 100px;">

        <!-- Team Start -->
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="text-center pb-2">
                    <p class="section-title px-5"><span class="px-2">{{ $t('main-page.meet-teachers') }}</span></p>
                </div>

                <template v-for="dta in teamsData">
                    <template v-if="this.$route.params.type === dta.type || 'all' === this.$route.params.type">
                        <div class="text-center pb-2">
                            <h1 class="mb-4">{{dta.description[this.$i18n.locale]}}</h1>
                        </div>
                        <div class="row">
                            <template v-for="(item, idx) in dta.team">
                                <div class="col-md-6 col-lg-3 text-center team mb-5">
                                    <div class="position-relative overflow-hidden mb-4" style="border-radius: 100%;">
                                        <img class="img-fluid w-100" :src="require('@/assets/img/'+item.image)" alt="" >
                                        <div class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                            <a class="btn btn-outline-light text-center mr-2 px-0" style="width: 38px; height: 38px;"
                                               href="#"> <fawesome icon="fab fa-twitter" /> </a>
                                            <a class="btn btn-outline-light text-center mr-2 px-0" style="width: 38px; height: 38px;"
                                               href="#"> <fawesome icon="fab fa-facebook-f" /> </a>
                                            <a class="btn btn-outline-light text-center px-0" style="width: 38px; height: 38px;"
                                               href="#"> <fawesome icon="fab fa-instagram" /> </a>
                                        </div>
                                    </div>
                                    <h4 style="font-size: 1.3rem; font-weight: 500;">{{item.name[this.$i18n.locale]}}</h4>
                                    <i>{{item.post[this.$i18n.locale]}}</i>
                                </div>
                            </template>
                        </div>
                    </template>
                </template>
            </div>
        </div>
        <!-- Team End -->
    </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
    name: 'TeamView',
    computed:{
        ...mapGetters({
            teamsData: 'teams/getTeams',
        }),
    },
}
</script>
<style scoped>

</style>
