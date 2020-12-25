<template>
  <div>
    <h1 class="mt-30px  text-14px font-semibold">Journey Profile</h1>
        <div class="relative mt-18px">
          <img class="rounded-20px w-full" src="~/assets/images/journey.png" alt="">
          <div class="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2">
            <font-awesome-icon :icon="['fas','images']" class="text-white"  />
            <h1 class="text-white">Custom Profile Picture</h1>
          </div>
        </div>
        <h1 class="mt-20px text-14px font-semibold">Journey Name</h1>
        <input class="mt-10px" type="text" v-model="journeyName">
  </div>
</template>

<script>
  export default {
    data(){
      return{
        journeyName: 'taipei'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>