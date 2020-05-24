<template>
  <div id="recipe-filter">
      <b-input v-model="calories" placeholder="Calories"/>
      <b-input v-model="protein" placeholder="Protein"/>
      <b-input v-model="carbs" placeholder="Carbs"/>
      <b-input v-model="fats" placeholder="Fats"/>
      <b-button @click="applyFilter" variant="primary">Apply</b-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      calories: '',
      protein: '',
      carbs: '',
      fats: ''
    }
  },
  methods:{
    applyFilter(){
      if(this.calories == ''){
        this.calories = 0;
      }
      if(this.protein == ''){
        this.protein = 0;
      }
      if(this.carbs == ''){
        this.carbs = 0;
      }
      if(this.fats == ''){
        this.fats = 0;
      }
      this.$router.push({name: 'recipes', query: {calories: this.calories, protein: this.protein, carbs: this.carbs, fats: this.fats}});
    }
  }
}
</script>
