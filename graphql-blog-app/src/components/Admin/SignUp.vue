<template>

<div class="section">
  <div class="columns">

    <div class="column is-4 is-offset-4">
      <h2 class="title has-text-centered">sign up</h2>

      <form method="POST" @submit.prevent="signup">
         <div class="field">
           <label>username</label>
           <p class="control">
             <input type="text" class="input" v-model="username">
           </p>
         </div>

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
           <button class="button" is-primary is-fullwidth is-uppercase>signup</button>
         </div>

      </form>
    </div>
  </div>
</div>

</template>

<script>
import {SIGNUP_MUTATION} from '@/graphql'

export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      console.log('signup start', this.$apollo.provider)
      this.$apollo.provider.defaultClient.mutate({
        mutation: SIGNUP_MUTATION,
        variables: {
          username: this.username,
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          console.log('signup res = ', response)
          //    redirect user to login
          this.$router.replace('/login')
        })
    }
  }
}
</script>
