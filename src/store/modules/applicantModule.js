export default {
  state: {
    main:
      [
        {
          pretitle:{
            kz:"НЕГЕ БІЗДІ ТАҢДАЙДЫ?",
            ru:"ПОЧЕМУ НУЖНО ВЫБРАТЬ НАС?",
            en:"WHY CHOOSE US?"
          },
          title:{
            kz:"ОҚУДЫ НЕГЕ БІЗБЕН БАСТАУ КЕРЕК?",
            ru:"ПОЧЕМУ ВАМ НУЖНО НАЧАТЬ ОБУЧАТЬСЯ У НАС?",
            en:"WHY YOU SHOULD START LEARNING WITH US?"
          },
          description:{
            kz:"Бізде көп жылдық тәжірибеміз, ең жоғары оқу нәтижелеріміз бар, өзімізге сенімділікті, кәсіби мамандардың тұрақты қамқорлығын және қолдауын тәрбиелейміз, бізде барлығына бірдей мүмкіндіктер бар, біз стереотиптерден арылмай, көшбасшы болуға үйретеміз, университетке сенімді түрде түсуге, ерте болашақ мамандығын таңдау",
            ru:"У нас многолетний опыт, самые высокие академические результаты, воспитываем уверенность в себе, постоянный уход и поддержка от профессионалов, у нас равные возможности у всех, учим быть лидерами, освобождены от стереотипов, уверенное поступление в ВУЗ, ранний выбор будущей профессии",
            en:"We have many years of experience and the highest academic results. We foster self-confidence, constant care and support from professionals. Furthermore, we provide equal opportunities for everyone. We are educating leaders who are stereotype-free, confident in their admission to a university, and have made an early career choice.",
          },
          benefits:[
            {
              title:{
                kz:"Білікті нұсқаушылар",
                ru:"Квалифицированные инструкторы",
                en:"Skilled Instructors"
              },
              description:{
                kz:"Ең білікті ұстаздарды Қазақстанның және әлемнің үздік мамандары таңдап, оқытты",
                ru:"Самые квалифицированные учителя были выбраны и обучены лучшими специалистами Казахстана и мира",
                en:"The most qualified teachers were selected and trained by the best specialists in Kazakhstan and the world",
              },
              link: null,
              class:'bg-primary'
            },
            {
              title:{
                kz:"Демалыс мектебі",
                ru:"Каникулярная школа",
                en:"Vacation school"
              },
              description:{
                kz:"Зияткерлік мектептерге түсуге үміткерлерді қолдау үшін құрылған.",
                ru:"Создана для поддержки претендентов по поступлению в Интеллектуальные школы.",
                en:"Created to support applicants for admission to the Intellectual Schools.",
              },
              link: 'vocation',
              class:'bg-secondary'
            },
            {
              title:{
                kz:"Виртуалды мектеп",
                ru:"Виртуальная школа",
                en:"Online Classes"
              },
              description:{
                kz:"Зияткерлік мектептердің бейіндік пәндері бойынша студенттерге онлайн оқуға мүмкіндік беретін қашықтықтан білім беру технологиялары.",
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
