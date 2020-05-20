<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Fitfood</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"><n-link to="/recipes" no-prefetch>Recipes</n-link></b-nav-item>
          <b-nav-item href="#"><n-link to="/recipes" no-prefetch>Hallo</n-link></b-nav-item>
          <b-nav-item href="#" v-if="token"><n-link to="/recipe/create" no-prefetch>Create recipe</n-link></b-nav-item>
          <b-nav-item href="#" v-if="token"><nuxt-link :to="{name: 'account-id', params:{id: user.id}}" no-prefetch>My account</nuxt-link></b-nav-item>
          <b-nav-item href="#" v-if="!token"><n-link to="/register" no-prefetch>Register</n-link></b-nav-item>
          <b-nav-item href="#" v-if="!token"><n-link to="/login" no-prefetch>Login</n-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    token: 'user/getAccess_token',
    user: 'user/getCurrentUser'
  }),
  created(){
    this.$store.dispatch('user/getCurrentUser');
  }
}
</script>
