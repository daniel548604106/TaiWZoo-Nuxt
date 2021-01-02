<template>
  <div class="w-full relative flex text-white items-center justify-between py-20px px-20px">
    <nuxt-link :to="`/journey/${$route.params.id}`">
     <font-awesome-icon  :icon="['fas','chevron-left']" />     
    </nuxt-link>
    <div class=" text-18px title absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">Expense</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>