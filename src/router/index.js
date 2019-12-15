import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Fairytales from '@/components/Fairytales'
import Authors from '@/components/Authors'
import addFairytales from '@/components/addFairytales'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AddAuthors from '@/components/addAuthors'
import UserInfo from '@/components/userInfo'
import ChangePsd from '@/components/changePsd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/fairytale',
      name: 'Fairytale',
      component: Fairytales
    },
    {
      path: '/authors',
      name: 'Author',
      component: Authors
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'SignIn',
      component: Login,
      props: true
    },
    {
      path: '/addFairytales',
      name: 'adding',
      component: addFairytales
    },
    {
      path: '/Info',
      name: 'userInfo',
      component: UserInfo,
      props: true
    },
    {
      path: '/changePsd',
      name: 'changePsd',
      component: ChangePsd
    },
    {
      path: '/addauthor',
      name: 'collect',
      component: AddAuthors
    }
  ]
})
