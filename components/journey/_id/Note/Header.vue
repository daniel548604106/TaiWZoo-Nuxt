<script>
  export default {
    props:{
      complete:{
        type: Function,
        default: () => {}
      }
    }
  }
</script>
<template>
  <div class="w-full relative flex bg-white items-center justify-between py-20px px-20px">
    <nuxt-link :to="`/journey/${$route.params.id}`">
     <font-awesome-icon  :icon="['fas','chevron-left']" />     
    </nuxt-link>
    <div class=" text-18px title absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">Note</div>
    <div @click="complete" class="border uppercase  text-10px text-vue-main border-vue-main rounded-20px px-10px py-5px">
      Complete
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>