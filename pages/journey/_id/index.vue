<template>
  <div>
    <MyJourney :journeyInfo="journeyInfo"/>
  </div>
</template>

<script>
  import { apiGetJourneyData } from '@/api'
  import MyJourney from '@/components/journey/MyJourney/index.vue'
  export default {
    components:{
      MyJourney
    },
    data(){
      return{
        journeyInfo: {}
      }
    },
    async mounted(){
      const id = this.$route.params.id
      const {data} = await apiGetJourneyData(id)
      console.log('data =>' ,data)
      this.journeyInfo = data.journey
    }
    
  }
</script>

<style lang="scss" scoped>

</style>