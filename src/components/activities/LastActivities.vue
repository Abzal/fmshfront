<template>

    <!-- Blog Start -->
    <div class="container-fluid pt-2">
        <div class="container">
            <div class="text-center pb-2">
                <p class="section-title px-5"><span class="px-2">{{$t('live.activities')}}</span></p>
                <h1 class="mb-4">{{$t('live.last-activities')}}</h1>
            </div>

            <div class="row pb-3">
                <div v-for="item in news" class="col-lg-4 mb-4" >
                    <div class="card border-0 shadow-sm mb-2">
                        <img class="card-img-top mb-2"  :src="require('@/assets'+item[this.$i18n.locale].image)" alt="">
                        <div class="card-body bg-light text-center p-4">
                            <h4 class="">{{item[this.$i18n.locale].title}}</h4>
                            <p>{{item[this.$i18n.locale].description.substring(0,153)}}...</p>
                            <router-link :to="item[this.$i18n.locale].url" class="btn btn-primary px-4 mx-auto my-2">{{item[this.$i18n.locale].urlText}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog End -->

</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "LastActivities",
        computed: {
            ...mapGetters({
                news: 'live/getActivities',
            }),
        },
    }
</script>

<style scoped>

</style>