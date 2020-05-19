<template>
  <div class="recipe-owner">
      <nuxt-link :to="{name: 'account-id', params:{id: owner.id}}"><p>Recipe created by: {{owner.name}}</p></nuxt-link>
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
