<script>
  import { apiGetAllMyJourneys} from '@/api'
  import { mapGetters, mapActions } from 'vuex'
  import Button from '@/components/global/Button.vue'
  import Ongoing from '@/components/journey/Ongoing.vue'
  import Past from '@/components/journey/Past.vue'
  import MobileHeader from '@/components/global/Mobile/Header.vue'
  export default {
    components:{
      MobileHeader,
      Button,
      Past,
      Ongoing
    },
    data(){
      return{
        journeys: [],
        img: require('~/assets/images/journey.png'),
        hasData: false,
        activeTab: 'ongoing'
      }
    },
    computed:{
      ...mapGetters('journey',['journeyInfo']),
      ongoingJourney(){
        // const data = this.journeys.filter(journey =>  journey.endDate > new Date().getTime())
        return this.journeys.filter(el => new Date(el.endDate).getTime()  > new Date().getTime())
      },
      pastJourney(){
        return this.journeys.filter(el => new Date(el.endDate).getTime()  < new Date().getTime())
      }
    },  
    methods:{
      ...mapActions('journey',['toggleCreateJourney']),
      changeTab(tab){
        this.activeTab = tab
      }
    },
    async mounted(){
      const { data } =  await apiGetAllMyJourneys()
      console.log(data)
      this.journeys = data.journeys
    }
  }
</script>
<template>
  <div class="w-full relative h-full flex flex-col items-center ">
    <div class="w-full hidden sm:block">
      <MobileHeader :title="'My Journey'"/>
    </div>
    <div class=" px-20px w-full">
      <div class="tabs sm:mt-20px sm:mb-50px mt-80px mb-50px">
        <ul>
          <li @click="changeTab('ongoing')" :class="['tab','text-20px',{ active: activeTab === 'ongoing'}]">Ongoing/Future</li>
          <li  @click="changeTab('past')" :class="['tab','text-20px',{ active: activeTab === 'past'}]">Past Journey</li>
        </ul>
      </div>
      <div class="h-full">
        <Ongoing :ongoingJourney="ongoingJourney"  v-if="activeTab === 'ongoing'"  />
        <Past :pastJourney="pastJourney" v-else />
      </div>
      <div @click="toggleCreateJourney" class="w-full max-w-325 mx-auto absolute bottom-50px left-1/2 transform -translate-x-1/2 ">
        <Button :text="'Create My Journey'"  />
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>

.tabs{
  @apply  w-full max-w-400 mx-auto 
}

ul{
  @apply flex items-center justify-around;
}

.tab{
  @apply sm:text-14px 
}

.tab.active{
  @apply text-vue-main border-b-2 py-5px border-vue-main
}



</style>