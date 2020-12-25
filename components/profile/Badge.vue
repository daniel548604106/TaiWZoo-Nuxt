<template>
  <div class="w-full py-10px border-t border-b my-15px">
    <div class="flex items-center justify-between">
      <div>
        <h2>Badges</h2>
        <div class="flex mt-5px">
          <img src="~/assets/images/explore.svg" class="mr-10px" alt="">
          <h1>85</h1>
        </div>
      </div>
      <div class="w-full max-w-210 flex items-center py-10px  overflow-scroll whitespace-nowrap ">
        <div v-for="n in 10" :key="n">
          <img src="~/assets/images/social.svg" class="inline-block mx-10px w-50px h-50px" alt="">
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