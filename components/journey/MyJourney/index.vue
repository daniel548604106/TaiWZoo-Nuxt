<script>
  import Header from '@/components/journey/MyJourney/Header.vue'
  import BasicInfo from '@/components/journey/MyJourney/BasicInfo.vue'
  import Tabs from '@/components/journey/MyJourney/Tabs.vue'
  import Schedule from '@/components/journey/MyJourney/Schedule.vue'
  import Location from '@/components/journey/MyJourney/Location/index.vue'
  import SwiperContainer from '@/components/journey/MyJourney/Location/SwiperContainer.vue'
  import Hotel from '@/components/journey/MyJourney/Hotel.vue'
  export default {
    components:{
      Header,
      BasicInfo,
      Tabs,
      Schedule,
      Location,
      Hotel,
      SwiperContainer
    },
    props:{
      journeyInfo:{
        type: Object,
        default: {}
      }
    },
    data(){
      return{
        activeTab: 1
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
   <div>
     <BasicInfo :journeyInfo="journeyInfo"/>
   </div>
   <div class="sticky top-50px bg-white">
     <Tabs :changeTab="changeTab" :activeTab="activeTab"/>
   </div>
   <div v-if="activeTab === 1">
     <Schedule/>
   </div>
   <div v-if="activeTab === 2">
     <Location/>
   </div>
   <div class="absolute bottom-0 z-6 w-full" v-if="activeTab ===2">
    <SwiperContainer/>
   </div>
   <div v-if="activeTab === 3">
     <Hotel/>
   </div>

   
  </div>
</template>


<style lang="scss" scoped>

</style>