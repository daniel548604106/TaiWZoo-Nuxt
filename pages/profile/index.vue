<script>

import Cookie from 'js-cookie'
import {apiGetMyData}  from '@/api'
  export default {
    async mounted(){
      const data = await apiGetMyData()
      console.log(data)
    }
  }
</script>
<template>
  <div>

  </div>
</template>


<style lang="scss" scoped>

</style>