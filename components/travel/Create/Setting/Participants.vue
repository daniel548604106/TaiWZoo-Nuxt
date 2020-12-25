<template>
  <div>
    <h1 class="mt-20px text-14px font-semibold">Participants</h1>
        <div class="w-full flex items-center overflow-scroll mt-20px">
          <img v-for="n in 10" :key="n" src="~/assets/images/avatar.png" class="mr-12px" alt="">
        </div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>