<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="4" class="mx-auto">
          <h2>Register</h2>
          <b-form @submit.prevent="registerUser">
            <b-form-group>
              <!-- <p class="error" v-if="!$v.email.required  && submitStatus == 'ERROR'">Field is required</p> -->
              <b-input placeholder="email" v-model="email" type="text" data-type="email" />
            </b-form-group>
            <b-form-group>
              <!-- <p class="error" v-if="!$v.name.required  && submitStatus == 'ERROR'">Field is required</p> -->
              <b-input placeholder="name" v-model="name" type="text" data-type="name" />
            </b-form-group>
            <b-form-group>
              <p class="error" v-if="submitStatus == 'ERROR'">Field is required</p>
              <b-input
                placeholder="password"
                v-model="password"
                type="password"
                data-type="password"
              />
            </b-form-group>
            <b-form-group>
              <!-- <p class="error" v-if="!$v.password_confirmation.required  && submitStatus == 'ERROR'">Field is required</p> -->
              <b-input
                placeholder="password"
                v-model="password_confirmation"
                type="password"
                data-type="password-repeat"
              />
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
import { required, minLength,  } from "vuelidate/lib/validators";

export default {
  layout: "default",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      submitStatus: null
    };
  },
  methods: {
    registerUser() {
      if (this.password == "") {
        this.submitStatus = "ERROR";
      } else {
        let user = {
          email: this.email,
          name: this.name,
          password: this.password,
          password_confirmation: this.password_confirmation
        };
        this.$store.dispatch("user/register", user);
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      // email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    password_confirmation: {
      required,
      minLength: minLength(6)
    }
  }
};
</script>
