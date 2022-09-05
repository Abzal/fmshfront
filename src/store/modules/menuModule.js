export default {
  state: {

    mainMenuData: [
      {
        id: 1,
        title: 'О НАС',
        to: '/',
        childs: [
          {
            id: 2,
            title: 'О школе',
            to: '/about',
            childs: []
          },
          {
            id: 3,
            title: 'Нормативные документы',
            to: '/document',
            childs: []
          },
          {
            id: 3,
            title: 'Наша команда',
            to: '/team',
            childs: [
              {
                id: 2,
                title: 'Преподавательский состав (каферды)',
                to: '/',
                childs: []
              },
              {
                id: 3,
                title: 'Учебно-вспомогательный персонал',
                to: '/',
                childs: []
              },
              {
                id: 2,
                title: 'Администрация школы',
                to: '/',
                childs: []
              },
              {
                id: 3,
                title: 'Общежития',
                to: '/',
                childs: []
              },

            ]
          },
          {
            id: 3,
            title: 'Попечительский совет',
            to: '/',
            childs: []
          },

        ]
      },
      {
        id: 12,
        title: 'УЧИНИКАМ',
        to: '/',
        childs: [
          {
            id: 13,
            title: 'Совет лидеров',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Расписание уроков',
            to: '/',
            childs: []
          },
          {
            id: 13,
            title: 'Ресурсный центр (подкурсы)',
            to: '/',
            childs: []
          },
          {
            id: 13,
            title: 'Олимпийский центр',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Элективные курсы',
            to: '/',
            childs: []
          },
          {
            id: 13,
            title: 'Руководство для учащихся и родителей',
            to: '/',
            childs: []
          },
        ]
      },
      {
        id: 12,
        title: 'УЧИТЕЛЯМ',
        to: '/',
        childs: [
          {
            id: 13,
            title: 'Нормативные документы',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Конкурсы для пед работников',
            to: '/',
            childs: []
          },
          {
            id: 13,
            title: 'Публикации педагогов',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Сертифицированные тренеры',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Профессиональное развитие (ресурсы для учителей)',
            to: '/',
            childs: []
          },
        ]
      },
      {
        id: 12,
        title: 'РОДИТЕЛЯМ',
        to: '/',
        childs: [
          {
            id: 13,
            title: 'Задать вопрос директору',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Родительский комитет',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Образовательная модель школы',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Структура системы оценки',
            to: '/',
            childs: []
          }

        ]
      },
      {
        id: 12,
        title: 'ПРЕТЕНДЕНТАМ',
        to: '/',
        childs: [
          {
            id: 13,
            title: 'Конкурсный отбор',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Виртуальная школа',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Каникулярная школа',
            to: '/',
            childs: []
          }
        ]
      },
      {
        id: 20,
        title: 'ШКОЛЬНАЯ ЖИЗНЬ',
        to: '/',
        childs: [
          {
            id: 21,
            title: 'Общежитие',
            to: '/',
            childs: []
          },
          {
            id: 21,
            title: 'Социальные проекты',
            to: '/',
            childs: []
          },
          {
            id: 21,
            title: 'Кружковые заниятия',
            to: '/',
            childs: []
          },
          {
            id: 21,
            title: 'Профориентационная работа',
            to: '/',
            childs: []
          },
          {
            id: 21,
            title: 'Проекты',
            to: '/',
            childs: []
          },
          {
            id: 21,
            title: 'Библиотека',
            to: '/',
            childs: []
          },
          {
            id: 21,
            title: 'Психологическая служба',
            to: '/',
            childs: []
          },
          {
            id: 21,
            title: 'Служба питания',
            to: '/',
            childs: []
          },
          {
            id: 21,
            title: 'Медицинская служба',
            to: '/',
            childs: []
          },
          {
            id: 21,
            title: 'Летняя школа',
            to: '/',
            childs: []
          },
        ]
      },
      {
        id: 48,
        title: 'МЕДИА',
        to: '/',
        childs: [
          {
            id: 49,
            title: 'Новости',
            to: '/',
            childs: []
          },
          {
            id: 50,
            title: 'Фото и видео',
            to: '/',
            childs: []
          },
          {
            id: 51,
            title: 'О нас в СМИ',
            to: '/',
            childs: []
          }
        ]
      },
      {
        id: 54,
        title: 'КАРЬЕРА',
        to: '/',
        childs: [
          {
            id: 55,
            title: 'Наши обязательства',
            to: '/',
            childs: []
          },
          {
            id: 56,
            title: 'Кого мы ищем',
            to: '/',
            childs: []
          },
          {
            id: 57,
            title: 'Вакансии',
            to: '/',
            childs: []
          },
          {
            id: 58,
            title: 'Итоги отбора',
            to: '/',
            childs: []
          },
          {
            id: 59,
            title: 'Процесс подбора',
            to: '/',
            childs: []
          },
          {
            id: 61,
            title: 'Часто задаваемые вопросы',
            to: '/',
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

  }
}
