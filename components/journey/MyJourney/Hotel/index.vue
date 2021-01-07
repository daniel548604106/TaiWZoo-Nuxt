<script>
  import Map from '@/components/journey/MyJourney/Hotel/HotelMap.vue'
  export default {
    components:{
      Map
    },
    data(){
      return{
        hotelSearchInput: ''
      }
    }
  }
</script>
<template>
  <div>
    <Map/>
  </div>
</template>


<style lang="postcss" scoped>
 input{
    @apply py-6px px-20px rounded-4px bg-gray-100 w-full text-14px
  }
</style>