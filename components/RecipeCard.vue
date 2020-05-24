<template>
  <div class="recipe-card">
    <img :src="photo_path">
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
    props:{
        name: {
            type: String,
            required: true
        },
        photo_path:{
            type: String,
        }
    }
}
</script>