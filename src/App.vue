<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/menunav.jpg" height="40" width="120" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Fairy Tale</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
         <b-nav-item-dropdown text="Fairy tale list" right>
            <b-dropdown-item to ="/fairytale"> <i class="fa fa-book" style="padding: 5px"> Fairytales</i></b-dropdown-item>
            <b-dropdown-item to ="/authors"><i class="fa fa-book" style="padding: 5px"> Authors</i></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/addFairytales">Add Fairy tales</b-nav-item>
          <b-nav-item to="/addauthor">Add Author</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
<!--          <b-nav-form>-->
<!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--          </b-nav-form>-->
          <b-nav-item-dropdown text="User Account" right>
            <b-dropdown-item to ="/login"><i class="fa fa-user" style="padding: 5px"> Sign in{{this.username}} </i></b-dropdown-item>
            <b-dropdown-item to ="/Info"> <i class="fa fa-user" style="padding: 5px">User Account</i></b-dropdown-item>
            <b-dropdown-item> <i class="fa fa-user" style="padding: 5px" @click=Signout>Sign out</i></b-dropdown-item>
<!--            <b-dropdown-item to ="/register"> <i class="fa fa-user" style="padding: 5px">Register</i></b-dropdown-item>-->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import UserService from '@/services/userservice'
export default {
  name: 'App',
  data () {
    return {
      username: '',
      userData: '',
      user: []
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    // isSign: function () {
    //   if (!document.cookie) {
    //     this.$router.push('/login')
    //     alert('You need to sign in first')
    //   }
    // },
    getUser: function () {
      if (!document.cookie) {
        this.username = 'Sign in'
      } else {
        this.userData = document.cookie
        UserService.fetchUser(this.userData)
          .then(response => {
            console.log(this.userData)
            this.user = response.data
            this.username = response.data[0].username
            console.log(response.data)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      }
    },
    Signout: function () {
      document.cookie = ('')
      window.location.reload()
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
  body{
    background-image: url("../src/assets/background1.jpg");
    background-repeat:repeat;
    background-size: 100% 100%;
  }
</style>
