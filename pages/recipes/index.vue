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
    created(){
       this.$store.dispatch('recipes/getRecipes')
    },
    computed:{
     ...mapGetters({
        getRecipes: 'recipes/getRecipesFromStore'
      }),
    },
    async fetch() {
        await this.$store.dispatch('recipes/getRecipes')
    },
    components:{
        RecipeCard
    },
    layout:'default',
    fetchOnServer: true
}
</script>
