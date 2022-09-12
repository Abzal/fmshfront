<template>
        <div class="menu__burger burger">
            <div class="span burger__line burger__line-top"></div>
            <div class="span burger__line burger__line-mid"></div>
            <div class="span burger__line burger__line-bot"></div>
        </div>

</template>

<script>
  export default {
    name: 'BurgerMenu'
  }
</script>

<style scoped>

    .menu__burger{
        width: 24px;
        height: 24px;
        position: relative;
        display: none;
    }
    .burger__line{
        display: block;
        width: 100%;
        height: 2px;
        background-color: #8A8A8B;
        position: absolute;
        left: 0;
    }
    .burger__line-top{
        top: 0;
    }
    .burger__line-mid{
        top: 50%;
        transform: translateY(-50%);

    }
    .burger__line-bot{
        bottom: 0;
    }

</style>
