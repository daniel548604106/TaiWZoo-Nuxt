<script>
import Cookie from 'js-cookie'
import { mapGetters, mapMutations } from 'vuex'
import Header from '@/components/global/Header.vue'
import Auth from '@/components/auth/index.vue'
import Overlay from '@/components/global/Overlay.vue'
import CreateJourney from '@/components/journey/Create/index.vue'
import MobileTabMenu from '@/components/global/Mobile/TabMenu.vue'
export default {
  components:{
    Header,
    Auth,
    Overlay,
    CreateJourney,
    MobileTabMenu
  },
  computed:{
    ...mapGetters('auth',['isAuthOpen']),
    ...mapGetters('journey',['isCreateJourneyShow']),
  },
  methods:{
    ...mapMutations('auth',['setUserLogin'])
  },
  mounted(){
    if(Cookie.get('auth')){
      this.setUserLogin()
    }
  }
}
</script>

<template>
  <div>
    <div class="header sm:hidden block">
      <Header/>
    </div>
    <div class="main">
      <Nuxt />
    </div>
    <div v-if="isAuthOpen" class="auth">
      <Overlay>
        <Auth/>
      </Overlay>
    </div>
    <div  :class="['create-journey',{'active':isCreateJourneyShow }]">
      <CreateJourney/>
    </div>
    <div class="fixed w-full bottom-0 z-12 sm:block hidden">
      <MobileTabMenu/>
    </div>
   <notifications group="foo" />

  </div>
</template>

<style>
.main{
  height: calc(100vh - 50px)
}

.create-journey{
  @apply absolute transition-all duration-300 ease-in-out top-0 left-0 z-11 w-full
}
.create-journey.active{
  @apply transform translate-y-full
}
</style>
