<template>
    <header class="header">
        <div class="wrapper">
            <div class="header__wrapper-top">
                <div class="header__logo">
                    <a href="/" class="header__logo-link">
                        <Icon name="header-logo" alt="LOGO" class="header__logo-pic" />
                    </a>
                </div>
                <div class="header__elements">
                    <a href="#!" class="header__link-top">қаз</a>
                    <a href="#!" class="header__link-top header__link-top-active">рус</a>
                    <a href="#!" class="header__link-top">eng</a>
                    <button class="header__sign">Войти</button>
                </div>
            </div>
            <MainMenu />
        </div>

    </header>
</template>

<script>
import MainMenu from '@/components/menu/MainMenu'
import Icon from "@/components/Icon";
export default {
  name: 'HeaderSlot',
  data () {
    return {
      langArr: ['Рус', 'Қаз', 'Eng'],
      defaultLang: 'Рус'
    }
  },
  methods: {
    logout () {

    },
    login () {

    }
  },
  components: {Icon, MainMenu }
}
</script>

<style scoped>
    .header__wrapper-top{
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 24px;
        margin-top: 24px;
    }
    .header__sign {
        padding: 8px 16px;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
        background: #8dc041;
        border: 0;
        margin-left: 20px;
    }
    .header__sign:hover, .header__sign:focus, .header__sign:active{
        background: #69922d;
    }
    .header__link-top{
        text-decoration: none;
        color: #D4D3D4;
        padding-left: 20px;
        outline: none;
    }
    .header__link-top:hover{
        color: #8dc041;
    }
    .header__link-top-active{
        color: #8dc041;
    }

</style>
