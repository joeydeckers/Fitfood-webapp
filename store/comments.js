import axios from 'axios'
let apiRoute = "https://fitfood-api.herokuapp.com/api";

export const state = {
    comments:  '',
};

export const getters = {
    getComments: (state) =>{
        return state.comments;
    },
};

export const actions = {
    async addComment({commit}, {vm, comment}){
        await axios.post(`${apiRoute}/recipe/addcomment/${comment.recipe_id}`, {
            owner_id: comment.owner_id,
            //recipe_id: comment.recipe_id,
            comment_text: comment.comment_text
        })
        .then((response) => {
            vm.$bvToast.toast('Comment added', {
                title: 'Comment added!',
                autoHideDelay: 5000,
                variant: 'success'
            })
            commit('SET_COMMENTS', response.data);
        })
    },
};

export const mutations = {
    SET_COMMENTS(state, comments){
        state.comments = comments;
    },
};