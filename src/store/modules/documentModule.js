export default {
  state: {

    documentData: [
      {
        childs: [
          {
            name: {ru:'Правила внутреннего распорядка для учащихся Назарбаев Интеллектуальных школ',kz:'Nazarbaev Ziatkerlık mektepterınıñ oquşylaryna arnalğan ışkı tärtıp erejelerı',en:'Internal regulations for students of Nazarbayev Intellectual Schools'},
            created_date: {ru:'04.11.2022',kz:'04.11.2022',en:'04.11.2022'},
            url: "https://mailnisedu-my.sharepoint.com/:b:/g/personal/abzal_amantay_fmsh_nis_edu_kz/Ee2Mo6eZavZFh3EL5zu3MFoB56EriLtB9o9MVOqa_ctXUg?e=qI0Ttm"
          },
          {
            name: {ru:'Правила общежития',kz:'Жатақхана ережелері',en:'Dormitory rules'},
            created_date: {ru:'01.06.2022',kz:'01.06.2022',en:'01.06.2022'},
            url: "https://mailnisedu-my.sharepoint.com/:b:/g/personal/abzal_amantay_fmsh_nis_edu_kz/Ee2Mo6eZavZFh3EL5zu3MFoB56EriLtB9o9MVOqa_ctXUg?e=qI0Ttm"
          }
        ]
      },
    ]
  },
  getters: {
    getDocumentData (state) {
      return state.documentData
    }
  },
  mutations: {

  },
  actions: {

  },
  namespaced: true
}
