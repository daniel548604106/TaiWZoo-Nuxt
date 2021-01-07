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
        searchInput: '',
        searchLat: null,
        searchLng: null,
        infoName: null,
        infoImage: null
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

      let autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),{
          bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(45.421231,-75.223111)
          )
        }
      )

      autocomplete.addListener("place_changed",() => {
        let place = autocomplete.getPlace()
        let newCoords = place.geometry.location
        this.searchLat = newCoords.lat()
        this.searchLng = newCoords.lng()
        this.infoImage = place.photos[0].html_attributions[0]
        this.infoName = place.name
        console.log(place)
        console.log(place.photos[0].html_attributions[0])
      })
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
      <GoogleMap  :searchLng="searchLng" :searchLat="searchLat" :infoImage="infoImage" />
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