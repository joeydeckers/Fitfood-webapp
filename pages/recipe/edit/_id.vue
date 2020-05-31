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
                        :data-type="recipeItem.datatype"
                    ></b-form-input>
                    
                    <b-form-textarea
                        v-if="recipeItem.item == 'description'"
                        v-model="recipeItem.model"
                        :type="recipeItem.type"
                        required
                        :placeholder="recipeItem.placeholder"
                        :data-type="recipeItem.datatype"
                    >
                    </b-form-textarea>

                    <b-form-select 
                        v-if="recipeItem.item == 'select'"
                        v-model="recipeItem.model" 
                        :options="recipeItem.options"
                        :placeholder="recipeItem.placeholder"
                        :data-type="recipeItem.datatype"
                    >

                    </b-form-select>
                    
                    <!-- <b-form-file
                        v-if="recipeItem.item == 'file'"
                        v-model="recipeItem.model"
                        @change="onFileChange"
                       :placeholder="recipeItem.placeholder"
                        drop-placeholder="Drop file here..."
                        ref="file"
                    ></b-form-file> -->


                </b-form-group>
                <p>Select photo</p>
                <input class="form-control" style="margin-bottom:20px" data-type="photo" ref="photo" type="file">
                <b-button type="submit" style="margin-bottom: 30px;">Create recipe</b-button>
            </b-form>
          </b-col>
      </b-row>
      {{getRecipe.recipe}}
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex';

export default {
    
    data(){
        return{
            recipeForm:[
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Enter recipe name',
                    label: 'Recipe name',
                    item: 'input',
                    datatype: 'name'
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Enter recipe description',
                    label: 'Recipe description',
                    item: 'description',
                    datatype: 'description'
                },
                {
                    model: '',
                    type: 'select',
                    placeholder: 'Give wheat allergy',
                    label: 'Give wheat allergy',
                    item: 'select',
                    datatype: 'wheat-allergy',
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
                    datatype: 'milk-allergy',
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
                    datatype: 'allergydescripion',
                },
                {
                    model: '',
                    type: 'select',
                    placeholder: 'Daytime',
                    label: 'Daytime',
                    item: 'select',
                    datatype: 'daytime',
                    options:[
                        'Noon',
                        'Afternoon',
                        'Evening',
                        'Snack'
                    ]
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Give protein',
                    label: 'Give protein',
                    datatype: 'protein',
                    item: 'input',
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Give carbs',
                    label: 'Give carbs',
                    datatype: 'carbs',
                    item: 'input',
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Give fats',
                    label: 'Give fats',
                    datatype: 'fats',
                    item: 'input',
                },
                {
                    model: '',
                    type: 'text',
                    placeholder: 'Give calories',
                    label: 'Give calories',
                    datatype: 'calories',
                    item: 'input',
                },
            ],
            photo: ''
        }
    },
    created(){
        this.$store.dispatch('recipes/getRecipe', this.$route.params.id);
        setTimeout(() => {
            let recipe = this.getRecipe.recipe;
            console.log(recipe);
        }, 500);

    },
    methods:{
        createRecipeByInput(recipe){
            this.photo = this.$refs.photo.files[0];
            let photo = '';
            var reader = new FileReader();
            reader.readAsDataURL(this.photo);
            reader.onload = function () {
                photo = reader.result;
            };
            setTimeout(() => {
                let recipeToBuild ={
                    name: recipe[0].model,
                    description: recipe[1].model, 
                    wheat_allergy: recipe[2].model, 
                    milk_allergy: recipe[3].model, 
                    allergies_list: recipe[4].model, 
                    owner_id: this.$store.getters.getCurrentUser.id,
                    votes_id: 1,
                    comments_id: 1,
                    category_time: recipe[5].model, 
                    recipe_photo: photo,
                    protein: recipe[6].model, 
                    carbs: recipe[7].model, 
                    fats: recipe[8].model, 
                    calories: recipe[9].model, 
                } 
            this.$store.dispatch('recipes/createRecipe', {vm:this, recipe:recipeToBuild})
            }, 500);
        }
    },
    computed:{
        ...mapGetters({
            getRecipe: 'recipes/getRecipeFromStore',
            user: "user/getCurrentUser"
        }),
    },
    layout:'default',
}
</script>