<script>
// import jwt_decode from "jwt-decode";
import Cookie from 'js-cookie'
import axios from 'axios'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Header from '@/components/global/Header.vue'
import Auth from '@/components/auth/index.vue'
import Overlay from '@/components/global/Overlay.vue'
import CreateJourney from '@/components/journey/Create/index.vue'
import MobileTabMenu from '@/components/global/Mobile/TabMenu.vue'
import MobileSideMenu from '@/components/global/Mobile/SideMenu.vue'
import PopupPage from '@/components/popupPage/index.vue'
export default {
  components:{
    Header,
    Auth,
    Overlay,
    CreateJourney,
    MobileTabMenu,
    MobileSideMenu,
    PopupPage
  },
  computed:{
    ...mapGetters('auth',['isAuthOpen','OAuthProvider']),
    ...mapGetters('journey',['isCreateJourneyShow']),
    ...mapGetters(['mobileSideMenuShow','activePage','pageShow'])
  },
  methods:{
    ...mapMutations('auth',['setUserLogin']),
    ...mapActions('auth',['oAuthLogin']),
    checkOAuth(){
       console.log('testing')
     let code ;
     console.log($nuxt)
      // If the user is not authenticated
      if(!$nuxt.context.query.code) return
      const provider = Cookie.get('OAuthProvider') // 取得 oAuth provider
      code  = $nuxt.context.query.code 
      this.oAuthLogin({code, provider})
      
      if (Cookie.get('oauth_redirect_uri')) {
            $nuxt.context.app.router.push({
              path: JSON.parse(Cookie.get('oauth_redirect_uri')).url
            })
            console.log('success')
            console.log(JSON.parse(Cookie.get('oauth_redirect_uri')).url)
        } else {
          $nuxt.context.app.router.push({ path: '/' })
          console.log('false')
      }
    }
  },
  watch:{
    isCreateJourneyShow(){
      if(this.isCreateJourneyShow){
       document.body.style.overflow = 'hidden';
      }else{
        document.body.style.overflow = 'scroll';
      }
    }
  },
  mounted(){
    this.checkOAuth()
    console.log('helo',this.$nuxt)
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
    <div :class="['popup-page',{'active':pageShow}]">
      <PopupPage/>
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

  .main{
  height: calc(100vh - 50px);
}

.popup-page{
  @apply fixed top-0 -right-full z-13 transition ease-in-out duration-200;
}

.popup-page.active{
  @apply transform -translate-x-full
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
