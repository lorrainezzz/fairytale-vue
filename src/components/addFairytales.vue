<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-book" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">
            <div class="form-group">
              <label class="form__label" name="name">Please enter fairy tale name:</label>
              <label>
                <input class="form__input" type="text" v-model.trim="name"/>
              </label>
            </div>
            <div class="form-group">
              <label class="form__label" name="author">Please enter fairy tale's author:</label>
              <label>
                <input class="form__input" type="text" v-model.trim="author"/>
              </label>
            </div>
            <div class="form-group">
              <label class="form-label">Select category of the fairy tale:</label>
              <label for="type"></label><select id="type" name="type" class="form-control" type="text" v-model="category">
                <option value="None" selected disabled hidden>Please select category</option>
                <option value="Action/Adventure">Action/Adventure</option>
                <option value="Fable">Fable</option>
                <option value="Historical">Historical</option>
                <option value="Humor">Humor</option>
                <option value="Kids">Kids</option>
                <option value="Magic">Magic</option>
                <option value="Mystery">Mystery</option>
                <option value="Mythology">Mythology</option>
                <option value="Religious">Religious</option>
                <option value="Retold Fairy Tales">Retold Fairy Tales</option>
                <option value="Romance">Romance</option>
                <option value="Supernatural">Supernatural</option>
              </select>
            </div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add the fairy tale!</button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Adding a new fairy tale!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding···</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import FairytaleService from '@/services/fairytaleservice'
// eslint-disable-next-line no-unused-vars
import {minLength, required} from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)
export default {
  name: 'adding',
  data () {
    return {
      messagetitle: ' Adding Fairy Tale ',
      message: '',
      name: '',
      author: '',
      category: 'None',
      like: '',
      fairytale: {},
      submitStatus: null
    }
  },
  validations: {
    message: {
      required,
      minLength: minLength(5)
    }
  },
  created () {
    this.isSign()
  },
  methods: {
    isSign: function () {
      if (!document.cookie) {
        this.$router.push('/login')
        alert('You need to sign in first')
      }
    },
    submit () {
      console.log('submit!')
      this.submitStatus = 'OK'
      this.fairytale = {
        name: this.name,
        author: this.author,
        category: this.category,
        like: this.like
      }
      console.log('Submitting in Fairy tale Form : ' + JSON.stringify(this.fairytale, null, 5))
      this.submitFairytale(this.fairytale)
    },
    submitFairytale: function (fairytale) {
      console.log('Submit Fairytale!')
      console.log('Submitting in submitFairytale : ' + fairytale)
      FairytaleService.postFairytale(fairytale)
        .then(response => {
          this.$router.push('fairytale')
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }

  // }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 95%;
    margin: 20px;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }
  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
