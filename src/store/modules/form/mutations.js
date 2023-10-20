import {
    SET_TEACHERS_MUTATION,
} from "@/store/storeconstants";

export default {
    [SET_TEACHERS_MUTATION](state, payload){
        let teachers = JSON.parse(payload);

        state.teachers = teachers;

        let teachersFio = [];

        teachers.forEach(teach => {
            let iinFio = '';
            let email = '';
            teach.forEach(tch => {
                /*if(tch.type === 'nISEDUKZIIN' || tch.type === 'displayName'){
                    iinFio.length > 0? iinFio += ' ' + tch.values[0] : iinFio += tch.values[0];
                }*/
                if(tch.type === 'displayName'){
                    iinFio += tch.values[0];
                }
                if(tch.type === 'userPrincipalName'){
                    email = tch.values[0];
                }
            })
            if(iinFio.length> 0 && email.length > 0)
                teachersFio.push({"title": iinFio,"desc":email});
        })
        state.teachersFio = teachersFio;

    },

};