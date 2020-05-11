<template>
  <div class="recipe">
      <h2>{{name}}</h2>
      <img :src="photo_path">
  </div>
</template>

<script>
export default {
    props:{
        name: {
            type: String,
            required: true
        },
        category_time:{
            type: String,
            required: true
        },
        photo_path:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        wheat_allergy:{
            type: Number,
            required: true
        },
        milk_allergy:{
            type: Number,
            required: true
        },
        allergies_list:{
            type: String,
            required: true
        },
        calories:{
            type: Number,
            required: true
        },
        protein:{
            type: Number,
            required: true
        },
        carbs:{
            type: Number,
            required: true
        },
        fats:{
            type: Number,
            required: true
        },
        rating:{
            type: Number,
            required: true
        }
        
    }
}
</script>

<style>

</style>