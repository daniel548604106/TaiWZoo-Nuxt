<script>
import Cookie from 'js-cookie'
import { mapGetters, mapMutations } from 'vuex'
import Header from '@/components/global/Header.vue'
import Auth from '@/components/auth/Index.vue'
import Overlay from '@/components/global/Overlay.vue'
export default {
  components:{
    Header,
    Auth,
    Overlay
  },
  computed:{
    ...mapGetters('auth',['isAuthOpen'])
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
   <notifications group="foo" />

  </div>
</template>

<style>
.main{
  height: calc(100vh - 120px)
}
</style>
