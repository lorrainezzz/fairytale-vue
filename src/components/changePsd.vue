<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-eye-slash" style="padding: 0px"></i>{{messagetitle}}</h3>
    <div class="mt-4">
      <b-card border-variant="success">
        <b-row>
          <b-col class="bg-light">
            <br/>

            <b-row>
              <h5 class="toast-header">Please enter new password</h5>
            </b-row>
            <b-row>
                <b-form-input
                  d = "input-npsd" aria-describedby="input-npsd-feedback" :state="npsdState" v-model="newpassword1" type = "password">
                </b-form-input>
                <b-form-invalid-feedback id="input-npsd-feedback">
                  The new password must be different from the original one
                </b-form-invalid-feedback>
            </b-row>
            <br/>
            <b-row>
              <h5 class="toast-header">Please confirm the password</h5>
            </b-row>
            <b-row>
              <b-form-input
                d = "input-npsd" aria-describedby="input-npsd-feedback" :state="npsdState" v-model="newpassword2" type = "password">
              </b-form-input>
              <b-form-invalid-feedback id="input-npsd-feedback">
                The password must be the same as the former one
              </b-form-invalid-feedback>
            </b-row>
            <br/>
            <b-row>
              <b-col><b-button variant="outline-info" @click = changePassword>Save changes</b-button></b-col>
              <b-col ><b-button to="/" variant="outline-secondary" >Cancel</b-button></b-col>
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
  computed: {

    npsdState () {
      return this.newpassword1 !== this.password && this.newpassword1.length > 5
    },
    rpsdState () {
      return this.newpassword1 === this.newpassword2 && this.newpassword2.length > 5
    }
  },
  name: 'changePsd',
  data () {
    return {
      messagetitle: ' Change Password',
      userData: '',
      user: [],
      password: '',
      newpassword1: '',
      newpassword2: ''
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    getUser: function () {
      if (!document.cookie) {
        this.$router.push('/login')
      } else {
        this.userData = document.cookie
        UserService.fetchUser(this.userData)
          .then(response => {
            console.log(this.userData)
            this.user = response.data
            this.password = response.data[0].password
            console.log(response.data)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      }
    },
    changePassword: function (user) {
      this.user[0].password = this.newpassword1
      UserService.editPassword(this.userData, this.user[0])
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(user, null, 5))
          this.$router.push('/login')
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
      this.$router.push('login')
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
