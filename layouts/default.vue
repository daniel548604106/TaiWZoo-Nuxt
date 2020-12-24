<script>
import Header from '@/components/global/Header.vue'
import Auth from '@/components/auth/Index.vue'
import Overlay from '@/components/global/Overlay.vue'
export default {
  components:{
    Header,
    Auth,
    Overlay
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
    <div class="auth">
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
