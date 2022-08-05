<template>

    <div class="wrapper">
        <h1 class="news__title">Новости</h1>
        <div class="search__params">
            <div class="dp__start-box">
                <Datepicker
                        v-model="startDate"
                        locale="ru"
                        cancelText="Отмена"
                        selectText="Выбрать"
                        placeholder="дд/мм/гггг"
                        inputClassName="dp-custom-input"
                        autoApply
                />
            </div>
            <div class="dp__end-box">
                <Datepicker
                        v-model="endDate"
                        locale="ru"
                        cancelText="Отмена"
                        selectText="Выбрать"
                        placeholder="дд/мм/гггг"
                        inputClassName="dp-custom-input"
                        autoApply

                />
            </div>
            <div class="search__text-box">
                <input v-model="searchQuery" type="text" placeholder="Найти статью" class="header__search" />
            </div>
        </div>

        <h3 class="news__sub-title">Последние новости</h3>

        <div class="news__rep-box">
            <div class="news__rep-list">
                <div  class="news__list">
                    <NewsList v-if="resultQuery.length>0" :all-news="fillPresentPage(resultQuery)"/>
                    <h2 v-else>
                        Новости не найдены
                    </h2>
                </div>

            </div>
            <div class="last__news-rep">
                <img src="https://www.kazatomprom.kz/storage/f4/un_global_compact_resize_w_1420_h_.jpg" alt="" class="last__news-pic">
                <NewsList  styles="border_left" :all-news="lastNews"/>
            </div>
            <PaginationField :totalResults="resultQuery.length" :total-pages="totalPages" :page="page" @changePageNumber="changePage" />
        </div>

    </div>
</template>

