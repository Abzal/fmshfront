<template>
    <div class="body_div">
        <header-slot></header-slot>
        <hr />
        <div class="content">
            <router-view/>
        </div>
        <footer-slot class="footer"></footer-slot>
    </div>
</template>

<script>

import HeaderSlot from "@/components/Header";
import FooterSlot from "@/components/Footer";
import { mapGetters, mapActions } from "vuex";
import {AUTO_LOGIN_ACTION, GET_USER_DATA_GETTER} from "@/store/storeconstants";
export default {
  name: 'MainLayout',
    components: {FooterSlot, HeaderSlot},
    data(){
    return {

    }
  },

    created() {
        this.autoAuth();
    },
    methods: {
        ...mapActions("auth",{
            autoAuth: AUTO_LOGIN_ACTION
        })
    }

}
</script>
<style scoped>
    .body_div {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh; /* Ensure the page takes at least the height of the viewport */
    }
    .content {
        flex-grow: 1; /* Allow the main content to grow and push the footer down */
    }

    .footer {
        background-color: #333; /* Adjust the background color as needed */
        color: #fff; /* Adjust the text color as needed */
        padding: 10px;
        text-align: center;
    }
</style>
