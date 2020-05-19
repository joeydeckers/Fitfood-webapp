<template>
  <div>
    <b-row>
        <b-col lg="3" v-for="recipe in recipes" :key="recipe.id">
        <nuxt-link :to="{ name: 'recipe-id', params: { id: recipe.id }}">
            <RecipeCard :name="recipe.name" :photo_path="recipe.photo_path" />
        </nuxt-link>
        </b-col>
    </b-row>  
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RecipeCard from "~/components/RecipeCard";

export default {
  components: {
    RecipeCard
  },
  async fetch() {
    await this.$store.dispatch("recipes/getUserRecipes", this.$route.params.id);
  },
  layout: "default",
  fetchOnServer: true,
  computed: mapGetters({
    recipes: "recipes/getUserRecipesFromStore"
  })
};
</script>

<style>
</style>