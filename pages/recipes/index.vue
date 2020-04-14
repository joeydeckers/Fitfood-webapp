<template>
    <b-row>
        <b-col lg="3" v-for="recipe in getRecipes" :key="recipe.id">
            <nuxt-link :to="{ name: 'recipe-id', params: { id: recipe.id }}">
                <RecipeCard
                    :name="recipe.name"
                    :photo_path="recipe.photo_path"
                />
            </nuxt-link>
        </b-col>
    </b-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RecipeCard from '~/components/RecipeCard'

export default {
    methods:{
        getAllRecipesFromStore(){
            this.$store.dispatch('recipes/getRecipes')
        }
    },
    created(){
       this.getAllRecipesFromStore();
    },
    computed:{
     ...mapGetters({
        getRecipes: 'recipes/getRecipesFromStore'
      }),
    },
    components:{
        RecipeCard
    },
    layout:'default',
    fetchOnServer: true
}
</script>
