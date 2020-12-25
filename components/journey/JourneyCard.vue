
<script>
  export default {
    props:{
      journey:{
        type: Object,
        default: ({})
      }
    }
  }
</script>
<template>
    <div :style="{ backgroundImage: `url(${journey.img})` }" class="card rounded-10px w-full max-w-500 h-200px relative">
      <div class="w-full absolute top-0 z-4 flex items-center justify-between">
        <div class="flex items-center">
          <img :src="journey.img" alt="">
          <img v-for="participant in journey.participants" :key="participant.id" :src="participant.avatar" alt="">
        </div>
        <div>
          <font-awesome-icon :icon="['fas','share-alt']" />
          <font-awesome-icon :icon="['fas','ellipsis-v']" />
        </div>
      </div>
      <div class="absolute bottom-20px left-20px">
        <h1>{{journey.title}}</h1>
        <h2>{{journey.startingDate}} {{journey.totalDays}}days</h2>
      </div>

    </div>

</template>

<style lang="postcss" scoped>
  .card{
    @apply w-full h-auto relative;
    background-size: cover ;
    background-position:center;
    background-repeat:no-repeat;
  }
</style>