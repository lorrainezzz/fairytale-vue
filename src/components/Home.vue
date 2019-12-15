<template>
  <div class="hero">
    <b-carousel class="carousel"
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
                fade
      indicators
      background="#ababab"
      img-width="960"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide caption="1" img-src="../assets/mainpage1.jpg" img-height=200>
      </b-carousel-slide>

      <b-carousel-slide caption="2" img-src="../assets/mainpage2.jpg" img-height=200>
      </b-carousel-slide>

      <b-carousel-slide caption="3" img-src="../assets/mainpage3.jpg" img-height=200>
      </b-carousel-slide>

      <b-carousel-slide caption="4" img-src="../assets/mainpage4.jpg" img-height=200>
      </b-carousel-slide>

      <b-carousel-slide caption="5" img-src="../assets/mainpage5.jpg" img-height=200>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import UserService from '@/services/userservice'
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      user: []
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    getUser: function () {
      UserService.fetchUser(this.userData)
        .then(response => {
          console.log(this.userData)
          this.user = response.data
          console.log(response.data)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>
<style>
  .hero {
    height: 100vh;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;

  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .carousel{
    margin-left: 200px;
    margin-right: 200px;
    margin-bottom: 400px;
  }
  .vue-title {
    font-family:Monospace;
    font-size: 70pt;
    margin-bottom: 10px;
    color: lightslategrey;
    text-align: right;
  }
  .lan{
    font-family:Monospace;
    font-size: 40pt;
    margin-bottom: 10px;
    color: dimgray;
    text-align: center;
  }
</style>
