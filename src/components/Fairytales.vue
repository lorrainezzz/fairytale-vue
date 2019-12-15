<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-book" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="fairytale" :options="options">
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteFairytale(props.row._id)"></a>
        <a slot="likes" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="likes(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import FairytaleService from '@/services/FairytaleService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Fairytales',
  data () {
    return {
      messagetitle: ' Fairy Tale List ',
      fairytale: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'name', 'author', 'category', 'like', 'likes', 'remove'],
      options: {
        perPage: 10,
        filterable: ['author', 'category'],
        sortable: ['name', '_id'],
        headings: {
          _id: 'ID',
          name: 'Fairy tale',
          author: 'Author',
          category: 'Category',
          like: 'Like',
          likes: 'Likes',
          remove: 'Remove'
        }
      }
    }
  },
  created () {
    this.loadFairytale()
    this.isSign()
  },
  methods: {
    isSign: function () {
      if (!document.cookie) {
        this.$router.push('/login')
        alert('You need to sign in first')
      }
    },
    loadFairytale: function () {
      FairytaleService.fetchFairytales()
        .then(response => {
          this.fairytale = response.data
          console.log(this.fairytale)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },

    deleteFairytale: function (id) {
      this.$swal({
        title: 'Do you still want to delete it?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        showCloseButton: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          FairytaleService.deleteFairytale(id)
            .then(response => {
              this.message = response.data
              console.log(this.message)
              this.loadFairytale()
              this.$swal('Deleted', 'Successfully deleted the fairy tale ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Fail to delete with error!! ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'The fairy tale is still existed!', 'info')
        }
      })
    },
    likes: function (id) {
      FairytaleService.likeFairytale(id)
        .then(response => {
          location.reload()
          console.log(response)
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
  #app1 {
    width: 90%;
    margin: 0 auto;

  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
