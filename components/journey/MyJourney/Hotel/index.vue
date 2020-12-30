<script>
  import Map from '@/components/journey/MyJourney/Hotel/Map.vue'
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
    <div class="px-10px py-10px">
     <div class="w-full mx-auto relative">
      <input v-model="searchInput" placeholder="Search..." type="text">
      <font-awesome-icon @click="searchInput = ''" v-if="hotelSearchInput" :icon="['fas','times']" class="absolute right-10px top-1/2 transform -translate-y-1/2"/>
      <font-awesome-icon v-else :icon="['fas','search']" class="absolute right-10px top-1/2 transform -translate-y-1/2"/>
    </div>
    </div>
    <Map/>
  </div>
</template>


<style lang="postcss" scoped>
 input{
    @apply py-6px px-20px rounded-4px bg-gray-100 w-full text-14px
  }
</style>