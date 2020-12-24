<script>
  import JourneyCard from '@/components/travel/JourneyCard.vue'
  import Button from '@/components/global/Button.vue'
  export default {
    components:{
      JourneyCard,
      Button
    },
    data(){
      return{
        img: require('~/assets/images/journey.png')
      }
    }
  }
</script>
<template>
  <div class="w-full px-10px relative h-full flex flex-col items-center ">
    <div class="tabs sm:mt-20px sm:mb-50px mt-80px mb-50px">
      <ul>
        <li class="active">Ongoing/Future</li>
        <li>Past Journey</li>
      </ul>
    </div>
    <div v-if="hasData" class="w-full max-w-600 mx-auto">
      <JourneyCard :img="img" /> 
    </div>
    <div v-else class="mt-80px sm:mt-20px flex flex-col items-center">
      <img src="~/assets/images/trip.svg" alt="">
      <h1 class="text-20px mt-30px font-bold sm:20px sm:text-16px">You do not have any journey on the list yet!</h1>
      <h2 class="text-13px mt-10px">Start your journey</h2>
      <font-awesome-icon :icon="['fas','sort-down']"/>
    </div>
    <div class="w-full max-w-325 mx-auto absolute bottom-50px left-1/2 transform -translate-x-1/2 ">
      <Button :text="'Create My Journey'" />
    </div>
  </div>
</template>


<style lang="postcss" scoped>

.tabs{
  @apply  w-full max-w-400 mx-auto 
}

ul{
  @apply flex items-center justify-around;
}

li{
  @apply text-20px
}

li:active{
  @apply text-vue-main
}



</style>