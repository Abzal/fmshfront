import {
    SET_TEACHERS_MUTATION,
} from "@/store/storeconstants";

export default {
    [SET_TEACHERS_MUTATION](state, payload){
        state.teachers = payload;
    },

};