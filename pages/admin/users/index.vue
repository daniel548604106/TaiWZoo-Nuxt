
<script>
import { apiGetAllUsers } from '@/api'
  export default {
    async mounted(){
      const data = await apiGetAllUsers()
      console.log('users',data)
    }
  }
</script>
<template>
  <div>
    For All users
  </div>
</template>

<style lang="scss" scoped>

</style>