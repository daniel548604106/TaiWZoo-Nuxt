<script>
  import JourneyCard from '@/components/journey/JourneyCard.vue'

  export default {
    components:{
      JourneyCard
    },
    data(){
      return{
        journeys:[{
          data: '',
          img: require('~/assets/images/journey.png'),
          startingDate: '2020/12/13',
          totalDays: 5,
          participants:[{
            name: 'Daniel',
            avatar: require('~/assets/images/avatar.png')
          }]
        }]
      }
    }
  }
</script>
<template>
  <div class="h-full w-full flex items-center justify-center  transform -translate-y-20px">
      <div v-if="journeys.length" class="w-full max-w-600 mx-auto">
        <div class="w-full " v-for="journey in journeys" :key="journey.id">
          <JourneyCard :journey="journey"/> 
          <h1>sdfsdfsd</h1>
        </div>
      </div>
      <div v-else class="mt-80px sm:mt-20px flex flex-col items-center">
        <img src="~/assets/images/trip.svg" alt="">
        <h1 class="text-20px mt-30px font-bold sm:20px sm:text-16px">You do not have any  journey on the list yet!</h1>
        <h2 class="text-13px mt-10px">Start your journey</h2>
        <font-awesome-icon :icon="['fas','sort-down']"/>
      </div>
  </div>
</template>


<style lang="scss" scoped>

</style>