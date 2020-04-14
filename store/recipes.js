import axios from 'axios'
let apiRoute = "http://127.0.0.1:8000/api";

export const state = {
    recipes:  '',
    recipe: ''
};

export const getters = {
    getRecipesFromStore:(state) =>{
        return state.recipes;
    },
    getRecipeFromStore:(state) =>{
        return state.recipe;
    },
};

export const actions = {
    async getRecipes({commit}){
        await axios.get(`${apiRoute}/recipes`, {

        })
        .then((response) => {
            commit('SET_RECIPES', response.data)
        })
    },
    getRecipe({commit}, id){
        axios.get(`${apiRoute}/recipe/${id}`, {

        })
        .then((response) => {
            commit('SET_RECIPE', response.data)
        })
    }
};

export const mutations = {
    SET_RECIPES(state, recipes){
        state.recipes = recipes;
    },
    SET_RECIPE(state, recipe){
        state.recipe = recipe;
    }
};

// export default {
//     state,
//     getters,
//     actions,
//     mutations
// }