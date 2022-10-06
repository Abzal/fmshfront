export default {
  state: {

    mainMenuData: [
      {
        id: 1,
        title: {ru:'О НАС',kz:'BIZ TURALY',en:'ABOUT US'},
        to: '/',
        childs: [
          {
            id: 2,
            title: {ru:'О школе',kz:'Mektep turaly',en:'About school'},
            to: '/about',
            childs: []
          },
          {
            id: 3,
            title: {ru:'Нормативные документы',kz:'Erejeler',en:'Regulations'},
            to: '/document',
            childs: []
          },
          {
            id: 3,
            title: {ru:'Наша команда',kz:'Bızdıñ top',en:'Our team'},
            to: '/team/all',
            childs: [
              {
                id: 2,
                title: {ru:'Преподавательский состав (кафедры)',kz:'Mūğalımder qūramy (kafedralar)',en:'Teaching staff (departments)'},
                to: '/',
                childs: []
              },
              {
                id: 3,
                title: {ru:'Учебно-вспомогательный персонал',kz:'Pedagogikalyq kömekşıler',en:'Teaching support staff'},
                to: '/team/kurators',
                childs: []
              },
              {
                id: 2,
                title: {ru:'Администрация школы',kz:'Mektep äkımşılıgı',en:'School administration'},
                to: '/',
                childs: []
              },
              {
                id: 3,
                title: {ru:'Общежитие',kz:'Jataqhana',en:'Hostel'},
                to: '/',
                childs: []
              },

            ]
          },
          {
            id: 3,
            title: {ru:'Попечительский совет',kz:'Qamqorşylyq keñes',en:'Board of Trustees'},
            to: '/coming',
            childs: []
          },

        ]
      },
      {
        id: 12,
        title: {ru:'УЧЕНИКАМ',kz:'OQUŞYLARĞA',en:'FOR STUDENTS'},
        to: '/students',
        childs: [
          {
            id: 13,
            title: {ru:'Совет лидеров',kz:'Kösbasşylar keñesı',en:'Council of Leaders'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Расписание уроков',kz:'Sabaq kestesı',en:'schedule of lessons'},
            to: '/coming',
            childs: []
          },
          {
            id: 13,
            title: {ru:'Ресурсный центр (подкурсы)',kz:'Resurstyq ortalyq (qosymşa kurstar)',en:'Resource Center (sub-courses)'},
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
          },
        ]
      },
      {
        id: 12,
        title: {ru:'УЧИТЕЛЯМ',kz:'MŪĞALIMDER ÜŞIN',en:'FOR TEACHERS'},
        to: '/teachers',
        childs: [
          {
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
          },
          {
            id: 14,
            title: {ru:'Сертифицированные тренеры',kz:'Sertifikattalğan jattyqtyruşylar',en:'Certified trainers'},
            to: '/trainers',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Профессиональное развитие (ресурсы для учителей)',kz:'Bılıktılıktı arttyru (mūğalımderge arnalğan resurstar)',en:'Professional Development (Resources for Teachers)'},
            to: '/coming',
            childs: []
          },
        ]
      },
      {
        id: 12,
        title: {ru:'РОДИТЕЛЯМ',kz:'ATA-ANALAR ÜŞIN',en:'FOR PARENTS'},
        to: '/coming',
        childs: [
          {
            id: 13,
            title: {ru:'Задать вопрос директору',kz:'Basşyğa sūraq qoiu',en:'Ask a question to the director'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Родительский комитет',kz:'Ata-analar kamitetı',en:'Parental committee'},
            to: '/parent-univer',
            childs: []
          },
          {
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
          }

        ]
      },
      {
        id: 12,
        title: {ru:'ПРЕТЕНДЕНТАМ',kz:'ÜMITKERLERGE',en:'FOR APPLICANTS'},
        to: '/coming',
        childs: [
          {
            id: 13,
            title: {ru:'Конкурсный отбор',kz:'Konkurstyq ırıkteu',en:'Competitive selection'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Виртуальная школа',kz:'Virtualdy mektep',en:'virtual school'},
            to: '/virtual',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Каникулярная школа',kz:'Demalys mektebı',en:'vacation school'},
            to: '/vocation',
            childs: []
          }
        ]
      },
      {
        id: 20,
        title: {ru:'ШКОЛЬНАЯ ЖИЗНЬ',kz:'MEKTEP ÖMIRI',en:'SCHOOL LIFE'},
        to: '/coming',
        childs: [
          {
            id: 21,
            title: {ru:'Общежитие',kz:'Jataqhana',en:'Hostel'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Социальные проекты',kz:'Äleumettık jobalar',en:'Social projects'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Кружковые занятия',kz:'Qosymşalar',en:'Club activities'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Профориентационная работа',kz:'Käsıptık bağdar beru jūmystary',en:'Career guidance work'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Проекты',kz:'Jobalar',en:'Projects'},
            to: '/coming',
            childs: []
          },
          {
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
            title: {ru:'Медицинская служба',kz:'Därıgerler qyzymetı',en:'medical service'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Летняя школа',kz:'Jazğy mektep',en:'Summer school'},
            to: '/coming',
            childs: []
          },
        ]
      },
      {
        id: 48,
        title: {ru:'МЕДИА',kz:'BAQ',en:'MEDIA'},
        to: '/coming',
        childs: [
          {
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
          }
        ]
      },
      {
        id: 54,
        title: {ru:'КАРЬЕРА',kz:'MANSAP',en:'CAREER'},
        to: '/coming',
        childs: [
          {
            id: 55,
            title: {ru:'Наши обязательства',kz:'Bızdıñ mındettemelerımız',en:'Our Commitments'},
            to: '/coming',
            childs: []
          },
          {
            id: 56,
            title: {ru:'Кого мы ищем',kz:'Kımdı ızdeudemız',en:'Who are we looking for'},
            to: '/coming',
            childs: []
          },
          {
            id: 57,
            title: {ru:'Вакансии',kz:'Jumys oryndary',en:'Jobs'},
            to: '/coming',
            childs: []
          },
          {
            id: 58,
            title: {ru:'Итоги отбора',kz:'Tañdau nätijelerı',en:'Selection results'},
            to: '/coming',
            childs: []
          },
          {
            id: 59,
            title: {ru:'Процесс подбора',kz:'Tañdau barysy',en:'Selection process'},
            to: '/coming',
            childs: []
          },
          {
            id: 61,
            title: {ru:'Часто задаваемые вопросы',kz:'Jiı qoiylatyn sūraqtar',en:'Frequently asked Questions'},
            to: '/coming',
            childs: []
          }
        ]
      }

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
