import {
  AUTH_ACTION,
  AUTO_LOGIN_ACTION, AUTO_LOGOUT_ACTION,
  LOGIN_ACTION,
  LOGOUT_ACTION, SET_AUTO_LOGOUT_MUTATION, SET_USER_DATA_MUTATION
} from "@/store/storeconstants";
import axios from "axios";
import LoginValidation from "@/services/LoginValidation";

let timer = '';
export default {
  async [LOGIN_ACTION](context, payload) {
    return context.dispatch(AUTH_ACTION, {
      ...payload,
      url: `user/ldap-login`
    })
  },
  [LOGOUT_ACTION](context) {
    context.commit(SET_USER_DATA_MUTATION, {
      email: null,
      token: null,
      name: null,
      iin: null,
    });
    context.commit(SET_USER_DATA_MUTATION, {});
    sessionStorage.removeItem('user');
    if (timer) {
      clearTimeout(timer);
    }
  },

  [AUTO_LOGIN_ACTION](context) {
    let user = sessionStorage.getItem('user');
    try {
      if (user) {
        let userData = JSON.parse(user);
        context.commit(SET_USER_DATA_MUTATION, userData);
        axios.defaults.headers.common = {'Authorization': `Bearer ${userData.token}`};
      }
    } catch (e) {
      sessionStorage.removeItem('user');
      location.reload();
    }
  },

  [AUTO_LOGOUT_ACTION](context) {
    context.dispatch(LOGOUT_ACTION);
  },

  async [AUTH_ACTION](context, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
    }

    return await axios.post(payload.url, postData).then(response => {
      if (response.status === 200) {
        sessionStorage.setItem('user', response.data.result);
        let userData = JSON.parse(response.data.result);
        context.commit(SET_USER_DATA_MUTATION, userData);
        axios.defaults.headers.common = {'Authorization': `Bearer ${userData.token}`};
        return userData;
      } else return false;
    }).catch(err => {
      //let errorMessage = LoginValidation.getErrorMessageFromCode(err.response.data.message);
      throw err;
    })
  },

};