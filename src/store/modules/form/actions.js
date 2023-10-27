import axios from "axios";
import {
  FETCH_ALL_ANSWERS_ACTION,
  FETCH_TEACHERS_ACTION, FETCH_USER_ANSWERS_ACTION,
  SAVE_FORM_ACTION,
  SAVE_FORM_ANSWER_ACTION,
  SET_TEACHERS_MUTATION
} from "@/store/storeconstants";

export default {
  async [FETCH_TEACHERS_ACTION](context, payload) {
    return await axios.post('user/teachers', payload).then(response => {
      if (response.status === 200) {
        context.commit(SET_TEACHERS_MUTATION, response.data.result);
        return true;
      } else return false;
    }).catch(err => {
      return false;
    })
  },

  async [SAVE_FORM_ACTION](context, payload) {
    return await axios.post('form', payload).then(response => {
      if (response.status === 200) {
        return true;
      }else return false;
    }).catch(error => {
      console.log(error);
      return false;
    })
  },

  async [SAVE_FORM_ANSWER_ACTION](context, payload) {
    return await axios.post('form/answers', payload).then(response => {
      if (response.status === 200) {
        return true;
      }else return false;
    }).catch(error => {
      console.log(error);
      return false;
    })
  },

  async [FETCH_USER_ANSWERS_ACTION](context, payload) {
    return await axios.post('form/answers/my', payload).then(response => {
      if (response.status === 200) {

        let otvet = [];

        response.data.result.forEach(ans => {
          let value =  new Date(ans.createdAt);
          let title = value.toLocaleDateString('kz-KZ', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          otvet.push({...ans, ...{formatedDate: title}});
        })

        return otvet;
      }else return false;
    }).catch(error => {
      console.log(error);
      return false;
    })
  },

  async [FETCH_ALL_ANSWERS_ACTION](context, payload) {
    return await axios.post('form/answers/all', payload).then(response => {
      if (response.status === 200) {

        let otvet = [];

        response.data.result.forEach(ans => {
          let value =  new Date(ans.createdAt);
          let title = value.toLocaleDateString('kz-KZ', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          otvet.push({...ans, ...{formatedDate: title}});
        })

        return otvet;
      }else return false;
    }).catch(error => {
      console.log(error);
      return false;
    })
  }


};