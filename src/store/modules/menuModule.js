export default {
  state: {

    mainMenuData: [
      {
        id: 1,
        title: {ru:'О НАС',kz:'БІЗ ТУРАЛЫ',en:'ABOUT US'},
        to: '/',
        childs: [
          {
            id: 2,
            title: {ru:'О школе',kz:'Мектеп туралы',en:'About school'},
            to: '/about',
            childs: []
          },
          {
            id: 3,
            title: {ru:'Нормативные документы и отчеты',kz:'Нормативтік құжаттар мен есептер',en:'Regulatory documents and reports'},
            to: '/document',
            childs: []
          },
          {
            id: 3,
            title: {ru:'Наша команда',kz:'Біздің ұжым',en:'Our team'},
            to: '/team/all',
            childs: [
              {
                id: 2,
                title: {ru:'Преподавательский состав (кафедры)',kz:'Мұғалімдер құрамы (кафедралар)',en:'Teaching staff (departments)'},
                to: '/',
                childs: []
              },
              {
                id: 3,
                title: {ru:'Учебно-вспомогательный персонал',kz:'Педагог-уймдастырушы-кураторлар',en:'Teaching support staff'},
                to: '/team/kurators',
                childs: []
              },
             /* {
                id: 2,
                title: {ru:'Администрация школы',kz:'Мектеп әкімшілігі',en:'School administration'},
                to: '/',
                childs: []
              },
              {
                id: 3,
                title: {ru:'Общежитие',kz:'Жатақхана',en:'Dormitory'},
                to: '/',
                childs: []
              },*/

            ]
          },
          {
            id: 3,
            title: {ru:'Попечительский совет',kz:'Қамқоршылық кеңес',en:'Board of Trustees'},
            to: '/trustees',
            childs: []
          },
          /*
        {
          id: 54,
          title: {ru:'КАРЬЕРА',kz:'Мансап',en:'CAREER'},
          to: '/coming',
          childs: [
/!*              {
              id: 55,
              title: {ru:'Наши обязательства',kz:'Bızdıñ mındettemelerımız',en:'Our Commitments'},
              to: '/coming',
              childs: []
            },*!/
/!*            {
              id: 56,
              title: {ru:'Кого мы ищем',kz:'Kımdı ızdeudemız',en:'Who are we looking for'},
              to: '/coming',
              childs: []
            },*!/
            {
              id: 57,
              title: {ru:'Вакансии',kz:'Жұмыс орындары',en:'Jobs'},
              to: '/coming',
              childs: []
            },
            {
              id: 58,
              title: {ru:'Итоги отбора',kz:'Таңдау нәтижелері',en:'Selection results'},
              to: '/coming',
              childs: []
            },
            {
              id: 59,
              title: {ru:'Процесс подбора',kz:'Таңдау барысы',en:'Selection process'},
              to: '/coming',
              childs: []
            },
            {
              id: 61,
              title: {ru:'Часто задаваемые вопросы',kz:'Жиі қойылатын сұрақтар',en:'Frequently asked Questions'},
              to: '/coming',
              childs: []
            }
          ]
        }*/
        ]
      },
      {
        id: 12,
        title: {ru:'УЧЕНИКАМ',kz:'ОҚУШЫЛАРҒА',en:'FOR STUDENTS'},
        to: '/students',
        childs: [
         /* {
            id: 13,
            title: {ru:'Совет лидеров',kz:'Көшбашылар кеңесі',en:'Council of Leaders'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Расписание уроков',kz:'Сабақ кестесі',en:'Schedule of lessons'},
            to: '/coming',
            childs: []
          },
          {
            id: 13,
            title: {ru:'Ресурсный центр (подкурсы)',kz:'Ресурстық орталық (қосымша курстар)',en:'Resource Center (sub-courses)'},
            to: '/coming',
            childs: []
          },
          {
            id: 13,
            title: {ru:'Олимпийский центр',kz:'Olimpiadalyq ortalyq',en:'Olympic Center'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Элективные курсы',kz:'Tañtau kurstary',en:'Elective courses'},
            to: '/coming',
            childs: []
          },
          {
            id: 13,
            title: {ru:'Руководство для учащихся и родителей',kz:'Oquşylar men ata-analarğa arnalğan nūsqaulyq',en:'Guide for students and parents'},
            to: '/coming',
            childs: []
          },*/
        ]
      },
      {
        id: 12,
        title: {ru:'УЧИТЕЛЯМ',kz:'МҰҒАЛІМДЕР ҮШІН',en:'FOR TEACHERS'},
        to: '/teachers',
        childs: [
          /*{
            id: 13,
            title: {ru:'Нормативные документы',kz:'Erejeler',en:'Regulations'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Конкурсы для пед работников',kz:'Mūğalımderge arnalğan jarystar',en:'Competitions for ped workers'},
            to: '/coming',
            childs: []
          },
          {
            id: 13,
            title: {ru:'Публикации педагогов',kz:'Oqytuşylardyñ basylymdary',en:'Publications of educators'},
            to: '/coming',
            childs: []
          },*/
          {
            id: 14,
            title: {ru:'Сертифицированные тренеры',kz:'Сертификатталған жаттықтырушылар',en:'Certified trainers'},
            to: '/trainers',
            childs: []
          },
          /*{
            id: 14,
            title: {ru:'Профессиональное развитие (ресурсы для учителей)',kz:'Bılıktılıktı arttyru (mūğalımderge arnalğan resurstar)',en:'Professional Development (Resources for Teachers)'},
            to: '/coming',
            childs: []
          },*/
        ]
      },
      {
        id: 12,
        title: {ru:'РОДИТЕЛЯМ',kz:'АТА-АНАЛАР ҮШІН',en:'FOR PARENTS'},
        to: '/parents',
        childs: [
          /*{
            id: 13,
            title: {ru:'Задать вопрос директору',kz:'Basşyğa sūraq qoiu',en:'Ask a question to the director'},
            to: '/coming',
            childs: []
          },*/
          {
            id: 14,
            title: {ru:'Родительский комитет',kz:'Ата-аналар камитеті',en:'Parental committee'},
            to: '/parent-univer',
            childs: []
          },
          /*{
            id: 14,
            title: {ru:'Образовательная модель школы',kz:'Mektep tärbie modelı',en:'The educational model of the school'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Структура системы оценки',kz:'Bağalau jüiesınıñ qūrylymy',en:'Structure of the assessment system'},
            to: '/coming',
            childs: []
          }*/

        ]
      },
      {
        id: 12,
        title: {ru:'ПРЕТЕНДЕНТАМ',kz:'ҮМІТКЕРЛЕРГЕ',en:'FOR APPLICANTS'},
        to: '/applicant',
        childs: [
          /*{
            id: 13,
            title: {ru:'Бронирование',kz:'Brondau',en:'Booking'},
            to: 'https://outlook.office365.com/owa/calendar/Bookings973113@nis.edu.kz/bookings/s/j_VHU0k6VEujQ1xASVgGrw2',
            childs: []
          },*/
          {
            id: 13,
            title: {ru:'Конкурсный отбор',kz:'Конкурстық іріктеу',en:'Competitive selection'},
            to: '/konkurs',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Виртуальная школа',kz:'Виртуалды мектеп',en:'Virtual school'},
            to: '/virtual',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Каникулярная школа',kz:'Демалыс мектебі',en:'Vacation school'},
            to: '/vocation',
            childs: []
          }
        ]
      },
      {
        id: 20,
        title: {ru:'ШКОЛЬНАЯ ЖИЗНЬ',kz:'МЕКТЕП ӨМІРІ',en:'SCHOOL LIFE'},
        to: '/live',
        childs: [
          /*{
            id: 21,
            title: {ru:'Общежитие',kz:'Jataqhana',en:'Dormitory'},
            to: '/coming',
            childs: []
          },*/
          /*{
            id: 21,
            title: {ru:'Социальные проекты',kz:'Äleumettık jobalar',en:'Social projects'},
            to: '/coming',
            childs: []
          },*/
          /*{
            id: 21,
            title: {ru:'Кружковые занятия',kz:'Qosymşalar',en:'Club activities'},
            to: '/coming',
            childs: []
          },*/
          /*{
            id: 21,
            title: {ru:'Профориентационная работа',kz:'Käsıptık bağdar beru jūmystary',en:'Career guidance work'},
            to: '/coming',
            childs: []
          },*/
/*          {
            id: 21,
            title: {ru:'Проекты',kz:'Jobalar',en:'Projects'},
            to: '/coming',
            childs: [
              {
                id: 21,
                title: {ru:'Креативный полет',kz:'Kreativtı samğau',en:'Creative ideas'},
                to: '/creative',
                childs: []
              },
            ]
          },*/
/*          {
            id: 21,
            title: {ru:'Библиотека',kz:'Kıtaphana',en:'Library'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Психологическая служба',kz:'Psihalogialyq qyzmet',en:'Psychological service'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Служба питания',kz:'Tamaqtanu qyzymetı',en:'Food Service'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Медицинская служба',kz:'Därıgerler qyzymetı',en:'Medical service'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Летняя школа',kz:'Jazğy mektep',en:'Summer school'},
            to: '/coming',
            childs: []
          },*/
        ]
      },
      {
        id: 48,
        title: {ru:'МЕДИА',kz:'БАҚ',en:'MEDIA'},
        to: '/coming',
        childs: [
         /* {
            id: 49,
            title: {ru:'Новости',kz:'Jañalyqtar',en:'News'},
            to: '/coming',
            childs: []
          },
          {
            id: 50,
            title: {ru:'Фото и видео',kz:'Foto jäne beine',en:'Photo and video'},
            to: '/coming',
            childs: []
          },
          {
            id: 51,
            title: {ru:'О нас в СМИ',kz:'Bız turaly BAQ-ta',en:'About us in the media'},
            to: '/coming',
            childs: []
          }*/
        ]
      },


    ]
  },
  getters: {
    getMenuData (state) {
      return state.mainMenuData
    }
  },
  mutations: {

  },
  actions: {

  },


}
