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
      <RecipeComments
        v-if="getRecipe.comments" 
        :comments="getRecipe.comments"
      />
      <RecipeOwner
        :owner="getRecipe.user"
      />
      <div v-if="getRecipe.recipe.owner_id == user.id">
        <nuxt-link  :to="{name: 'recipe-edit-id', params:{id:this.$route.params.id}}">
          <b-button >Bijwerken</b-button>
        </nuxt-link>
        <b-button @click="deleteRecipe" variant="danger" v-if="getRecipe.recipe.owner_id == user.id">Delete</b-button>
      </div>

      <b-form @submit.prevent="comment" v-else>
        <b-input data-type="comment" v-model="text" placeholder="Your comment"></b-input>
        <b-button  type="submit" variant="danger">Comment</b-button>
      </b-form>
    </div>  
</template>

<script>
import { mapGetters } from 'vuex';
import Recipe from '@/components/recipe/Recipe'
import RecipeComments from '@/components/recipe/RecipeComments'
import RecipeOwner from '@/components/recipe/RecipeOwner'

export default {
    layout:'default',
    data(){
      return{
        text: ''
      }
    },
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
        this.$store.dispatch('recipes/deleteRecipe', {vm:this, id:this.$route.params.id})
      },
      comment(){
        this.$store.dispatch('comments/addComment', {
          vm:this,
          comment:{
            recipe_id:this.$route.params.id,
            owner_id: this.user.id,
            comment_text: this.text
          } 
        })
      }
    },
    async fetch() {
      await this.$store.dispatch('recipes/getRecipe', this.$route.params.id)
    },
    fetchOnServer: true
}
</script>