<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-cog" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="mt-4">
      <b-card border-variant="success">
        <b-row>
          <b-col>
            <br/>
            <h1><i style="color: darkcyan">Enjoy reading fairy tale</i></h1>
            <br/>
            <h1><i style="color: darkcyan">Find vivid fairytale & author</i></h1>
            <b-row>
              <b-col ><b-button to="/changePsd" variant="outline-secondary" >Reset Password here!!</b-button></b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/userservice'
export default {
  name: 'UserInfo',
  data () {
    return {
      messagetitle: ' Settings ',
      userData: '',
      user: [],
      username: '',
      age: 0,
      email: ''
    }
  },
  created () {
    this.getUser()
    this.isSign()
  },
  methods: {
    isSign: function () {
      if (!document.cookie) {
        this.$router.push('/login')
        alert('You need to sign in first')
      }
    },
    getUser: function () {
      if (!document.cookie) {
        this.$router.push('/login')
      } else {
        this.userData = document.cookie
        UserService.fetchUser(this.userData)
          .then(response => {
            console.log(this.userData)
            this.user = response.data
            this.username = response.data[0].username
            this.age = response.data[0].age
            this.email = response.data[0].email
            console.log(response.data)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
