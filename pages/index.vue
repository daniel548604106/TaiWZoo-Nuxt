<script>
import Swiper from '@/components/home/Swiper.vue'
import Options from '@/components/home/Options.vue'
import News from '@/components/home/News.vue'
import Events from '@/components/home/Events.vue'
import Ads from '@/components/home/Ads.vue'
import Travel from '@/components/home/Travel.vue'
export default {
  components:{
    Swiper,
    Options,
    News,
    Ads,
    Travel
  },
  data() {
    return {
      data: '',
      data2: {}
    }
  },
}
</script>
<template>
  <div class="container">
    <div class="w-full">
      <div class="relative">
        <Swiper/>
        <div class="bottom-0px w-full transform -translate-y-1/2 absolute z-9  left-1/2 -translate-x-1/2">
          <Options/>
        </div>
      </div>
      <div class="mt-100px">
        <News/>
      </div>
      <div class="mt-10px">
        <Ads/>
      </div>
      <div class="mt-10px">
        <Events/>
      </div>
      <div class="mt-10px">
        <Travel/>
      </div>
    </div>
  </div>
</template>

<style>

</style>
