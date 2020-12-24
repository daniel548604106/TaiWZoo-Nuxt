
<script>
  export default {
    props:{
      img:{
        type: String,
        default: ''
      }
    }
  }
</script>
<template>
  <div class="w-full max-w-110 rounded-10px shadow-md">
    <img :src="img" alt="">
  </div>
</template>

<style lang="scss" scoped>

</style>