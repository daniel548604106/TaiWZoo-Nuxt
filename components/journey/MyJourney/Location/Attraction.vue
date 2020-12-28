<template>
  <div :class="['swiper-container',{'active': showContainer}]">
<!-- only when swipe left can trigger the callback -->
<h1>sdjoifjsodifjiosd</h1>
<span v-touch:swipe.top="swipeTopHandler"  v-touch:swipe.down="swipeDownHandler" class="bg-vue-main text-white p-10px">Swipe Here</span>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        showContainer: false
      }
    },
    methods: {
        swipeTopHandler (direction) {
          this.showContainer = true
            console.log(direction)  // May be left / right / top / bottom
        },
        swipeDownHandler(direction){
          this.showContainer = false
          console.log(direction)
        }
    }
  }
</script>

<style lang="postcss" scoped>
.swiper-container{
  @apply h-50px w-full bg-vue-gray mb-100px

}

.swiper-container.active{
  @apply h-300px w-full
}
</style>