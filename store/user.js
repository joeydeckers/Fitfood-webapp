import axios from 'axios'
// import router from './../../router'

export const state = {
    access_token:  '',
};

export const getters = {

    
};

export const actions = {
    login({commit}, user){
        axios.post('http://127.0.0.1:8000/api/user/login', {
            email: user.email,
            password: user.password
        })
        .then((response) => {
            if(process.browser){
                localStorage.setItem("access_token_fitfood", response.data.accessToken);
            }
            commit('SET_USER_TOKEN', response.data.accessToken);
        })
    },
    register({commit}, user){
        axios.post('http://127.0.0.1:8000/api/user/register', {
            email: user.email,
            password: user.password,
            password_confirmation : user.password_confirmation,
            name: user.name 
        })
        .then((response) => {
            if(process.browser){
                localStorage.setItem("access_token_fitfood", response.data.accessToken);
            }
            commit('SET_USER_TOKEN', response.data.accessToken);
        })
    }
};

export const mutations = {
    SET_USER_TOKEN(state, token){
        state.access_token = token;
    }
};

// export default {
//     state,
//     getters,
//     actions,
//     mutations
// }