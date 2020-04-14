<template>
  <div class="recipe-card">
    <h3>{{name}}</h3>
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
        photo_path:{
            type: String,
        }
    }
}
</script>