<script>
    import NewsList from '@/components/news/NewsList'
    import axios from 'axios'
    import Datepicker from '@vuepic/vue-datepicker'
    import '@vuepic/vue-datepicker/dist/main.css'
    import PaginationField from '@/components/news/PaginationField'

  export default {
    name: 'NewsBlock',
    components:{
      PaginationField,
      NewsList,Datepicker},
    data(){
      return{
        allNews:[
          {
            "id": 1,
            "title": "Казатомпром присоединился к Глобальному договору ООН",
            "body": "АО «Национальная атомная компания «Казатомпром» (далее – «Казатомпром» или «Компания») сообщает, что Компания официально стала полноправным участником Глобального договора Организации Объединенных Наций (UN Global Compact).",
            "published": new Date(2022, 6, 27, 10, 33, 30, 0),
            "url":"https://www.kazatomprom.kz/ru/media/view/kazatomprom_prisoedinilsya_k_globalnomu_dogovoru_oon"
          },
          {
            "id": 2,
            "title": "Казатомпром отмечает Всемирный день охраны окружающей среды",
            "body": "5 июня отмечается Всемирный день охраны окружающей среды, призванный привлечь внимание мировой общественности к экологическим проблемам. Международное энергетическое агентство прогнозирует, что к 2040 году глобальный спрос на электроэнергию может вырасти на 50%. Крайне важно, чтобы этот спрос удовлетворялся, а выбросы углерода и воздействие на окружающую среду снижались.",
            "published": new Date(2022, 6, 5, 13, 12, 30, 0),
            "url":"https://www.kazatomprom.kz/ru/media/view/kazatomprom_world_environment_day"
          },
          {
            "id": 3,
            "title": "Казатомпром опубликовал интегрированный годовой отчет, включающий инициативы и прогресс в области устойчивого развития",
            "body": "30 апреля АО «Национальная атомная компания «Казатомпром» (далее – «Казатомпром» или «Компания») опубликовало интегрированный годовой отчет за 2021 год, в котором раскрывается информация об экономических, социальных и экологических результатах деятельности Компании за отчетный период. Отчет доступен для ознакомления на официальном интернет-ресурсе Компании.",
            "published": new Date(2022, 5, 6, 12, 12, 30, 0),
            "url":"https://www.kazatomprom.kz/ru/media/view/Kazatomprom_publishes_2021_Integrated_Annual_Report"
          },
          {
            "id": 4,
            "title": "Всемирный день охраны труда: Казатомпром инвестировал более 8,29 млрд тенге в программы по охране труда и промышленной безопасности в 2021 году",
            "body": "Казатомпром увеличил инвестиции в охрану труда на 10% в 2021 году. В течение года на повышение квалификации и обучение персонала в данной сфере было направлено более 8,29 млрд тенге по сравнению с 7,63 млрд тенге в 2020 году. Это позволило работникам получить знания и навыки, необходимые для эффективной работы без ущерба для безопасности.",
            "published": new Date(2022, 4, 8, 28, 14, 30, 0),
            "url":"https://www.kazatomprom.kz/ru/media/view/World_Day_for_Safety_and_Health"
          },
          {
            "id": 5,
            "title": "Казатомпром занял 2 место в рейтинге отчетности об устойчивом развитии",
            "body": "АО «Национальная атомная компания «Казатомпром» (далее - «Казатомпром» или «Компания») вошла в тройку лидеров среди 10 лучших казахстанских компаний по полноте и качеству раскрываемой информации о соблюдении принципов ESG.",
            "published": new Date(2021, 12, 27, 24, 12, 30, 0),
            "url":"https://www.kazatomprom.kz/ru/media/view/kazatomprom_zanyal_2_mesto_v_reitinge_otchetnosti_ob_ustoichivom_razvitii"
          },
          {
            "id": 6,
            "title": "Казатомпром реализовал социальный проект по строительству детских игровых и спортивных площадок в регионах присутствия",
            "body": "В начале сентября Казатомпром завершил строительство современных детских игровых и спортивных площадок в семи населенных пунктах Туркестанской и Кызылординской областей.",
            "published": new Date(2021, 9, 13, 16, 12, 30, 0),
            "url":"https://www.kazatomprom.kz/ru/media/view/sotsialnii_proekt_po_stroitelstvu_detskih_ploshadok"
          }
        ],


        lastNews:[
          {
            "id": 1,
            "title": "Казатомпром присоединился к Глобальному договору ООН",
            "body": "АО «Национальная атомная компания «Казатомпром» (далее – «Казатомпром» или «Компания») сообщает, что Компания официально стала полноправным участником Глобального договора Организации Объединенных Наций (UN Global Compact).",
            "published": new Date(2022, 6, 27, 10, 33, 30, 0),
            "url":"https://www.kazatomprom.kz/ru/media/view/kazatomprom_prisoedinilsya_k_globalnomu_dogovoru_oon"

          }
        ],
        startDate:null,
        endDate:null,
        searchQuery: null,
        limit: 3,
        page: 1,
        totalPages: 0
      }
    },
    mounted () {
      //this.fetchNews();
      //this.fetchLastOneNews();
      this.totalPages = Math.ceil(this.allNews.length / this.limit);

    },
    computed: {
      resultQuery(){
        if(this.searchQuery || this.endDate || this.startDate){
          let r = this.allNews.filter( (item)=>{
            let str = this.searchQuery != null ? this.searchQuery.toLowerCase().split(' ').every( v => item.title.toLowerCase().includes(v) ):true;
            let end = this.endDate != null ? item.published.getTime() <= this.endDate.getTime(): true;
            let start = this.startDate != null ? item.published.getTime() >= this.startDate.getTime(): true;
            return str && end && start;
          })
          this.totalPages = Math.ceil(r.length / this.limit);
          this.page = 1;
          return r;
        }else {
          this.totalPages = Math.ceil(this.allNews.length / this.limit);
          this.page = 1;
          return this.allNews;
        }
      }
    },
    watch: {
      page(){
        //this.fetchNews()
        this.fillPresentPage( this.allNews )
      },

    },
    methods: {
      fillPresentPage( arr = [] ){
        let newArray = [];
        for (let i = (this.page-1) * this.limit; (i < this.limit * this.page) && i < arr.length; i++){
          newArray.push( arr[i] )
        }
        return newArray;
      },

      changePage (pNum) {
        this.page = pNum
      },
      async fetchNews(){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_page='+this.page+'&_limit='+this.limit/*,{
              "_page": this.page,
              "_limit": this.limit
            }*/);
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
            this.allNews = response.data;
        }catch (e) {
            console.log("error, can't load news")
        } finally {
        }
      },
      async fetchLastOneNews(){
        try{
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=1');
          this.lastNews = response.data;
        }catch (e) {
            console.log("error, can't load news")
        } finally {
        }
      }

    },
  }
</script>

<style scoped>
    .news__title{
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 49px;
        color: #224084;
    }
    .search__params{
        padding: 24px;
        position: relative;

    }
    .dp__start-box, .dp__end-box{
        max-width: 200px;
        display: inline-block;
        position: relative;

    }
    .dp__end-box{
        margin-left: 40px;
    }
    .dp__start-box::after{
        width: 24px;
        height: 1px;
        background-color: #D3D3D3;
        top: 50%;
        content: '';
        position: absolute;
        right: -32px;
    }
    .search__text-box{
        display: inline-block;
    }
    .header__search {
        background:transparent url("@/assets/img/svg/search-icon.svg") no-repeat left center;
        background-position: 14px;
        background-size: 24px;
        border: 1px solid #D4D3D4;
        margin-left: 24px;
        padding: 7px 0 7px 40px;
        width: 688px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #3F3F3F;
    }
    .news__sub-title{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #224084;
    }
    .last__news-pic{
        width: 408px;
        height: 366px;
        object-fit: cover;
        object-position: 20% 10%;
    }
    .news__rep-list, .last__news-rep{
        display: inline-block;
    }
    .news__rep-list{
        max-width: 760px;
    }
    .last__news-rep{
        float: right;
        vertical-align: top;
        margin-left: 32px;
        max-width: 408px;
    }
    .news__rep-box{
        margin-bottom: 20px;
    }
    .news__list{
        height: 516px;
        overflow: hidden;
    }

</style>
