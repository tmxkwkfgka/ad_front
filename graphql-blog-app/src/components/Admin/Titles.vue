<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu/>
        </div>
        <div class="column is-9">
          <h2 class="title">Titles</h2>
          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th></th>
              </tr>
              <tbody>
                <tr
                  v-for="title in fetchTitles"
                  :key="title.title">
                  <td>{{ title.title }}</td>
                  <td>{{ title.link }}</td>
                  <td>{{ title.startDate}}</td>
                </tr>
              </tbody>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from '@/components/Admin/menu'
import { ALL_TITLES_QUERY } from '@/graphql'

export default {
  name: 'Titles',
  components: {
    Menu
  },
  data () {
    return {
      fetchTitles: []
    }
  },
  apollo: {
    fetchTitles: {
      query: ALL_TITLES_QUERY
    }
  }
}
</script>
