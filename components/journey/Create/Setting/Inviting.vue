<template>
  <div>
    <h1 class="mt-20px text-14px font-semibold">Inviting</h1>
        <div class="w-full flex items-center overflow-scroll mt-20px">
          <img v-for="n in 3" :key="n" src="~/assets/images/avatar.png" class="-mr-8px rounded-1/2 border-white border"  alt="">
          <div class=" ml-20px rounded-10px border border-vue-main px-10px py-6px flex items-center ">
            <font-awesome-icon :icon="['fas','user-plus']" class="text-vue-main mr-10px" /> 
            <h2 class="text-12px text-vue-main">Invite Others</h2>
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