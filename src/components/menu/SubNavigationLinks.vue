<template>
    <div class="subparent">
        <router-link  class="desktop__item parent__desktop__item"   :to="'/'+this.$i18n.locale + subMenuItem.to">{{subMenuItem.title[this.$i18n.locale]}}</router-link>

        <span class="direction_arrow" v-if="subMenuItem.childs.length>0"></span>
        <div class="subrow" v-if="subMenuItem.childs.length>0">
            <div class="subrow_content">
                <div class="line"></div>
                <ul class="sub-mega-links">
                    <li v-for="subItem in subMenuItem.childs" :key="subItem.id">
                        <a class="desktop__item" href="#">{{subItem.title[this.$i18n.locale]}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'SubNavigationLinks',
  props: {
    subMenuItem: {
      type: Object
    }
  },

}
</script>

<style scoped>

    .parent__desktop__item{
        outline: none;
        -webkit-appearance: none;
    }
    .subparent:hover .parent__desktop__item:after{
        width: calc(100% + 20px);
    }

    .subparent{
        width: 100%;

    }
    .subrow{
        position: absolute;
        left: 35%;
        top: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
        opacity: 0;
        transform: translateX(-2rem);
        z-index: 99;
        padding: 25px 25px;
        float: left;
    }

    .subparent:hover .subrow{
        visibility: visible;
        transition: all 1s ease;
        opacity: 1;
        transform: translateX(0%);
        transition-delay: 0s, 0s, 0.3s;
    }
    .line{
        width: 1px;
        height: calc(100%);
        background-color: rgba(0,0,0,0.2);
    }
    .sub-mega-links{
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 25px;
    }
    .subrow_content{
        position: relative;
        float: left;
        width: 100%;
        height: 100%;
    }
    .direction_arrow{
        border: solid #1E2865;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        margin-left: 10px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        opacity: 1;
        position: relative;
        transition: opacity 1s ease 0s;

    }
    .subparent:hover .direction_arrow{
        animation-name: go-right;
        animation-duration: 1s;
        opacity: 0;
        transition: opacity 1s ease 0s;
    }

    @keyframes go-right {
        0%{
            left: 0;
        }
        100%{
            left: 50px;
        }
    }

</style>
