<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="container">
        <br />
        <p>
          «Назарбаев Зияткерлік мектептері» Дербес Білім Беру Ұйымының 2020 жылға дейінгі даму  стратегиясына сәйкес,  2015 жылы республикамыздағы барлық Назарбаев Зияткерлік мектептерде «Қамқоршылық Кеңес» өз қызметін атқарып келеді.
        </p>
        <p>
          Жоғарыда аталған даму стратегиясын жүзеге асыру мақсатында 2015 жылдың 08 сәуір күні Шымкент қаласындағы физика-математика бағытындағы Назарбаев Зияткерлік мектебі Қамқоршылық Кеңесінің алғашқы отырысы өткізіліп, Кеңес өз қызметін бастады. Бүгінге дейін 10 жыл ішінде Кеңес әр оқу жылында үш жоспарлы кездесуін өткізіп келеді.
        </p>
      </div>
    </div>

    <div class="container-fluid py-5">
      <div class="container">

        <div class="row align-items-center">
          <div class="col-lg-5">
            <img class="img-fluid rounded mb-5 mb-lg-0" style="max-height: 600px" :src="require('@/assets/img/trustees/Алимбеков Тоқтар.png')" alt="">
          </div>
          <div class="col-lg-7">
            <p class="section-title pr-5"><span class="pr-2">Алимбеков Тоқтар Мұратұлы</span></p>
            <p>Chaplin's компаниялар желісінің негізін қалаушы, жас кәсіпкер, U:Projects әлеуметтік жобасының авторы</p>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-7">
            <p class="section-title pr-5"><span class="pr-2">Архабаева Алма Нураловна </span></p>
            <p>«Аманат» партиясының мүшесі, Шымкент қаласының Кәсіпкерлер палатасының іскер әйелдер кеңесінің төрайымы</p>
          </div>
          <div class="col-lg-5">
            <img class="img-fluid rounded mb-5 mb-lg-0" style="max-height: 600px" :src="require('@/assets/img/trustees/Архабаева Алма.png')" alt="">
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-5">
            <img class="img-fluid rounded mb-5 mb-lg-0" style="max-height: 600px" :src="require('@/assets/img/trustees/Мусаев Сейфулла.png')" alt="">
          </div>
          <div class="col-lg-7">
            <p class="section-title pr-5"><span class="pr-2">Мусаев Сейфулла Тлеубергенович </span></p>
            <p>Түркістан облысының қоғамдық денсаулық басқармасының «Сарыағаш облыстық балалар шипажайы» шаруашылық жүргізу құқығындағы мемлекеттік коммуналдық кәсіпорнының басшысы</p>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-7">
            <p class="section-title pr-5"><span class="pr-2">Рамазанова Гулжан Сайлаубековна</span></p>
            <p>«Лидер -Агро» ЖШС директоры</p>
          </div>
          <div class="col-lg-5">
            <img class="img-fluid rounded mb-5 mb-lg-0" style="max-height: 600px" :src="require('@/assets/img/trustees/Рамазанова Гулжан.png')" alt="">
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-5">
            <img class="img-fluid rounded mb-5 mb-lg-0" style="max-height: 600px" :src="require('@/assets/img/trustees/Тағаев Бақтияр.png')" alt="">
          </div>
          <div class="col-lg-7">
            <p class="section-title pr-5"><span class="pr-2">Тағаев Бақтияр Мұратұлы </span></p>
            <p>Түркістан облыстық мәслихатының депутаты, «Александровский сад» ЖШС директоры</p>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-7">
            <p class="section-title pr-5"><span class="pr-2">Тәжібаева Ұлболсын Қарынбекқызы </span></p>
            <p>Оңтүстік  Қазақстан мемлекеттік педагогикалық университеті «Музыкалық білім» кафедрасының доценті, Түркістан облысы ардагерлер кеңесінің мүшесі</p>
          </div>
          <div class="col-lg-5">
            <img class="img-fluid rounded mb-5 mb-lg-0" style="max-height: 600px" :src="require('@/assets/img/trustees/Тәжібаева Ұлболсын.png')" alt="">
          </div>
        </div>


      </div>
    </div>

  </div>
</template>
<script>
  import AboutSchool from "@/components/AboutSchool";
  export default {
    name: 'TrusteesView',
    components: {AboutSchool}
  }
</script>