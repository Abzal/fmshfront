import {
    GET_TEACHERS_FIO_GETTER,
    GET_TEACHERS_GETTER,
} from "@/store/storeconstants";

export default {
    [GET_TEACHERS_GETTER]: state => {
        return state.teachers;
    },

    [GET_TEACHERS_FIO_GETTER]: state => {
        return state.teachersFio;
    }
};