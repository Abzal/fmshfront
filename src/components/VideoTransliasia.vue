<template>
    <div>
        <br />
        <br />
        <h1 style="text-align: center; font-size: 3rem;">{{$t('video-trans')}}</h1>
        <br />
        <br />
        <div class="two__layout">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OVhwZpfReho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SS0V9ppMOUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HeDJ4IljN7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z-Oqm441si0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VideoTransliasia"
    }
</script>

<style scoped>
    .two__layout {  display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 15px 15px;
        grid-auto-flow: row;
        grid-template-areas:
                ". .";
    }

</style>