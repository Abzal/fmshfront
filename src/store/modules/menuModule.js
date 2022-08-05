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
            title: 'Наши ценности',
            to: '/',
            childs: []
          },
          {
            id: 3,
            title: 'Наша cтратегия',
            to: '/',
            childs: []
          },
          {
            id: 4,
            title: 'Наша миссия',
            to: '/',
            childs: []
          },
          {
            id: 10,
            title: 'История школы',
            to: '/',
            childs: []
          }
        ]
      },
      {
        id: 12,
        title: 'УЧИНИКАМ',
        to: '/',
        childs: [
          {
            id: 13,
            title: 'Бронирование очереди на посещение приемной комиссии',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Результаты конкурсного отбора',
            to: '/',
            childs: []
          }
        ]
      },
      {
        id: 12,
        title: 'УЧИТЕЛЯМ',
        to: '/',
        childs: [
          {
            id: 13,
            title: 'Бронирование очереди на посещение приемной комиссии',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Результаты конкурсного отбора',
            to: '/',
            childs: []
          }
        ]
      },
      {
        id: 12,
        title: 'РОДИТЕЛЯМ',
        to: '/',
        childs: [
          {
            id: 13,
            title: 'Бронирование очереди на посещение приемной комиссии',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Результаты конкурсного отбора',
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
            title: 'Бронирование очереди на посещение приемной комиссии',
            to: '/',
            childs: []
          },
          {
            id: 14,
            title: 'Результаты конкурсного отбора',
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
            title: 'Проекты',
            to: '/',
            childs: [
              {
                id: 22,
                title: '100 книг',
                to: '/',
                childs: []
              },
              {
                id: 22,
                title: 'NIS MASS MEDIA',
                to: '/',
                childs: []
              }
            ]
          },
          {
            id: 21,
            title: 'СПАРТАКИАДА',
            to: '/',
            childs: [
              {
                id: 22,
                title: 'Спорт',
                to: '/',
                childs: []
              }
            ]
          },
          {
            id: 21,
            title: 'Шаныраки',
            to: '/',
            childs: [
              {
                id: 22,
                title: '«Алакөл» шаңырағы',
                to: '/',
                childs: []
              },
              {
                id: 22,
                title: '«Алатау» шаңырағы',
                to: '/',
                childs: []
              }
            ]
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
            title: 'СМИ о нас',
            to: '/',
            childs: []
          }
        ]
      },
      /*      {
             id: 48,
             title: 'БИБЛИОТЕКА',
             to: '/',
             childs: [
               {
                 id: 49,
                 title: 'Новости библиотеки',
                 to: '/',
                 childs: []
               },
               {
                 id: 50,
                 title: 'О библиотеке',
                 to: '/',
                 childs: []
               },
               {
                 id: 51,
                 title: 'Проекты библиотеки',
                 to: '/',
                 childs: []
               }
             ]
           },
          {
             id: 48,
             title: 'Для методической работы',
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
                 title: 'СМИ о нас',
                 to: '/',
                 childs: []
               }
             ]
           },*/
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
