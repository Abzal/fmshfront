<template>
    <header class="header">
        <div class="wrapper">
            <div class="header__wrapper-top">
                <div class="header__logo">
                    <a href="/" class="header__logo-link">
                        <Icon name="header-logo" alt="LOGO" class="header__logo-pic" />
                    </a>
                </div>
                <div class="header__elements" style="display: flex">
                    <a href="#!" v-for="locale in locales" :key="locale" :class="(this.$i18n.locale === locale)?'header__link-top-active':''" @click="switchLocale(locale)" class="header__link-top">{{ localesText[locale] }}</a>
                    <button class="header__sign">{{$t("signin")}}</button>
                    <burger-menu class="burger__box-cmp" style="cursor: pointer;" @click="shMMenu = !shMMenu"></burger-menu>
                </div>
            </div>
            <MainMenu class="main__menu-cmp" />

            <div class="burger__open-menu">
                <div class="burger__nav-menu" :class="shMMenu ? 'burger__nav-menu-active': ''" >
                    <ul class="burger__nav-ul">
                        <li v-for="(item, index) in $store.getters.getMenuData" class="burger__nav-li">
                            <div class="tabs">
                                <router-link :to="item.to" class="desktop__item" @click="shMMenu = !shMMenu"  >{{item.title[this.$i18n.locale]}}</router-link>
                                <div v-if="item.childs.length > 0" class="show__down-icon" @click="toggler(index+'_p')" :class="togglerStore[index+'_p']?'show__up-icon':''"></div>
                            </div>

                            <ul v-show="togglerStore[index+'_p']" class="burger__nav-ul" v-if="item.childs.length > 0" style="padding: 10px 0 0 10px">
                                <li v-for="(sub_item, sub_index) in item.childs" class="burger__nav-li">
                                    <div class="tabs">
                                        <router-link :to="sub_item.to" class="desktop__item" @click="shMMenu = !shMMenu" >{{sub_item.title[this.$i18n.locale]}}</router-link>
                                        <div v-if="sub_item.childs.length > 0" class="show__down-icon" @click="toggler(sub_index+'_sp')" :class="togglerStore[sub_index+'_sp']?'show__up-icon':''"></div>
                                    </div>

                                    <ul v-show="togglerStore[sub_index+'_sp']" class="burger__nav-ul" v-if="sub_item.childs.length > 0" style="padding: 10px 0 0 10px">
                                        <li v-for="(sub_sub_item, sub_sub_index) in sub_item.childs" class="burger__nav-li">
                                            <router-link :to="sub_sub_item.to" class="desktop__item" @click="shMMenu = !shMMenu" >{{sub_sub_item.title[this.$i18n.locale]}}</router-link>
                                        </li>
                                    </ul>

                                </li>
                            </ul>

                        </li>
                    </ul>
                    <div class="header__nav-close" style="cursor: pointer;" v-on:click="shMMenu = !shMMenu">
                        <span class="header__nav-close-line"></span>
                        <span class="header__nav-close-line"></span>
                    </div>
                </div>
            </div>

        </div>

    </header>
</template>

<script>
import MainMenu from '@/components/menu/MainMenu'
import Icon from "@/components/Icon";
import BurgerMenu from '@/components/menu/BurgerMenu'
import CompactSelect from "@/components/CompactSelectField";
export default {
  name: 'HeaderSlot',
  data () {
    return {
        shMMenu : false,
        togglerStore : {},
        locales: ['kz','ru','en'],/*process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')*/
        localesText : {'kz':'қаз','ru':'руc','en':'eng'}
    }
  },
  methods: {
      switchLocale(locale){
          /*TODO: optimize this*/
          if(this.$i18n.locale !== locale){
              this.$i18n.locale = locale
              //const to = this.$router.resolve({params:{locale}})
              let to = '/'+locale+ this.$route.path.substring(this.$route.path.lastIndexOf('/'));

              this.$router.push(to)
          }
      },

      toggler(idx){
          if(this.togglerStore[idx])
              this.togglerStore[idx] = false
          else this.togglerStore[idx] = true
      },
  },
  components: {CompactSelect, BurgerMenu, Icon, MainMenu }
}
</script>

<style scoped>

    @media screen and (max-width: 830px) {
        .burger__nav-links{
            display: block !important;
        }
    }
    @media screen and (max-width: 930px) {
        .main__menu-cmp{
            display: none !important;
        }
        .burger__box-cmp{
            display: block !important;
            margin: 0 10px;
        }
    }
    @media screen and (max-width: 600px) {
        .stock__parent{
            display: none !important;
        }
        .header__logo-pic{
            width: 130px;
        }
        .header__elements{
            font-size: 12px !important;
        }
        .header__search{
            width: 25px !important;
            padding-right: 6px !important;
            margin-right: 4px !important;
        }
        .header__link-top-contact{
            padding: 0 5px !important;
        }
        .header__link-top{
            padding-left: 5px !important;
        }
        .header__link-top:last-child{
            padding-right: 5px !important;
        }
        .header__logo{
            width: 131px;
        }
    }

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


    .desktop__item{
        text-decoration: none;
        outline: none;
        -webkit-appearance: none;
    }

    .burger__nav-menu{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #FFFFFF;
        z-index: 298;
        padding: 15px 20px;
        transform: translateX(100%);
        transition: .2s all linear;
    }
    .burger__nav-menu-active{
        transform: translateX(0);
    }

    .burger__nav-ul{
        width: 100%;
    }
    .burger__nav-li{
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 15px;
    }
    .burger__nav-li:last-child{
        margin-bottom: 0;
    }
    .header__nav-close{
        width: 24px;
        height: 24px;
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 299;
    }
    .header__nav-close:hover{
        opacity: .8;
    }
    .header__nav-close-line{
        display: block;
        height: 2px;
        background-color: #222222;
        position: absolute;
        top: 50%;
        width: 100%;
    }
    .header__nav-close-line:first-child{
        transform: translateY(-50%) rotate(45deg);
    }
    .header__nav-close-line:last-child{
        transform: translateY(-50%) rotate(-45deg);
    }

    .show__down-icon{
        position: relative;
        right: 30%;
        top: 7px;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #3F3F3F;
        border-left: 2px solid #3F3F3F;
        transform: rotate(-45deg);
        cursor: pointer;
    }
    .show__up-icon{
        transform: rotate(-225deg);
        top: 10px;
    }
    .tabs{
        display: flex;
        justify-content: space-between;

    }
</style>
