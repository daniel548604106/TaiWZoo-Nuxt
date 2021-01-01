<script>
  export default {
    props:{
      text:{
        type: String,
        default: ''
      },
      totalDays: {
        type: Number,
        default: 0
      }
    }
  } 
</script>
<template>
  <div class="bg-vue-main flex items-center justify-center text-white cursor-pointer text-center py-18px w-full rounded-30px">
    <h1 class="mr-5px">{{text}}</h1>
    <span v-if="totalDays">({{totalDays}}days)</span>
  </div>
</template>


<style lang="scss" scoped>

</style>