<template>
  <v-layout row wrap align-center class="login">
    <v-flex xs12 sm6 offset-sm3>
      <v-layout row wrap align-center class="text-xs-center">
        <v-flex xs12 class="text-xs-center">
          <img src="/static/img/logo.png" height="128" width="128" />
        </v-flex>
        <v-flex xs12 class="mt-2 mb-3">
          <h1 class="title">STUFF TRACKER</h1>
        </v-flex>
        <v-flex xs10 md6 offset-md3 class="mt-2 text-xs-center">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Username"
              required>
            </v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              name="input-10-1"
              label="Enter your password"
              hint="At least 8 characters"
              min="8"
              counter
              required
            ></v-text-field>
          </v-form>
          <v-btn
            block
            color="green lighten-1"
          >
            Sign In
          </v-btn>
          <div class="mt-3"><a href="#" class="subheading">Forgot your password?</a></div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    e1: true,
    valid: true,
    username: '',
    password: '',
    passwordRules: [
      v => !!v || 'Password is required'
    ],
    usernameRules: [
      v => !!v || 'Username is required'
    ],
    description: '',
    selected: []
  })
}
</script>

<style>
  #login{
    position: relative;
    top: 50%;
    transform: perspective(1px) translateY(-50%);
  }
  .btn.google-button{
    background-color: #db3236;
  }
</style>