<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer__item">
                <div class="footer__logo">
                    <Icon name="footer-logo" alt="NIS" class="footer__logo-pic" />
                </div>
                <nav class="footer__nav">
                    <ul class="footer__menu">
                        <li class="footer__menu-item">
                            <h3 class="footer__menu-title">{{$t('contacts')}}</h3>
                        </li>
                        <li class="footer__menu-item">
                            <a href="#!" class="footer__menu-link">info@fmsh.nis.edu.kz</a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="#!" class="footer__menu-link">8 (727) 6-27-27</a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="#!" class="footer__menu-link">{{$t('address')}}</a>
                        </li>
                    </ul>
                    <ul class="footer__menu">
                        <li class="footer__menu-item">
                            <h3 class="footer__menu-title">{{$t('follow')}}</h3>
                        </li>
                        <li class="footer__menu-item">
                            <a href="https://www.facebook.com/profile.php?id=100084372381400" target="_blank" class="footer__menu-link">Facebook</a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="https://www.instagram.com/nis.shymkent.official/" target="_blank" class="footer__menu-link">Instagram</a>
                        </li>
                        <li class="footer__menu-item">
                            <a href="https://www.youtube.com/channel/UCb8nWY4ahJJSOt5dOrMVSPQ" target="_blank" class="footer__menu-link">Youtube</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: 'FooterSlot',
    components: {Icon}
}
</script>

<style scoped>
    .footer{
        /*background: rgba(13, 33, 71, 0.65);*/
        background: #222222;
        padding: 30px 0;

    }
    .footer__item{
        display: flex;
        flex-wrap: wrap;
    }
    .footer__logo{
        width: 50%;
    }
    .footer__nav{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 50%;
    }
    .footer__menu-title{
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
    }
    .footer__menu-link{
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none;
        color: #FFFFFF;
    }
    .footer__menu-link:hover, .footer__menu-link:focus, .footer__menu-link:active{
        opacity: .75;
    }
</style>
