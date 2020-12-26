<script>
  export default {
    data(){
      return{
        posts:[]
      }
    }
  }
</script>
<template>
<div>
    <div v-if="posts.length" class="w-full flex items-center flex-wrap">
        <div v-for="n in 10" :key="n" style=" 'backgroundImage' : url('~/assets/images/journey.png')" class="w-100px h-100px rounded-10px" alt=""></div>
    </div>
  <div v-else class="w-full bg-gray-100 rounded-20px h-200px flex items-center justify-center">
    <div class="flex items-center">
      <div class="w-20px h-20px rounded-1/2 bg-white flex items-center justify-center mr-5px">
        <font-awesome-icon :icon="['fas','plus']" class="w-10px h-10px text-vue-main" />
      </div>
      <h2 class="text-vue-main ">Share your journey</h2>
    </div>
  </div>

</div>
</template>


<style lang="scss" scoped>

</style>