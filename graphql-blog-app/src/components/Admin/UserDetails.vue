<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu/>
        </div>
        <div class="column is-9">
          <h2 class="title">User Detail</h2>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label  class="label">Usrename</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input readonly class="input is-static" :value="user.username">
                </p>
              </div>
            </div>
          </div>

           <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label  class="label">Email address</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input readonly class="input is-static" :value="user.email">
                </p>
              </div>
            </div>
          </div>

           <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label  class="label">num of posts</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input readonly class="input is-static" :value="user.posts.length">
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from '@/components/Admin/menu'
import { USER_QUERY } from '@/graphql'

export default {
  name: 'UserDetails',
  components: {
    Menu
  },
  data () {
    return {
      user: '',
      id: this.$route.params.id
    }
  },
  apollo: {
    user: {
      query: USER_QUERY,
      variables () {
        return {
          id: this.id
        }
      }
    }
  }
}
</script>
