<script>
  import { mapActions } from 'vuex'
   import Header from '@/components/journey/Create/Header.vue'
  import Button from '@/components/global/Button.vue'
  import Overlay from '@/components/global/Overlay.vue'
  import JourneyInfo from '@/components/journey/Create/Setting/JourneyInfo.vue'
  import DateInfo from '@/components/journey/Create/Setting/DateInfo.vue'
  import EditSetting from '@/components/journey/Create/Setting/EditSetting.vue'
  import Participants from '@/components/journey/Create/Setting/Participants.vue'
  import Inviting from '@/components/journey/Create/Setting/Inviting.vue'
  import DatePicker from '@/components/journey/Create/DatePicker.vue'

  export default {
    components:{
      Header,
      Button,
      JourneyInfo,
      DateInfo,
      DatePicker,
      Overlay,
      EditSetting,
      Inviting
    },
    data(){
      return{
        editDateOpen: false,
        toggleSwitch: false
      }
    },
    methods:{
      ...mapActions('journey',['toggleCreateJourney','postJourneyData']),
      async complete(){
        console.log('completed')
        await this.postJourneyData()
        this.toggleCreateJourney()
        // post data
        // close create popup
        // redirect to journey/journey/:id
      },
      toggleEditDateOpen(){
        console.log('clicked')
        this.editDateOpen = !this.editDateOpen
      }
    }
  }
</script>
<template>
  <div class="relative h-100vh bg-white">
    <div>
      <Header :title="'Journey Setting'" :icon1="'chevron-left'" :to="'date'"/>
    </div>
    <div class="px-15px h-80vh overflow-scroll">
      <div>
        <JourneyInfo />
        <DateInfo :toggleEditDateOpen="toggleEditDateOpen"/>
        <div @click.self="toggleEditDateOpen" v-if="editDateOpen" class="overlay">
          <DatePicker/>
        </div>
        <EditSetting />
        <Participants/>
        <Inviting />
        <div @click="complete" class="w-full my-50px">
          <Button  :text="'Complete'" />
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  .overlay{
    @apply flex flex-col fixed top-0 left-0 w-100vw h-100vh bg-black;
    @apply bg-opacity-40 z-10 items-center justify-center;
  }
  
</style>