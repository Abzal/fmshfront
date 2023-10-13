import {
    SET_TEACHERS_MUTATION,
} from "@/store/storeconstants";

export default {
    [SET_TEACHERS_MUTATION](state, payload){
        let teachers = JSON.parse(payload);

        state.teachers = teachers;

        let teachersFio = [];
        teachers.forEach(teach => {
            teachersFio.push(teach[1].values[0]);
        })

        state.teachersFio = teachersFio;

    },

};