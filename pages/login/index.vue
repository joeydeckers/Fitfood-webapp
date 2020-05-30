<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="4" class="mx-auto">
          <h2>Login</h2>
          <b-form @submit.prevent="loginUser">
            <b-form-group>
              <b-input placeholder="email" v-model="email" type="text" data-type="email"/>
            </b-form-group>
            <b-form-group>
              <b-input placeholder="password" v-model="password" type="password" data-type="password"/>
            </b-form-group>
            <b-button type="submit">Login</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";  

export default {
  layout:'default',
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser() {
    let user = {
        email: this.email,
        password: this.password
    }
    this.$store.dispatch('user/login', user)
    }
  }
};
</script>

<style>
</style>