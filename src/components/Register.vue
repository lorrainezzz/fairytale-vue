<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-user" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id = "register form">
        <b-form-group>
          <b-form-group label-cols-sm="3" label="Username:" label-align-sm="right" >
            <b-form-input id = "input-live" :state="nameState" aria-describedby="input-live-feedback" v-model="username" placeholder="Enter your name"></b-form-input>
            <b-form-invalid-feedback id="input-live-feedback">
              Enter at least 3 letters
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label-cols-sm="3" label="Password:" label-align-sm="right" >
            <b-form-input
              d = "input-psd" aria-describedby="input-psd-feedback" :state="psdState" v-model="password" type = "password" placeholder="Enter your password">
            </b-form-input>
            <b-form-invalid-feedback id="input-psd-feedback">
              The password must be more than 6 digital
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group label-cols-sm="3" label="Confirm Password:" label-align-sm="right" >
            <b-form-input id = "input-rpsd" aria-describedby="input-rpsd-feedback" :state="rpsdState" v-model="repassword" type = "password" placeholder="Repeat your password"></b-form-input>
            <b-form-invalid-feedback id="input-rpsd-feedback">
              The two password must be the same
            </b-form-invalid-feedback>
          </b-form-group>
        </b-form-group>
      <b-button squared variant="secondary" @click="userRegister">Register</b-button>
      <p class="typo__p" v-if="submitStatus === 'OK'">Register successfully!</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Registering···</p>
    </div>
  </div>
</template>

<script>

import UserService from '@/services/userService'

export default {
  computed: {
    nameState () {
      return this.username.length > 2
    },
    psdState () {
      return this.password.length > 5
    },
    rpsdState () {
      return this.password === this.repassword
    }
  },
  name: 'Register',
  data () {
    return {
      messagetitle: 'Register ',
      username: '',
      password: '',
      repassword: '',
      user: {},
      submitStatus: null
    }
  },
  methods: {
    userRegister: function () {
      console.log('submit!')
      setTimeout(() => {
        var user = {
          username: this.username,
          password: this.password
        }
        this.user = user
        console.log('Register successfully : ' + JSON.stringify(this.user, null, 5))
        this.submitUser(this.user)
      }, 500)
    },
    submitUser: function (user) {
      UserService.userRegister(user)
        .then(response => {
          console.log(response.data)
          console.log(response.data.message)
          if (response.data.message === 'The username is occupied') {
            alert('The username is occupied')
            this.username = ''
          } else {
            console.log('Register!!')
            console.log('Submitting in submitUser : ' + user)
            this.$router.push('login')
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
