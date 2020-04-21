<template>
  <div>
      <b-row>
          <b-col lg="5" class="mx-auto">
            <b-form @submit.prevent="createRecipeByInput(recipeForm)">
                <b-form-group
                    v-for="recipeItem in recipeForm" :key = "recipeItem.id"
                    :label="recipeItem.label"
                >
                    <b-form-input
                        v-if="recipeItem.item == 'input'"
                        v-model="recipeItem.model"
                        :type="recipeItem.type"
                        required
                        :placeholder="recipeItem.placeholder"
                    ></b-form-input>
                    
                    <b-form-textarea
                        v-if="recipeItem.item == 'description'"
                        v-model="recipeItem.model"
                        :type="recipeItem.type"
                        required
                        :placeholder="recipeItem.placeholder"
                    >
                    </b-form-textarea>

                    <b-form-select 
                        v-if="recipeItem.item == 'select'"
                        v-model="recipeItem.model" 
                        :options="recipeItem.options"
                        :placeholder="recipeItem.placeholder"
                    >

                    </b-form-select>
                    
                    <b-form-file
                        v-if="recipeItem.item == 'file'"
                        v-model="recipeItem.model"
                        @change="onFileChange"
                       :placeholder="recipeItem.placeholder"
                        drop-placeholder="Drop file here..."
                        ref="file"
                    ></b-form-file>

                </b-form-group>
                <button type="submit">test</button>
            </b-form>
          </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            recipeForm:[
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Enter recipe name',
                    label: 'Recipe name',
                    item: 'input'
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Enter recipe description',
                    label: 'Recipe description',
                    item: 'description'
                },
                {
                    model: '',
                    type: 'select',
                    placeholder: 'Give wheat allergy',
                    label: 'Give wheat allergy',
                    item: 'select',
                    options:[
                        'true',
                        'false'
                    ]
                },
                {
                    model: '',
                    type: 'select',
                    placeholder: 'Give wheat milk allergy',
                    label: 'Give milk allergy',
                    item: 'select',
                    options:[
                        'true',
                        'false'
                    ]
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Give allgery description',
                    label: 'Give allgery description',
                    item: 'description',
                },
                {
                    model: '',
                    type: 'select',
                    placeholder: 'Daytime',
                    label: 'Daytime',
                    item: 'select',
                    options:[
                        'Noon',
                        'Afternoon',
                        'Evening',
                        'Snack'
                    ]
                },
                {
                    model: null,
                    type: 'file',
                    placeholder: 'Photo',
                    label: 'Give photo',
                    item: 'file',
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Give protein',
                    label: 'Give protein',
                    item: 'input',
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Give carbs',
                    label: 'Give carbs',
                    item: 'input',
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Give fats',
                    label: 'Give fats',
                    item: 'input',
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Give calories',
                    label: 'Give calories',
                    item: 'input',
                },
            ],
            file: ''
        }
    },
    methods:{
        onFileChange(e){
            console.log(e.target.files[0]);
            this.file = e.target.files[0];
        },
        createRecipeByInput(recipe){
            let formData = new FormData();
            formData.append('file', this.file);

            let recipeToBuild ={
                name: recipe[0].model,
                description: recipe[1].model, 
                wheat_allergy: recipe[2].model, 
                milk_allergy: recipe[3].model, 
                allergies_list: recipe[4].model, 
                owner_id: 1,
                votes_id: 1,
                comments_id: 1,
                category_time: recipe[5].model, 
                recipe_photo: formData,
                protein: recipe[7].model, 
                carbs: recipe[8].model, 
                fats: recipe[9].model, 
                calories: recipe[10].model, 
            }
            this.$store.dispatch('recipes/createRecipe', recipeToBuild)
            console.log(recipeToBuild);
        }
    },
    layout:'default',
}
</script>

<style>

</style>