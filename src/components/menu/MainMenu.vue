<template>
    <nav>
            <ul class="nav-links">
                <li v-for="(item, index) in $store.getters.getMenuData" :key="item.id">
                    <NavigationLinks v-if="index === $store.getters.getMenuData.length-1" ownStyle="right-side" :menuItem="item"/>
                    <NavigationLinks v-else :menuItem="item"/>
                </li>
            </ul>
    </nav>

</template>

<script>
import NavigationLinks from '@/components/menu/NavigationLinks'
export default {
  name: 'MainMenu',
  components: { NavigationLinks }
}
</script>

<style>
    .nav-links{
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 0 50px;
        margin-bottom: 24px;


    }

    .desktop__item{
        font-weight: 500;
        font-size: 16px;
        color: #1E2865;
        /*color: #222222;*/
        text-decoration: none;
        outline: none;
        -webkit-appearance: none;
        padding-bottom: 10px;
        position: relative;
    }
    .desktop__item::after{
        content: '';
        display: inline-block;
        width: 0;
        height: 2px;
        background-color: #8dc041;
        transition: all .6s;
        position: absolute;
        bottom: 0;
        left: -10px;
    }

    .desktop__item:hover::after{
        width: calc(100% + 20px);
    }

    .header__link-active:after{
        width: calc(100% + 20px);
    }

</style>
