<template>
    <div class="wrapper">

        <div class="info_container">
            <img style="height: 400px; position: relative; transform: rotate(30deg)" :src="require('@/assets/img/live/creative.png')">
            <div style="text-align: center; vertical-align: center; display: flex; align-items: center;">
                <div>
                    <p style="font-size: 30px; font-weight: 600">
                        {{ $t('live.fest') }}
                    </p>
                    <br />
                    <p style="font-size: 35px; font-weight: 600">
                        {{ $t('live.creative') }}
                    </p>
                    <br />
                    <p style="font-size: 25px; font-weight: 400; font-style: italic;">
                        {{ $t('live.until') }}
                    </p>
                    <br />
                    <p>
                        <span id="demo1" style="font-size:30px; font-weight: 600;"></span>
                    </p>
                </div>
            </div>
        </div>

        <br />
        <iframe width="100%" height="500px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=yVLbOR7jwkKAg3U1W3KN41FX0uOkzjBDhmp9adsLIPZUN01RQTdLMkU3U0w2Vjc0VE9aNUNGVUNGVC4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
    </div>
</template>

<script>
    export default {
        name: "CreativeIdeas",
        created() {
            this.getDeadLine()
        },
        methods:{
            getDeadLine(){
                var countDownDate = new Date("Mar 31, 2023 15:37:25").getTime();

                var countdownfunction = setInterval(function() {

                    // Get todays date and time
                    var now = new Date().getTime();

                    // Find the distance between now an the count down date
                    var distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    // Output the result in an element with id="demo"

                    document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
                        + minutes + "m " + seconds + "s ";

                    // If the count down is over, write some text
                    if (distance < 0) {
                        clearInterval(countdownfunction);
                        document.getElementById("demo1").innerHTML = "EXPIRED";
                    }
                }, 1000);
            }
        }
    }
</script>

<style scoped>
    .info_container {  display: grid;
        grid-template-columns: 400px 1fr;
        grid-template-rows: 400px;
        grid-auto-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: column dense;
        grid-template-areas:
                ". .";
    }

</style>