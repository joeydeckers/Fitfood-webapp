<template>
  <div>
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <b-container>
      <Navbar/>
      <nuxt />
    </b-container>
  </div>
</template>

<script>
import { vueTopprogress } from 'vue-top-progress'

import Navbar from '@/components/Navbar.vue'

export default {
  components:{
    Navbar,
    vueTopprogress
  },
  mounted () {
    this.$refs.topProgress.start()

    // Use setTimeout for demo
    setTimeout(() => {
      this.$refs.topProgress.done()
    }, 2000)
  },
  created(){
    this.$store.dispatch('user/setToken');
  }
}
</script>