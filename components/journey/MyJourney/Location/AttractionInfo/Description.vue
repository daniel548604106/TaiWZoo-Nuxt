<template>
  <div>
    <div class=" pt-30px py-15px px-20px">
    <h1 class="text-20px">Disney Paris</h1>
    <div>
      <span class="text-12px">Paris</span>
      <font-awesome-icon class="w-10px h-10px" :icon="['fas','map-marker-alt']"/> 
    </div>
    <hr class="my-15px ">
    <h2 class="uppercase text-12px font-semibold">About <span >Disneyland Paris</span></h2>
    <p class="mt-10px text-10px text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis eros urna pellentesque vivamus scelerisque eget nunc pharetra, eget. Auctor neque fermentum eleifend pretium diam in leo urna. Integer amet netus habitasse erat dui elit sit id. Laoreet bibendum et faucibus sodales. Nisi, netus amet nibh vulputate sollicitudin id dolor a id.</p>
  </div>
  <div class="bg-vue-white px-20px py-20px flex items-center justify-between">
    <div>
      <div class="text-gray-400">
        <p>22 &deg;c</p>
        <p>Sunny</p>
      </div>
    </div>
    <div class="flex items-center">
      <img v-for="n in 3" :key="n" class="w-25px h-25px border-white -mr-5px" src="~/assets/images/avatar.png" alt="">
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