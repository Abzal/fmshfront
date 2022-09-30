export default {
  state: {

    mainMenuData: [
      {
        id: 1,
        title: {ru:'О НАС',kz:'BIZ TWRALI',en:'ABOUT US'},
        to: '/',
        childs: [
          {
            id: 2,
            title: {ru:'О школе',kz:'Mektep twralı',en:'About school'},
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
            title: {ru:'Наша команда',kz:'Bizdiñ top',en:'Our team'},
            to: '/team/all',
            childs: [
              {
                id: 2,
                title: {ru:'Преподавательский состав (кафедры)',kz:'Oqıtwşılar quramı (kafedralar)',en:'Teaching staff (departments)'},
                to: '/',
                childs: []
              },
              {
                id: 3,
                title: {ru:'Учебно-вспомогательный персонал',kz:'Pedagogïkalıq kömekşi personal',en:'Teaching support staff'},
                to: '/team/kurators',
                childs: []
              },
              {
                id: 2,
                title: {ru:'Администрация школы',kz:'Mektep äkimşiligi',en:'School administration'},
                to: '/',
                childs: []
              },
              {
                id: 3,
                title: {ru:'Общежитие',kz:'Jataqxana',en:'Hostel'},
                to: '/',
                childs: []
              },

            ]
          },
          {
            id: 3,
            title: {ru:'Попечительский совет',kz:'Qamqorşılıq keñesi',en:'Board of Trustees'},
            to: '/coming',
            childs: []
          },

        ]
      },
      {
        id: 12,
        title: {ru:'УЧЕНИКАМ',kz:'OQWŞILARGA',en:'FOR STUDENTS'},
        to: '/coming',
        childs: [
          {
            id: 13,
            title: {ru:'Совет лидеров',kz:'Köşbasşılar keñesi',en:'Council of Leaders'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Расписание уроков',kz:'Sabaq kestesi',en:'schedule of lessons'},
            to: '/coming',
            childs: []
          },
          {
            id: 13,
            title: {ru:'Ресурсный центр (подкурсы)',kz:'Reswrstıq ortalıq (kişi kwrstar)',en:'Resource Center (sub-courses)'},
            to: '/coming',
            childs: []
          },
          {
            id: 13,
            title: {ru:'Олимпийский центр',kz:'Olïmpïada ortalığı',en:'Olympic Center'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Элективные курсы',kz:'Tañdaw kwrstarı',en:'Elective courses'},
            to: '/coming',
            childs: []
          },
          {
            id: 13,
            title: {ru:'Руководство для учащихся и родителей',kz:'Oqwşılar men ata-analarğa arnalğan nusqawlıq',en:'Guide for students and parents'},
            to: '/coming',
            childs: []
          },
        ]
      },
      {
        id: 12,
        title: {ru:'УЧИТЕЛЯМ',kz:'MUĞALIMDER ÜŞIN',en:'FOR TEACHERS'},
        to: '/coming',
        childs: [
          {
            id: 13,
            title: {ru:'Нормативные документы',kz:'Ережелер',en:'Regulations'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Конкурсы для пед работников',kz:'Ped jumısşılarına arnalğan jarıstar',en:'Competitions for ped workers'},
            to: '/coming',
            childs: []
          },
          {
            id: 13,
            title: {ru:'Публикации педагогов',kz:'Pedagogtardıñ basılımdarı',en:'Publications of educators'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Сертифицированные тренеры',kz:'Sertïfïkattalğan jattıqtırwşılar',en:'Certified trainers'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Профессиональное развитие (ресурсы для учителей)',kz:'Biliktilikti arttırw (muğalimderge arnalğan reswrstar)',en:'Professional Development (Resources for Teachers)'},
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
            title: {ru:'Задать вопрос директору',kz:'Dïrektorğa suraq qoyıñız',en:'Ask a question to the director'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Родительский комитет',kz:'Ata-analar komïteti',en:'Parental committee'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Образовательная модель школы',kz:'Mekteptiñ tärbïe modeli',en:'The educational model of the school'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Структура системы оценки',kz:'Bağalaw jüyesiniñ qurılımı',en:'Structure of the assessment system'},
            to: '/coming',
            childs: []
          }

        ]
      },
      {
        id: 12,
        title: {ru:'ПРЕТЕНДЕНТАМ',kz:'Ötiniş berwşilerge',en:'FOR APPLICANTS'},
        to: '/coming',
        childs: [
          {
            id: 13,
            title: {ru:'Конкурсный отбор',kz:'Konkwrstıq iriktew',en:'Competitive selection'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Виртуальная школа',kz:'vïrtwaldı mektep',en:'virtual school'},
            to: '/coming',
            childs: []
          },
          {
            id: 14,
            title: {ru:'Каникулярная школа',kz:'demalıs mektebi',en:'vacation school'},
            to: '/coming',
            childs: []
          }
        ]
      },
      {
        id: 20,
        title: {ru:'ШКОЛЬНАЯ ЖИЗНЬ',kz:'МЕКТЕП ӨМІРІ',en:'SCHOOL LIFE'},
        to: '/coming',
        childs: [
          {
            id: 21,
            title: {ru:'Общежитие',kz:'Jataqxana',en:'Hostel'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Социальные проекты',kz:'Älewmettik jobalar',en:'Social projects'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Кружковые занятия',kz:'Klwbtıq is-şaralar',en:'Club activities'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Профориентационная работа',kz:'Käsiptik bağdar berw jumısı',en:'Career guidance work'},
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
            title: {ru:'Библиотека',kz:'Library',en:'Kitapxana'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Психологическая служба',kz:'Psïxologïyalıq qızmet',en:'Psychological service'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Служба питания',kz:'Tamaqtanw qızmeti',en:'Food Service'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Медицинская служба',kz:'medïcïnalıq qızmet',en:'medical service'},
            to: '/coming',
            childs: []
          },
          {
            id: 21,
            title: {ru:'Летняя школа',kz:'Jazğı mektep',en:'Summer school'},
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
            title: {ru:'Новости',kz:'Jañalıqtar',en:'News'},
            to: '/coming',
            childs: []
          },
          {
            id: 50,
            title: {ru:'Фото и видео',kz:'Foto jäne beyne',en:'Photo and video'},
            to: '/coming',
            childs: []
          },
          {
            id: 51,
            title: {ru:'О нас в СМИ',kz:'Buqaralıq aqparat quraldarında biz twralı',en:'About us in the media'},
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
            title: {ru:'Наши обязательства',kz:'Bizdiñ mindettemelerimiz',en:'Our Commitments'},
            to: '/coming',
            childs: []
          },
          {
            id: 56,
            title: {ru:'Кого мы ищем',kz:'Kimdi izdeymiz',en:'Who are we looking for'},
            to: '/coming',
            childs: []
          },
          {
            id: 57,
            title: {ru:'Вакансии',kz:'Jumıs orındarı',en:'Jobs'},
            to: '/coming',
            childs: []
          },
          {
            id: 58,
            title: {ru:'Итоги отбора',kz:'Tañdaw nätïjeleri',en:'Selection results'},
            to: '/coming',
            childs: []
          },
          {
            id: 59,
            title: {ru:'Процесс подбора',kz:'Tañdaw procesi',en:'Selection process'},
            to: '/coming',
            childs: []
          },
          {
            id: 61,
            title: {ru:'Часто задаваемые вопросы',kz:'Jïi qoyılatın suraqtar',en:'Frequently asked Questions'},
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
