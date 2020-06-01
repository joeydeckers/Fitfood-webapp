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
    createRecipe({commit}, {vm, recipe}){
        if(recipe.wheat_allergy == 'true'){
            recipe.wheat_allergy = 1;
        }

        if(recipe.milk_allergy == 'true'){
            recipe.milk_allergy = 1;
        }
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
            vm.$bvToast.toast('Recipe created', {
                title: 'Recipe created!',
                autoHideDelay: 5000,
                variant: 'success'
            })
            setTimeout(() => {
                this.$router.push({name:'recipes'})
            }, 2000);
            commit('SET_RECIPE', response.data)
        })
    },

    async updateRecipe({commit}, {vm, recipe}){
        if(recipe.wheat_allergy == 'true'){
            recipe.wheat_allergy = 1;
        }

        if(recipe.milk_allergy == 'true'){
            recipe.milk_allergy = 1;
        }

        if(!recipe.photo_path == null){
            await axios({
                method: 'put',
                url: `${apiRoute}/recipe/${recipe.id}`,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: 'Bearer '+ localStorage.getItem('access_token_fitfood')
                },
                data: {
                    name: recipe.name,
                    description: recipe.description,
                    wheat_allergy: recipe.wheat_allergy,
                    milk_allergy: recipe.milk_allergy,
                    allergies_list: recipe.allergies_list,
                    owner_id: recipe.owner_id,
                    votes_id: recipe.votes_id,
                    comments_id: recipe.comments_id,
                    category_time: recipe.category_time,
                    protein: recipe.protein,
                    carbs: recipe.carbs,
                    fats: recipe.fats,
                    calories: recipe.calories,
                }
            })
            .then((response) =>{
                vm.$bvToast.toast('Recipe updated', {
                    title: 'Recipe updated!',
                    autoHideDelay: 5000,
                    variant: 'success'
                })
                setTimeout(() => {
                   // this.$router.push({name:'recipes'})
                }, 2000);
                //commit('SET_RECIPE', response.data)
            })
        }else{
            await axios({
                method: 'put',
                url: `${apiRoute}/recipe/${recipe.id}`,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: 'Bearer '+ localStorage.getItem('access_token_fitfood')
                },
                data: {
                    name: recipe.name,
                    description: recipe.description,
                    wheat_allergy: recipe.wheat_allergy,
                    milk_allergy: recipe.milk_allergy,
                    allergies_list: recipe.allergies_list,
                    owner_id: recipe.owner_id,
                    votes_id: recipe.votes_id,
                    comments_id: recipe.comments_id,
                    category_time: recipe.category_time,
                    photo_path: recipe.recipe_photo,
                    protein: recipe.protein,
                    carbs: recipe.carbs,
                    fats: recipe.fats,
                    calories: recipe.calories,
                }
            })
            .then((response) =>{
                vm.$bvToast.toast('Recipe updated', {
                    title: 'Recipe updated!',
                    autoHideDelay: 5000,
                    variant: 'success'
                })
                setTimeout(() => {
                   // this.$router.push({name:'recipes'})
                }, 2000);
                //commit('SET_RECIPE', response.data)
            })
        }


    },
    async filterRecipe({commit}, filter){
        await axios.post(`${apiRoute}/recipe/filter`,{
            carbs: filter.carbs,
            fats: filter.fats,
            calories: filter.calories,
            protein: filter.protein
        })
        .then((response => {
            commit('SET_RECIPES', response.data)
        }))
    },
    async deleteRecipe({commit}, {vm, id}){
        if(process.browser){
            await axios.delete(`${apiRoute}/recipe/${id}`, {
                headers:{
                    Authorization: 'Bearer ' + localStorage.getItem('access_token_fitfood')
                }
            })
            .then((response)=>{
                vm.$bvToast.toast(`${response.data.Message}`, {
                    title: 'Recipe deleted!',
                    autoHideDelay: 5000,
                    variant: 'success'
                })
                setTimeout(() => {
                    this.$router.push({name:'recipes'})
                }, 2000);
               
            })
            .catch((error)=>{
                alert(error);
            })
        }
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