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
    },
    createRecipe({commit}, recipe){
        axios.post(`${apiRoute}/recipe/create`, {
            name: recipe.name,
            description: recipe.description,
            wheat_allergy: recipe.wheat_allergy,
            milk_allergy: recipe.milk_allergy,
            allergies_list: recipe.allergies_list,
            owner_id: recipe.owner_id,
            votes_id: recipe.votes_id,
            comments_id: recipe.comments_id,
            category_time: recipe.category_time,
            recipe_photo: recipe.recipe_photo,
            protein: recipe.protein,
            carbs: recipe.carbs,
            fats: recipe.fats,
            calories: recipe.calories,
        })
        .then((response) =>{
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