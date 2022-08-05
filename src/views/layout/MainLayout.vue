<template>
    <div>
        <header-slot></header-slot>
        <hr />
        <div>
            <router-view/>
        </div>
        <footer-slot></footer-slot>
    </div>
</template>

<script>

import HeaderSlot from "@/components/Header";
import FooterSlot from "@/components/Footer";
export default {
  name: 'MainLayout',
    components: {FooterSlot, HeaderSlot},
    data(){
    return {

    }

  },
}
</script>
<style scoped>

</style>
