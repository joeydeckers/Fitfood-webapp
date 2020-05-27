<template>
    <div id="recipes">
        <div>
            <h2>All recipes</h2>
            <b-button @click='toggleFilter' variant="primary">Filter</b-button>
            <RecipeFilter v-if="showFilter"/>
        </div>
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
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RecipeCard from '~/components/RecipeCard'
import RecipeFilter from '~/components/RecipeFilter'

export default {
    data(){
        return{
            showFilter: false
        }
    },
    methods:{
        toggleFilter(){
            this.showFilter = !this.showFilter
        }
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
        RecipeCard,
        RecipeFilter
    },
    watch:{
        $route(to, from){
            this.$store.dispatch('recipes/getRecipes');
            this.$store.dispatch('recipes/filterRecipe', {
                carbs: to.query.carbs,
                fats: to.query.fats,
                calories: to.query.calories,
                protein: to.query.protein
            })
            console.log(to);
        }
    }, 
    layout:'default',
    fetchOnServer: true
}
</script>
