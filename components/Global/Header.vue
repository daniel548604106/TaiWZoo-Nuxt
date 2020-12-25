<script>
  import { mapActions, mapGetters } from 'vuex'
  import SideMenu from '@/components/global/SideMenu.vue'
  export default {
    components:{
      SideMenu
    },
    data(){
      return{
        isSideMenuOpen: false
      }
    },
    computed:{
      ...mapGetters('auth',['isUserLoggedIn'])
    },
    methods:{
      ...mapActions('auth',['toggleAuthOpen']),
      toggleSideMenu(){
        this.isSideMenuOpen = !this.isSideMenuOpen
      },
      activeTab(tab){
        if(!tab){
          return true
        }else{
          return this.$route.path.includes(tab) 
        }
      }
    },
  }
</script>
<template>
  <div class="w-full h-50px px-30px shadow-lg">
    <div class="w-full h-full max-w-1200 mx-auto flex items-center justify-between">
      <div>
        <nuxt-link to="/">
          <img src="~/assets/logo.svg" class="w-30px h-30px" alt="">
        </nuxt-link>
      </div>
      <div>
        <ul class="tabs flex items-center">
          <li :class="{active: activeTab()}"><nuxt-link to="/"><img src="~/assets/images/home.svg" alt=""></nuxt-link></li>
          <li :class="{active: activeTab('explore')}"><nuxt-link to="/explore"><img src="~/assets/images/explore.svg" alt=""></nuxt-link></li>
          <li :class="{active: activeTab('journey')}"><nuxt-link to="journey"><img src="~/assets/images/journey.svg" alt=""></nuxt-link></li>
          <li :class="{active: activeTab('social')}"><nuxt-link to="/social"><img src="~/assets/images/social.svg" alt=""></nuxt-link></li>
        </ul>
      </div>
      <div>
        <div class="relative flex items-center" v-if="isUserLoggedIn">
          <div class="cursor-pointer mr-20px" >
            <nuxt-link to="/profile">
             <img src="~/assets/images/profile.svg" alt="">
            </nuxt-link>
          </div>
          <div @click="toggleSideMenu" class="cursor-pointer">
            <img src="~/assets/images/menu.svg" alt="">
          </div>
          <div v-if="isSideMenuOpen" class="absolute top-30px right-1/2 transform translate-x-1/2">
            <SideMenu :toggleSideMenu='toggleSideMenu' />
          </div>
        </div>
        <ul v-else class="flex items-center">
          <li class="cursor-pointer" @click="toggleAuthOpen('login')">Login</li>
          <li class="cursor-pointer"  @click="toggleAuthOpen('signup')">Signup</li>
        </ul>
      </div>
    </div>
  </div>
</template>



<style lang="postcss" scoped>
  .tabs li{
    @apply p-10px rounded-10px
  }

  .tabs li:active{
    @apply bg-red-400 
  }
  .tabs li:not(:last-of-type){
    @apply mr-50px
  }

  li:not(:last-of-type){
    @apply mr-20px
  }
</style>