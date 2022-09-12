export default {
  state: {

    documentData: [
      {
        title: "Нормативные документы",
        childs: [
          {
            name: "Правила внутреннего распорядка для учащихся Назарбаев Интеллектуальных школ",
            created_date: "04 августа 2022 года",
            url: "https://mailnisedu-my.sharepoint.com/:b:/g/personal/abzal_amantay_fmsh_nis_edu_kz/Ee2Mo6eZavZFh3EL5zu3MFoB56EriLtB9o9MVOqa_ctXUg?e=qI0Ttm"
          },
          {
            name: "Правила общежития",
            created_date: "01.06.2022года",
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
