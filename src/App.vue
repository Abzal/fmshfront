<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
  import EmptyLayout from '@/views/layout/EmptyLayout'
  import MainLayout from '@/views/layout/MainLayout'
  export default {
    components: {
      EmptyLayout,
      MainLayout
    },
    computed: {
      layout () {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    }
  }
</script>

<style lang="scss">
#app {
/*  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
}
</style>
