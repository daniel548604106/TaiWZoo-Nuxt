<script>
  import Header from '@/components/journey/MyJourney/Header.vue'
  import BasicInfo from '@/components/journey/MyJourney/BasicInfo.vue'
  import Tabs from '@/components/journey/MyJourney/Tabs.vue'
  import Schedule from '@/components/journey/MyJourney/Schedule.vue'
  import Location from '@/components/journey/MyJourney/Location/index.vue'
  import SwiperContainer from '@/components/journey/MyJourney/Location/SwiperContainer.vue'
  import AttractionInfo from '@/components/journey/MyJourney/Location/AttractionInfo/index.vue'
  import Hotel from '@/components/journey/MyJourney/Hotel/index.vue'
  export default {
    components:{
      Header,
      BasicInfo,
      Tabs,
      Schedule,
      Location,
      Hotel,
      SwiperContainer,
      AttractionInfo
    },
    props:{
      journeyInfo:{
        type: Object,
        default: {}
      }
    },
    data(){
      return{
        activeTab: 1,
        attractionInfoShow: false
      }
    },
    methods:{
      changeTab(tab){
        this.activeTab = tab
      }
    }
    
  }
</script>
<template>
  <div class="relative">
   <div class="fixed top-0 left-0 w-full z-5">
      <Header class="text-white" :title="'My Journey'" :icon1="'chevron-left'" :icon2="'cog'" :icon3="'ellipsis-v'"/>
   </div>
   <div class="w-full">
     <BasicInfo :journeyInfo="journeyInfo"/>
   </div>
   <div class="sticky top-50px bg-white">
     <Tabs :changeTab="changeTab" :journeyInfo="journeyInfo" :activeTab="activeTab"/>
   </div>
   <div v-if="activeTab === 1">
     <Schedule :journeyInfo="journeyInfo"/>
   </div>
   <div v-if="activeTab === 2">
     <Location/>
   </div>
   <div class="absolute bottom-0 z-6 w-full" v-if="activeTab ===2">
    <SwiperContainer/>
   </div>
   <div v-if="attractionInfoShow" class="absolute top-0 left-0 z-7 w-full">
     <AttractionInfo />
   </div>
   <div v-if="activeTab === 3">
     <Hotel/>
   </div>

   
  </div>
</template>


<style lang="scss" scoped>

</style>