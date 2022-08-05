<template>
    <div class="pl_parent">
        {{totalResults}} результатов

        <div class="pagination__chevron" @click="changePage(page - 1)">
            <Icon name="pagination-chevron-left" class="pagination__chevron"/>
        </div>
        <div
                class="page__number"
                :class="{
                    'current__page__number':pageNum === page
                }"
                v-for="pageNum in getPageSelectRange"
                :key="pageNum"
                @click="changePage(pageNum)"
        >
                {{pageNum}}

        </div>
        <div class="pagination__chevron" @click="changePage(page + 1)">
            <Icon name="pagination-chevron-right" class="pagination__chevron"/>
        </div>

        <div class="enter__pagination__number">
            Перейти на страницу:
            <input type="number" min="1" :max="totalPages" class="enter__page__number" @change="enterNumber" >
        </div>

    </div>

</template>

<script>
  import Icon from '@/components/Icon'
  export default {
    name: 'PaginationField',
    components: { Icon },
    props: {
      totalPages:Number,
      page: Number,
      totalResults: Number
    },
    data(){
      return{
            inputNum: this.page,
            selectedPageRange:[]
      }
    },
    computed:{
      getPageSelectRange(){
        let s = (this.page - 4);
        if(s < 1)
          s = 1;
        let e = (this.page + 4);
        if( e > this.totalPages )
          e = this.totalPages;


        let arr = [];
        for (s; s<=e; s++  ){
          arr.push(s);
        }
        return arr;
      }
    },
    methods:{
      changePage(pageNumber){
        if(pageNumber > 0 && pageNumber <= this.totalPages )
            this.$emit('changePageNumber',pageNumber)
      },

      enterNumber ($event) {
        this.changePage(Number($event.target.value));
      }
    }
  }
</script>

<style scoped>
    .pl_parent{
        display: flex;
        margin-top: 15px;
        align-items: center;
        color: #8A8A8B;
        justify-content: space-between;

    }
    .page__number{
        padding: 14px 8px;
        cursor: pointer;
    }
    .current__page__number{
        color: #3F3F3F;
    }
    .pagination__chevron{
        cursor: pointer;
        padding-top: 4px;
        margin: 0 10px;
    }
    .enter__pagination__number{
        display: flex;
        align-items: center;
    }
    .enter__page__number{
        padding: 14px 12px;
        border: 1px solid #D3D3D3;
        max-width: 64px;
        margin-left: 8px;
    }
</style>
