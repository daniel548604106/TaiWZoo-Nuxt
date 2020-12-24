
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
  <div :style="{ backgroundImage: `url(${img})` }" class="w-full h-full card rounded-10px shadow-md ">
    
  </div>
</template>

<style lang="postcss" scoped>

</style>