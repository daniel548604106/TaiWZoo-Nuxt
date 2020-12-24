<script>
  export default {
    props:{
      text:{
        type: String,
        default: ''
      }
    }
  } 
</script>
<template>
  <div class="bg-vue-main text-white cursor-pointer text-center py-18px w-full rounded-30px">
    <h1>{{text}}</h1>
  </div>
</template>


<style lang="scss" scoped>

</style>