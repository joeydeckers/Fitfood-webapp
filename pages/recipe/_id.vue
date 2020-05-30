<template>
  <div>
      <Recipe
        :name="getRecipe.recipe.name"
        :category_time="getRecipe.recipe.category_time"
        :photo_path="getRecipe.recipe.photo_path"
        :description="getRecipe.recipe.description"
        :wheat_allergy="getRecipe.recipe.wheat_allergy"
        :milk_allergy="getRecipe.recipe.milk_allergy"
        :allergies_list="getRecipe.recipe.allergies_list"
        :calories="getRecipe.recipe.calories"
        :protein="getRecipe.recipe.protein"
        :carbs="getRecipe.recipe.carbs"
        :fats="getRecipe.recipe.fats"
        :rating="getRecipe.rating"
      />
      <!-- <RecipeComments 
        :comments="getRecipe.comments"
      /> -->
      <RecipeOwner
        :owner="getRecipe.user"
      />
      <nuxt-link to="/" v-if="getRecipe.recipe.owner_id == user.id">Bijwerken</nuxt-link>
      <b-button @click="deleteRecipe" variant="danger" v-if="getRecipe.recipe.owner_id == user.id">Verwijderen</b-button>
    </div>  
</template>

<script>
import { mapGetters } from 'vuex';
import Recipe from '@/components/recipe/Recipe'
import RecipeComments from '@/components/recipe/RecipeComments'
import RecipeOwner from '@/components/recipe/RecipeOwner'

export default {
    layout:'default',
    computed:{
     ...mapGetters({
        getRecipe: 'recipes/getRecipeFromStore',
        user: "user/getCurrentUser"
      }),
    },
    components:{
        Recipe,
        RecipeComments,
        RecipeOwner
    },
    methods:{
      deleteRecipe(){
        this.$store.dispatch('recipes/deleteRecipe', this.$route.params.id)
      }
    },
    async fetch() {
      await this.$store.dispatch('recipes/getRecipe', this.$route.params.id)
    },
    fetchOnServer: true
}
</script>