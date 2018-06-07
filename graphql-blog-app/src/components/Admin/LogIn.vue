<template>

<div class="section">
  <div class="columns">

    <div class="column is-4 is-offset-4">
      <h2 class="title has-text-centered">Login</h2>

      <form method="POST" @submit.prevent="login">
          <div class="field">
           <label>email</label>
           <p class="control">
             <input type="email" class="input" v-model="email">
           </p>
         </div>

          <div class="field">
           <label>Password</label>
           <p class="control">
             <input type="password" class="input" v-model="password">
           </p>
         </div>

         <div class="control">
           <button class="button" is-primary is-fullwidth is-uppercase>login</button>
         </div>

      </form>
    </div>
  </div>
</div>

</template>

<script>
import {LOGIN_MUTATION} from '@/graphql'

export default {
  name: 'LogIn',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('loginstart ', this.email, this.password)
      this.$apollo.provider.defaultClient.mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          // save user token to local storage
          localStorage.setItem('blog-app-token', response.data.login)
          // redirect user to login
          this.$router.replace('/admin/posts')
        })
    }
  }
}
</script>
