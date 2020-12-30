<template>
  <div class="flex items-center justify-between px-15px py-15px absolute top-0 left-0">
    <font-awesome-icon :icon="['fas','chevron-left']"/> 
    <div class="flex items-center ">
      <font-awesome-icon class="mr-10px w-22px h-22px" :icon="['fas','cog']"/>
      <font-awesome-icon  v-if="saved" :icon="['fas','bookmark']"/>
      <font-awesome-icon v-else :icon="['far','bookmark']"/>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        saved: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>