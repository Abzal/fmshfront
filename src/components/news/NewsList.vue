<template>
    <transition-group name="news__list-animation">
        <div class="news" :style="getStyle(styles)" v-for="item in allNews" :key="item.id">
            <div class="news__date">
                {{
                    toPublishedDate(item.published)
                }}
            </div>
            <a :href="item.url" class="redirect__to__news" target="_blank">
                <div class="news__title">
                    {{item.title}}
                </div>
                <div class="news__body">
                    {{item.body}}
                </div>
            </a>
        </div>
    </transition-group>
</template>

<script>
  export default {
    name: 'NewsList',
    props:{
      allNews: Array,
      styles: {
        type:String,
        default: null
      }
    },
    data(){
      return{
        months : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      }
    },
    methods: {
      getStyle(value)
      {
        let style = {}
        if (value === 'border_left') {
          style['border-left'] = '1px solid #D4D3D4';
          style['height'] = '204px';
        }
         return style
      },
      toPublishedDate(published){
        return (
          published.getDate() + ' ' +
          this.months[published.getMonth()] +' , ' +
          (published.getHours().toString().length == 1 ? '0'+published.getHours() : published.getHours()) + ':' +
          (published.getMinutes().toString().length == 1 ? '0'+published.getMinutes() : published.getMinutes())
        );
      }
    }
  }
</script>

<style scoped>

    .news{
        margin-top: 15px;
        border-bottom: 1px solid #D4D3D4;
        padding-left: 10px;
        padding-bottom: 10px;
    }
    .news:last-child{
        margin-bottom: 15px;
    }
    .news__date{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #8A8A8B;
        margin-bottom: 12px;
    }
    .news__title{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #224084;
        margin-bottom: 8px;

    }
    .news__body{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #3F3F3F;
        height: 70px;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    .redirect__to__news{
        text-decoration: none;
        outline: none;
    }
    .news__list-animation {
        display: inline-block;
        margin-right: 10px;
    }
    .news__list-animation-enter-active,
    .news__list-animation-leave-active{
        transition: all 1s ease;
    }
    .news__list-animation-enter-from,
    .news__list-animation-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

</style>
