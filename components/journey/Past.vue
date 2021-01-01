<script>
  import JourneyCard from '@/components/journey/JourneyCard.vue'

  export default {
    props:{
      pastJourney:{
        type: Array,
        default: []
      }
    },
    components:{
      JourneyCard
    },
    data(){
      return{
        
      }
    }
  }
</script>
<template>
  <div class="h-full w-full   transform -translate-y-20px">
      <div v-if="pastJourney.length" class=" w-full max-w-600 mx-auto">
        <div v-for="journey in pastJourney" :key="journey.id" class="mb-20px">
          <JourneyCard :journey="journey" /> 
        </div>
      </div>
      <div v-else class="mt-80px sm:mt-20px flex flex-col items-center">
        <img src="~/assets/images/trip.svg" alt="">
        <h1 class="text-20px mt-30px font-bold sm:20px sm:text-16px">You do not have any journey on the list yet!</h1>
        <h2 class="text-13px mt-10px">Start your journey</h2>
        <font-awesome-icon :icon="['fas','sort-down']"/>
      </div>
  </div>
</template>


<style lang="scss" scoped>

</style>