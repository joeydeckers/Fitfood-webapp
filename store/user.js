import axios from 'axios'
let apiRoute = "https://fitfood-api.herokuapp.com/api";

export const state = {
    access_token:  '',
};

export const getters = {
    getAccess_token: (state) =>{
        return state.access_token;
    }
};

export const actions = {
    login({commit}, user){
        axios.post(`${apiRoute}/user/login`, {
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
        axios.post(`${apiRoute}/user/register`, {
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
    },
    setToken({commit}){
        let token = '';
        if(process.browser){
            token = localStorage.getItem("access_token_fitfood");
        }
        commit('SET_USER_TOKEN', token);
    }
};

export const mutations = {
    SET_USER_TOKEN(state, token){
        state.access_token = token;
    }
};