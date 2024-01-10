import axios from "axios";
import {CREATE_PLAN_ACTION, CREATE_PROFILE_ACTION, GET_TEACHER_PROFILE_ACTION} from "@/store/storeconstants";

export default {

  async [CREATE_PROFILE_ACTION](context, payload) {
    return await axios.post('user/teacher/create-profile', payload).then(response => {
      if (response.status === 200) {
        return true;
      }else return false;
    }).catch(error => {
      console.log(error);
      return false;
    })
  },

  async [CREATE_PLAN_ACTION](context, payload) {
    return await axios.post('user/teacher/create-plan', payload).then(response => {
      if (response.status === 200) {
        return true;
      }else return false;
    }).catch(error => {
      console.log(error);
      return false;
    })
  },

  async [GET_TEACHER_PROFILE_ACTION](context, payload) {
    return await axios.get(`user/teacher/profile/${payload}`).then(response => {
      if (response.status === 200) {
        return response.data;
      }else return null;
    }).catch(error => {
      console.log(error);
      return null;
    })
  }

};