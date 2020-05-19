import axios from 'axios'
let apiRoute = "https://fitfood-api.herokuapp.com/api";

export const state = {
    recipes:  '',
    recipe: '',
    userRecipes: ''
};

export const getters = {
    getRecipesFromStore:(state) =>{
        return state.recipes;
    },
    getRecipeFromStore:(state) =>{
        return state.recipe;
    },
    getUserRecipesFromStore:(state) =>{
        return state.userRecipes;
    }
};

export const actions = {
    async getRecipes({commit}){
        await axios.get(`${apiRoute}/recipes`, {

        })
        .then((response) => {
            commit('SET_RECIPES', response.data)
        })
    },
    async getRecipe({commit}, id){
        await axios.get(`${apiRoute}/recipe/${id}`, {

        })
        .then((response) => {
            commit('SET_RECIPE', response.data)
        })
    },
    async getUserRecipes({commit}, id){
        await axios.get(`${apiRoute}/user/recipes/${id}`)
        .then((response) =>{
            commit('SET_USER_RECIPES', response.data);
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
    },
    SET_USER_RECIPES(state, recipes){
        state.userRecipes = recipes;
    }
};

// export default {
//     state,
//     getters,
//     actions,
//     mutations
// }