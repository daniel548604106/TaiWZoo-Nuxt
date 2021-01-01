
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
        let start = new Date(this.journeyInfo.startDate).getTime()
        let end = new Date(this.journeyInfo.endDate).getTime()
        let difference = (end-start)/ (60*60*1000*24) + 1
        return difference
      },
      startingDate(){
        if(this.journeyInfo){
          return this.journeyInfo.startDate
        }
      },
      endingDate(){
        if(this.journeyInfo){
          return this.journeyInfo.endDate
        }
      },
      numOfParticipants(){
        if(this.journeyInfo.length){
          return this.journeyInfo.participants.length
        }
      },
      backgroundCover(){
        return this.journeyInfo.imageCover || require('~/assets/images/paris.png')
      }
    }
  }
</script>
<template>
  <div>
    <div class="relative w-full">
    <div :style="{backgroundImage : `url(${backgroundCover})`}" class="w-full cover" alt="">
      <div class="absolute bottom-30px left-30px ">
        <h1 class=" text-white text-26px font-semibold w-300px truncate">{{journeyInfo.name}}</h1>
        <h2 class="mt-2px  text-white">{{startingDate}}-{{endingDate}}( {{totalDays}} days)</h2>
        <div class="flex items-center mt-10px">
          <div class="mr-8px" v-for="participant in journeyInfo.participants" :key="participant.id">
            <img class="w-35px h-35px rounded-1/2" src="~/assets/images/avatar.png" alt="">
          </div>
            <h2 class="text-white" v-if="numOfParticipants > 3">+ {{numOfParticipants - 3}} other</h2>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<style lang="postcss" scoped>
  .cover{
    padding-top: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>