export default {
  state: {
    main:
      [
        {
          pretitle:{
            kz:"NEGE BIZDI TAÑDAİDY?",
            ru:"ПОЧЕМУ НУЖНО ВЫБРАТЬ НАС?",
            en:"WHY CHOOSE US?"
          },
          title:{
            kz:"OQUDY NEGE BIZBEN BASTAU KEREK?",
            ru:"ПОЧЕМУ ВАМ НУЖНО НАЧАТЬ ОБУЧАТЬСЯ У НАС?",
            en:"WHY YOU SHOULD START LEARNING WITH US?"
          },
          description:{
            kz:"Bızde köp jyldyq täjıribe jäne eñ joğary akademialyq nätijeler bar. Bız özımızge senımdılıktı, käsıbi mamandardyñ tūraqty qamqorlyğyn jäne qoldauyn qalyptastyramyz. Sonymen qatar, bız barlyğyna teñ mümkındıkter beremız. Bız stereotipsız, JOO-ğa tüsuge senımdı jäne käsıptı erte tañdağan köşbasşylardy tärbielep jatyrmyz.",
            ru:"У нас многолетний опыт, самые высокие академические результаты, воспитываем уверенность в себе, постоянный уход и поддержка от профессионалов, у нас равные возможности у всех, учим быть лидерами, освобождены от стереотипов, уверенное поступление в ВУЗ, ранний выбор будущей профессии",
            en:"We have many years of experience and the highest academic results. We foster self-confidence, constant care and support from professionals. Furthermore, we provide equal opportunities for everyone. We are educating leaders who are stereotype-free, confident in their admission to a university, and have made an early career choice.",
          },
          benefits:[
            {
              title:{
                kz:"Bılıktı mamandar",
                ru:"Квалифицированные инструкторы",
                en:"Skilled Instructors"
              },
              description:{
                kz:"Qazaqstannyñ eñ bılıktı ūstazdary jäne älemnıñ üzdık mamandarymen tajıribe almastyq",
                ru:"Самые квалифицированные учителя были выбраны и обучены лучшими специалистами Казахстана и мира",
                en:"The most qualified teachers were selected and trained by the best specialists in Kazakhstan and the world",
              },
              link: null,
              class:'bg-primary'
            },
            {
              title:{
                kz:"Demalys mektebı",
                ru:"Каникулярная школа",
                en:"Vacation school"
              },
              description:{
                kz:"Ziatkerlık mektepterge tüsuge ümıtkerlerdı qoldau üşın qūrylğan.",
                ru:"Создана для поддержки претендентов по поступлению в Интеллектуальные школы.",
                en:"Created to support applicants for admission to the Intellectual Schools.",
              },
              link: 'vocation',
              class:'bg-secondary'
            },
            {
              title:{
                kz:"Virtualdy mektep",
                ru:"Виртуальная школа",
                en:"Online Classes"
              },
              description:{
                kz:"Ziatkerlık mektepterdıñ beiındık pänderı boiynşa studentterge onlain oquğa mümkındık beretın qaşyqtyqtan bılım beru tehnologialary.",
                ru:"Дистанционные образовательные технологий, позволяющий учащимся в режиме онлайн проходить обучение по профильным предметам Интеллектуальных школ.",
                en:"Distance educational technologies that allow students to study online in specialized subjects of the Intellectual Schools.",
              },
              link: 'virtual',
              class:'bg-warning'
            },
          ]

        },
      ]
  },
  getters: {
    getMain (state) {
      return state.main
    }
  },
  mutations: {

  },
  actions: {

  },
  namespaced: true
}
