<script>
export default {
  components:{
  
  }
}
</script>

<template>
  <div>
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
