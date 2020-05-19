<template>
  <div>
    <b-container>
      <Navbar/>
      <nuxt />
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components:{
    Navbar
  },
  created(){
    this.$store.dispatch('user/setToken');
  }
}
</script>