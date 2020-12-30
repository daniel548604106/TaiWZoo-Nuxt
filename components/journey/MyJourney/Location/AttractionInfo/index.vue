<script>
  import Header from '@/components/journey/MyJourney/Location/AttractionInfo/Header.vue'
  import Description from '@/components/journey/MyJourney/Location/AttractionInfo/Description.vue'
  import Nearby from '@/components/journey/MyJourney/Location/AttractionInfo/Nearby.vue'
  import Map from '@/components/journey/MyJourney/Location/AttractionInfo/Map.vue'
  export default {
    components:{
      Header,
      Description,
      Nearby,
      Map
    }
  }
</script>
<template>
  <div class="h-full w-full bg-white">
    <Header class="w-full"/>
    <div class="attraction-bg relative" style="'backgroundImage': url('~@/assets/images/paris.png') ">
      <div class="absolute bottom-0 transform -translate-y-1/2 right-50px shadow-md rounded-1/2 flex items-center justify-center w-50px h-50px">
        <span class="text-12px text-vue-main">Add</span>
      </div>
    </div>
    <Description/>
    <Map/>
    <Nearby class="w-full mb-100px"/>
    
    

  </div>
</template>


<style lang="postcss" scoped>
  .attraction-bg{
    background-size: cover;
    background-repeat:no-repeat;
    background-position: center;
    width: 100%;
    padding-top: 100%;
    
  }
</style>