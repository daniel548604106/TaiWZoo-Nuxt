<script>
  import { mapActions } from 'vuex'
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
        img: require('~/assets/images/journey.png'),
        hasData: false,
        activeTab: 'ongoing'
      }
    },
    methods:{
      ...mapActions('journey',['toggleCreateJourney']),
      changeTab(tab){
        this.activeTab = tab
      }
    }
  }
</script>
<template>
  <div class="w-full relative h-full flex flex-col items-center ">
    <div class="w-full">
      <MobileHeader :title="'My Journey'"/>
    </div>
    <div class=" px-10px w-full">
      <div class="tabs sm:mt-20px sm:mb-50px mt-80px mb-50px">
        <ul>
          <li @click="changeTab('ongoing')" :class="['tab',{ active: activeTab === 'ongoing'}]">Ongoing/Future</li>
          <li  @click="changeTab('past')" :class="['tab',{ active: activeTab === 'past'}]">Past Journey</li>
        </ul>
      </div>
      <div class="h-full">
        <Ongoing  v-if="activeTab === 'ongoing'"  />
        <Past  v-else />
      </div>
      <div @click="toggleCreateJourney" class="w-full max-w-325 mx-auto absolute bottom-50px left-1/2 transform -translate-x-1/2 ">
        <Button :text="'Create My Journey'" />
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
  @apply text-14px
}

.tab.active{
  @apply text-vue-main
}



</style>