<script>
  import Mapbox from '@/components/journey/MyJourney/Location/Mapbox.vue'
  export default {
    components:{
      Mapbox
    }
  }
</script>
<template>
  <div class="w-full px-10px ">
    <div class="w-full mx-auto relative mt-5px">
      <input placeholder="Search..." type="text">
      <font-awesome-icon :icon="['fas','search']" class="absolute right-10px top-1/2 transform -translate-y-1/2"/>
    </div>
    <div class="mt-10px mb-100px">
      <Mapbox/>
    </div>
    <div>sdfsdf</div>
  </div>
</template>


<style lang="postcss" scoped>
  input{
    @apply py-6px px-20px rounded-4px bg-gray-100 w-full text-14px
  }
</style>