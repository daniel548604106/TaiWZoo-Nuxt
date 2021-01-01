
<script>
  export default {
    props:{
      journey:{
        type: Object,
        default: ({})
      }
    },
    computed:{
      totalDays(){
        return this.journey.startDate - this.journey.endDate
      },
      startingDate(){
        return this.journey.startDate.split('T')[0]
      },
      backgroundCover(){
        return this.journey.imageCover || require('~/assets/images/paris.png')
      }
    }
  }
</script>
<template>
  <nuxt-link :to="`/journey/${journey._id}`">
    <div :style="{ backgroundImage: `url(${backgroundCover} )` }" class="card relative">
      <div class="text-white absolute top-5% flex w-full items-center justify-between px-15px  z-4 ">
        <img :src="journey.createdBy.avatar " class="w-24px h-24px border border-white rounded-1/2" alt="">
        <div>
          <font-awesome-icon class="mr-15px"  :icon="['fas','share-alt']" />
          <font-awesome-icon :icon="['fas','ellipsis-v']" />
        </div>
      </div>
      <div class="text-white w-full absolute bottom-10% px-20px">
        <h1 class="w-1/2 truncate">{{journey.name}}</h1>
        <p class="text-10px">{{startingDate}} {{totalDays}}days</p>
      </div>

    </div>


  </nuxt-link>

</template>

<style lang="postcss" scoped>
  .card{
    @apply rounded-10px w-full max-w-500;
    padding-top:60%;
    background-size: cover ;
    background-position:center;
    background-repeat:no-repeat;
  }
</style>