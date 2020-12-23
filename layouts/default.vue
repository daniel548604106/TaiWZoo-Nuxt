<script>
import Header from '@/components/global/Header.vue'
export default {
  components:{
    Header
  }
}
</script>

<template>
  <div>
    
    <Header/>
   <div class="main">
    <Nuxt />
   </div>
   <notifications group="foo" />

  </div>
</template>

<style>
.main{
  height: calc(100vh - 120px)
}
</style>
