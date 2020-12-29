<script>
  import Schedule from '@/components/journey/MyJourney/Location/Schedule.vue'
  import Attraction from '@/components/journey/MyJourney/Location/Attraction.vue'
  export default {
    components:{
      Schedule,
      Attraction
    },
    data(){
      return{
        showContainer: false,
        activeTab: 1
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
<template>
  <div :class="['swiper-container',{'active': showContainer}]">
<!-- only when swipe left can trigger the callback -->
  <span v-touch:swipe.top="swipeTopHandler"  v-touch:swipe.down="swipeDownHandler" class="absolute top-20px left-1/2 transform -translate-x-1/2 text-white  w-100px h-5px rounded-5px bg-gray-700"></span>
  <div class="w-full flex items-center justify-around mt-20px">
    <h1 @click="activeTab = 1" :class="['text-gray-300',{active: activeTab === 1}]">Attractions</h1>
    <h1 @click="activeTab = 2" :class="['text-gray-300',{active: activeTab === 2}]">Schedule</h1>
  </div>
  <div>
    <Attraction v-if="activeTab === 1" />
    <Schedule v-if="activeTab === 2" />
  </div>
  </div>
</template>


<style lang="postcss" scoped>
.swiper-container{
  @apply h-250px w-full bg-white border rounded-t-lg shadow-md py-20px transition-all duration-200 ease-in-out

}

.swiper-container.active{
  @apply h-70vh w-full
}

.active{
  @apply text-vue-main border-b border-vue-main;
}
</style>