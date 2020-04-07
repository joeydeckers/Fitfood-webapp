<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="4" class="mx-auto">
          <h2>Register</h2>
          <b-form @submit.prevent="registerUser">
            <b-form-group>
              <b-input placeholder="email" v-model="email" type="text" />
            </b-form-group>
            <b-form-group>
              <b-input placeholder="name" v-model="name" type="text" />
            </b-form-group>
            <b-form-group>
              <b-input placeholder="password" v-model="password" type="password" />
            </b-form-group>
            <b-form-group>
              <b-input placeholder="password" v-model="password_confirmation" type="password" />
            </b-form-group>
            <b-button type="submit">Register</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";  

export default {
  data() {
    return {
      name: "",  
      email: "",
      password: "",
      password_confirmation : ""
    };
  },
  methods: {
    registerUser() {
    let user = {
        email: this.email,
        name: this.name,
        password: this.password,
        password_confirmation: this.password_confirmation
    }
    this.$store.dispatch('user/register', user)
    }
  }
};
</script>

<style>
</style>