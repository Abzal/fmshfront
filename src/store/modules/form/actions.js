import axios from "axios";
import {FETCH_TEACHERS_ACTION, SET_TEACHERS_MUTATION} from "@/store/storeconstants";

export default {
  async [FETCH_TEACHERS_ACTION](context, payload) {
    return await axios.post('user/teachers', payload).then(response => {
      console.log(response)
      if (response.status === 200) {
        context.commit(SET_TEACHERS_MUTATION, response.data.result);
        return true;
      } else return false;
    }).catch(err => {
      return false;
    })
  },

  async getTestById(context, payload) {

    return await axios.post(`form`,payload).then(res => {
      return res.data;
    }).catch(err => {
      return Promise.reject(err.response.data);
    });

  }
};