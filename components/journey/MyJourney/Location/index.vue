<script>
  import { mapActions } from 'vuex'
  // import Mapbox from '@/components/journey/MyJourney/Location/Mapbox.vue'
  import GoogleMap from '@/components/journey/MyJourney/Location/GoogleMap.vue'
  export default {
    components:{
      // Mapbox,
      GoogleMap
    },
    data(){
      return{
        searchInput: ''
      }
    },
    methods:{
      ...mapActions('journey',['addAttractionSearch'])
    },
    watch:{
      searchInput(newVal){
        console.log('change', newVal)
        this.addAttractionSearch(newVal)
      }
    },
    mounted(){

      new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),{
          bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(45.421231,-75.223111)
          )
        }
      )
    }
  }
</script>
<template>
  <div class="w-full px-10px  ">
    <div class="w-full mx-auto relative mt-5px">
      <input v-model="searchInput" id="autocomplete" placeholder="Search..." type="text">
      <font-awesome-icon @click="searchInput = ''" v-if="searchInput" :icon="['fas','times']" class="absolute right-10px top-1/2 transform -translate-y-1/2"/>
      <font-awesome-icon v-else :icon="['fas','search']" class="absolute right-10px top-1/2 transform -translate-y-1/2"/>
    </div>
    <div class="mt-10px mb-200px" >
      <!-- <Mapbox/> -->
      <GoogleMap/>
    </div>
    <div class="text-white">
      @mapbox
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  input{
    @apply py-6px px-20px rounded-4px bg-gray-100 w-full text-14px
  }


</style>