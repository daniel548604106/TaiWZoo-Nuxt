<script>
import Cookie from 'js-cookie'
import { mapGetters, mapMutations } from 'vuex'
import Header from '@/components/global/Header.vue'
import Auth from '@/components/auth/index.vue'
import Overlay from '@/components/global/Overlay.vue'
import CreateJourney from '@/components/journey/Create/index.vue'
import MobileTabMenu from '@/components/global/Mobile/TabMenu.vue'
import MobileSideMenu from '@/components/global/Mobile/SideMenu.vue'
export default {
  components:{
    Header,
    Auth,
    Overlay,
    CreateJourney,
    MobileTabMenu,
    MobileSideMenu
  },
  computed:{
    ...mapGetters('auth',['isAuthOpen']),
    ...mapGetters('journey',['isCreateJourneyShow']),
    ...mapGetters(['mobileSideMenuShow'])
    
  },
  methods:{
    ...mapMutations('auth',['setUserLogin'])
  },
  mounted(){
    if(Cookie.get('auth')){
      this.setUserLogin()
    }
    console.log('checking',this.mobileSideMenuShow)
  }
}
</script>

<template>
  <div >
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
    <div  :class="['mobile-side-menu',{'active': mobileSideMenuShow }]">
      <MobileSideMenu/>
    </div>
    <div class="fixed w-full bottom-0 z-12 sm:block hidden">
      <MobileTabMenu/>
    </div>
   <notifications group="foo" />

  </div>
</template>

<style>

body{
  background: #f0f0f0;
}
  .main{
  height: calc(100vh - 50px);
}


.mobile-side-menu.active { 
  @apply translate-x-full;
}

.mobile-side-menu {
  @apply fixed z-13 top-0 w-full -left-full transform  transition-all duration-200 ease-in-out;
}

.create-journey{
  @apply absolute transition-all top-0 duration-300 ease-in-out  -left-full z-11 w-full;
}
.create-journey.active{
  @apply transform translate-x-full
}


</style>
