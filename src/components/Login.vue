<template>
  <div class="mt-5">
    <b-card border-variant="success">
      <b-card-text>
        <h1 class = vue-title>Enjoy in Fairy Tale~~</h1>
        <b-container >
          <br/>
          <br/>
          <b-row>
            <b-col ></b-col>
            <b-col md="auto"><h4>Username:</h4></b-col>
            <b-col md="auto"><b-form-input v-model="username"></b-form-input></b-col>
            <b-col ></b-col>
          </b-row>
          <b-row>
            <b-col ></b-col>
            <b-col md="auto"><h4>Password: </h4></b-col>
            <b-col md="auto"><b-form-input type = "password" v-model="password"></b-form-input></b-col>
            <b-col ></b-col>
          </b-row>
          <p style="color:#FF0000"><b>{{errmessages}}</b></p>
          <b-row>
            <b-col ></b-col>
            <b-button to ="/register" md="auto" variant="outline-secondary" ><h5>Register</h5></b-button>
            <b-col ></b-col>
            <b-button md="auto" variant="outline-secondary" @click = userlogin><h5>Sign In</h5></b-button>
            <b-col ></b-col>
          </b-row>

        </b-container>
      </b-card-text>
    </b-card>
  </div>

</template>

<script>
import UserService from '@/services/userservice'
export default {
  name: 'Login',
  data () {
    return {
      errmessages: '',
      username: '',
      password: ''
    }
  },
  methods: {
    userlogin: function () {
      console.log('submit!')
      setTimeout(() => {
        var user = {
          username: this.username,
          password: this.password
        }
        this.user = user
        console.log('Login successfully : ' + JSON.stringify(this.user, null, 5))
        this.login(this.user)
      }, 500)
    },
    login: function (user) {
      UserService.signIn(user)
        .then(response => {
          console.log(response.data)
          console.log(response.data.data._id)
          if (response.data.message !== 'Login successfully') {
            this.errmessages = 'Username or password is wrong'
            this.password = ''
          } else {
            document.cookie = (response.data.data._id)
            this.errmessages = 'Login successfully'
            console.log('Register!!')
            console.log('Submitting in submitUser : ' + user)
            this.$router.push('/')
            window.location.reload()
          }
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
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
