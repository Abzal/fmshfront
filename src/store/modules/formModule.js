import axios from "axios"

export default {
    state: {

    },
    mutations: {

    },
    actions: {
        async getTestById(context, payload) {

            return await axios.post(`form`,payload).then(res => {
                return res.data;
            }).catch(err => {
                return Promise.reject(err.response.data);
            });

        }
    },
    namespaced: true
}