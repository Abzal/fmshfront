import {
    GET_USER_DATA_GETTER, GET_USER_TOKEN_GETTER, IS_USER_AUTHENTICATE_GETTER,
} from "@/store/storeconstants";

export default {
    [GET_USER_TOKEN_GETTER]: state => {
        return state.user.token;
    },
    [GET_USER_DATA_GETTER]: state => {
        return state.user;
    },
    [IS_USER_AUTHENTICATE_GETTER](state){
        let userStr = sessionStorage.getItem('user');
        let token = state.user.token;
        if(userStr){
            token = JSON.parse(userStr).token;
        }

        return !!token;
    },
};