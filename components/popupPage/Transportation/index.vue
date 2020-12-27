<template>
  <div> 
    sdfsdf
    <p>{{busData}}</p>
  </div>
</template>

<script>
  import {apiGetTransportationData } from '@/api'
  export default {
    data(){
      return{
        busData: []
      }
    },
    async mounted(){
      const data = await apiGetTransportationData('Hsinchu')
      console.log(data)
      this.busData = data
    }
  }
</script>

<style lang="scss" scoped>

</style>