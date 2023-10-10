import {
    SET_USER_DATA_MUTATION,
} from "@/store/storeconstants";

export default {
    [SET_USER_DATA_MUTATION](state, payload){
        state.user = payload;
    },

};