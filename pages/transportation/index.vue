<template>
  <div> 
    sdfsdf
  </div>
</template>

<script>
  import {apiGetTransportationData } from '@/api'
  export default {
    async mounted(){
      const data = await apiGetTransportationData('Hsinchu')
      console.log(data)
    }
  }
</script>

<style lang="scss" scoped>

</style>