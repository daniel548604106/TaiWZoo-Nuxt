<script>
  import { mapGetters } from 'vuex'
  export default {
    data(){
      return{
        added: false
      }
    },
    computed:{
      ...mapGetters('journey',['attractionSearchInput'])
    },
  }
</script>
<template>
  <div class="w-full px-25px"> 
    <div class="mt-20px">
      <h1>Featured</h1>
      <div class="h-350px overflow-scroll py-10px">
      <div v-for="n in 5" :key="n" class="mb-10px card flex items-center rounded-10px relative py-15px shadow-lg px-10px">
        <img src="~/assets/images/paris.png" class="sm:w-80px w-full max-w-100 mr-10px rounded-6px h-auto" alt="">
        <div class="flex flex-col justify-between">
          <div class="">
            <h2 class="text-16px">Paris Disney</h2>
            <p class="text-10px text-gray-500">222 <span>km away</span> </p>
          </div>
          <div>
            <div>
             <span class="text-14px">Paris</span>
            <font-awesome-icon class="text-vue-main" :icon="['fas','map-marker-alt']" />
            </div>
          </div>
        </div>
        <div class="absolute top-10px right-10px">
          <h2 class="text-vue-main text-14px cursor-pointer">Add</h2>
        </div>
        <font-awesome-icon v-if="added" class="bottom-10px text-gray-300 right-10px absolute" :icon="['fas','bookmark']" />
        <font-awesome-icon v-else class="bottom-10px text-vue-main right-10px absolute" :icon="['far','bookmark']" />
      </div>
    </div>

      </div>
    <div class="mt-20px" v-if="attractionSearchInput">
      <h1>Search Result</h1>
      <img src="~/assets/images/search-not-found.svg" class="w-100px mx-auto mt-10px" alt="">
    </div>

  </div>
</template>


<style lang="scss" scoped>

</style>