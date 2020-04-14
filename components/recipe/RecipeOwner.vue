<template>
  <div class="recipe-owner">
      <h3>{{owner.name}}</h3>
  </div>
</template>

<script>
export default {
    props:{
        owner: {
            type: Object,
            required: true
        },  
    }
}
</script>
