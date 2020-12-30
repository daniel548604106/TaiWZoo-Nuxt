<template>
  <div class=" px-15px py-20px">
    <div class="flex w-full items-center justify-between ">
      <h1>Nearby</h1>
      <font-awesome-icon :icon="['fas','chevron-right']" />
    </div>
    <div class="flex items-center justify-between mt-20px">
      <div v-for="n in 3" :key="n"  class="shadow-md rounded-10px py-10px px-10px">
        <img src="~/assets/images/disney-paris.png" class="w-100px h-60px rounded-10px" alt="">
        <div class="flex items-center justify-between ">
          <span class="w-80px text-9px mt-10px">Green Lands  Village & Spa</span>
          <font-awesome-icon :icon="['far','bookmark']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
