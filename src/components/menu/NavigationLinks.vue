<template>
    <div class="parent">
    <router-link :to="'/'+this.$i18n.locale + menuItem.to" class="desktop__item parent__desktop__item" :class="{'header__link-active': activeTopMenu}" >{{menuItem.title[this.$i18n.locale]}}</router-link>


    <div class="under__box" v-if="menuItem.childs.length > 0">
        <div class="under__box-row" :style="changeStyle(ownStyle)">
                <ul class="under__box-row-links">
                    <li v-for="subItem in menuItem.childs" :key="subItem.id">
                        <SubNavigationLinks :subMenuItem="subItem"/>
                    </li>
                </ul>
        </div>
    </div>
    </div>
</template>

<script>
import SubNavigationLinks from '@/components/menu/SubNavigationLinks'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'NavigationLinks',
  components: { SubNavigationLinks },
  props: {
    menuItem: {
      type: Object
    },
    ownStyle: {
      type: String,
      default: ""
    }
  },
  computed:{
    ...mapState(['activeTopMenu']),
  },
  methods:{


    changeStyle(value)
    {
      let style = {}

      if (value === 'right-side') {
        style['margin-left'] = 'auto';
        style['text-align'] = 'right';
      }
      return style
    }
  }

}
</script>

<style scoped>
    .parent__desktop__item{
        outline: none;
        -webkit-appearance: none;
    }
    .under__box{
        position: absolute;
        left: 0;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        z-index: 99;
        transform: translateY(-1em);
        transition: all 0.01s ease-in-out 0s, visibility 0s linear 0.01s, z-index 0s linear 0.01s;
        background: #E0E6EF;
        padding: 25px 20px;
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
        overflow: hidden;
    }

    .under__box-row{
        width: calc(50% - 30px);
        line-height: 45px;

    }
    .under__box-row-links{
        padding: 0 20px;

    }

    .parent:hover .under__box{
        transition: all 1s ease;
        top: 29px;
        opacity: 1;
        visibility: visible;
        transform: translateY(0%);
        transition-delay: 0s, 0s, 0.3s;
    }
    .parent:hover .parent__desktop__item:after{
        width: calc(100% + 20px);
    }

</style>
