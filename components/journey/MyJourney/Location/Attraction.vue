<script>
  import { mapGetters } from 'vuex'
  export default {
      computed:{
      ...mapGetters('journey',['attractionSearchInput'])
    },
  }
</script>
<template>
  <div class="w-full px-25px"> 
    <div class="mt-20px" v-if="attractionSearchInput">
      <h1>Search Result</h1>
      <img src="~/assets/images/search-not-found.svg" class="w-100px mx-auto mt-10px" alt="">
    </div>

  </div>
</template>


<style lang="scss" scoped>

</style>