<template>
  <div class="w-full px-10px ">
    <div class="w-full mx-auto relative mt-10px">
      <input placeholder="Search..." type="text">
      <font-awesome-icon :icon="['fas','search']" class="absolute right-10px top-1/2 transform -translate-y-1/2"/>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="postcss" scoped>
  input{
    @apply py-5px px-10px rounded-4px bg-gray-100 w-full text-14px
  }
</style>