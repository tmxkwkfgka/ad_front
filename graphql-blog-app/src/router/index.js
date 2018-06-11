import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/Admin/SignUp'
import LogIn from '@/components/Admin/LogIn'
import Users from '@/components/Admin/Users'
import Titles from '@/components/Admin/Titles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/admin/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/admin/titles',
      name: 'Titles',
      component: Titles
    }

  ]
})
