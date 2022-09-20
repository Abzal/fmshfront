<template>
        <img v-if="'footer-logo' === name" :src="require('@/assets/img/svg/nis-footer-logo.svg')" :alt="alt" />
        <img v-else-if="'header-logo' === name" :src="require('@/assets/img/svg/nis-logo1.svg')" :alt="alt"/>
        <img v-else-if="'main-school' === name"   :src="require('@/assets/img/main-school.jpg')" :alt="alt"/>
        <img v-else-if="'library-pic' === name" :src="require('@/assets/img/library-pic.jpg')" :alt="alt"/>
        <img v-else-if="'museam-pic' === name" :src="require('@/assets/img/museam-pic1.jpg')" :alt="alt"/>
        <img v-else-if="'business-pic' === name" :src="require('@/assets/img/business-pic1.jpg')" :alt="alt"/>
        <img v-else-if="'almuni-pic' === name" :src="require('@/assets/img/almuni.png')" :alt="alt"/>
        <img v-else-if="'research-pic' === name" :src="require('@/assets/img/research-pic.jpg')" :alt="alt"/>
        <img v-else-if="'sport-pic' === name" :src="require('@/assets/img/sport-pic.jpg')" :alt="alt"/>

        <svg v-else-if="name==='pagination-chevron-left'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 5L7.5 10L12.5 15" stroke="#8A8A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg v-else-if="name==='pagination-chevron-right'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="#8A8A8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

</template>

<script>
    export default {
        name: "Icon",
        props:{
            name:{
              type: String,
            },
            alt:{
                type: String,
                default: 'IMAGE'
            }
        }
    }
</script>

<style scoped>

</style>
