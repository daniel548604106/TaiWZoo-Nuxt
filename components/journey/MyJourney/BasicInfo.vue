
<script>
  export default {
     props:{
      journeyInfo:{
        type: Object,
        default: {}
      }
    },
    computed:{
      totalDays(){
        let start = new Date(this.journeyInfo.startingDate).getTime()
        let end = new Date(this.journeyInfo.endingDate).getTime()
        let difference = start-end
        return difference
      },
      numOfParticipants(){
        return this.journeyInfo.participants.length
      }
    }
  }
</script>
<template>
  <div>
    <div class="relative">
    <img src="~/assets/images/paris.png" class="w-full h-auto" alt="">
    <div class="absolute bottom-30px left-30px ">
      <h1 class=" text-white text-26px font-semibold w-300px truncate">Paris C'est la vie</h1>
      <h2 class="mt-2px  text-white">{{journeyInfo.startingDate}}-{{journeyInfo.endingDate}}( {{totalDays}} days)</h2>
      <div class="flex items-center mt-10px">
        <div class="mr-8px" v-for="participant in journeyInfo.participants.slice(0,3)" :key="participant.id">
          <img class="w-35px h-35px rounded-1/2" src="~/assets/images/avatar.png" alt="">
        </div>
          <h2 class="text-white" v-if="numOfParticipants > 3">+ {{numOfParticipants - 3}} other</h2>
      </div>
    </div>
   </div>
  </div>
</template>

<style lang="scss" scoped>

</style>