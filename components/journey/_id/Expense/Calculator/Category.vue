<template>
  <div class="py-10px px-10px bg-gray-300">
    <div class="category-carousel">
      <div v-for="n in 10" :key="n" class=" bg-gray-800 w-40px h-40px rounded-10px flex items-center justify-center">
        <img src="~/assets/images/food.svg" class="text-white" alt="">
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="postcss" scoped>
  .category-carousel{
    @apply text-center;
    display:grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: 1fr;
  }
</style>