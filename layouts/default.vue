<script>
import Cookie from 'js-cookie'
import { mapGetters, mapMutations } from 'vuex'
import Header from '@/components/global/Header.vue'
import Auth from '@/components/auth/Index.vue'
import Overlay from '@/components/global/Overlay.vue'
import CreateJourney from '@/components/travel/Create/Index.vue'
export default {
  components:{
    Header,
    Auth,
    Overlay,
    CreateJourney
  },
  computed:{
    ...mapGetters('auth',['isAuthOpen']),
    ...mapGetters('travel',['isCreateJourneyShow'])
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
    <div class="header">
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
    <div  :class="['create-journey','top-0',{'top-100%':!isCreateJourneyShow }]">
      <CreateJourney/>
    </div>
   <notifications group="foo" />

  </div>
</template>

<style>
.main{
  height: calc(100vh - 120px)
}

.create-journey{
  @apply absolute transition-all duration-300 ease-in-out left-0 z-11 w-full
}
</style>
