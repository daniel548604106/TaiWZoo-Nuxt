<script>
  export default {
    props:{
      toggleEditDateOpen:{
        type:Function,
        default: () => {}
      }
    }
  }
</script>
<template>
  <div>
    <h1 class="mt-20px text-14px font-semibold">Date</h1>
        <div class="flex items-center justify-between w-full mt-10px">
          <h2 class="text-12px">2020/12/18-2020/12/23</h2>
          <div @click="toggleEditDateOpen" class="flex items-center ">
            <span class="mr-5px text-vue-green text-12px">Edit</span>
            <img src="~/assets/images/edit.svg" alt="">
          </div>
        </div>

  </div>
</template>


<style lang="postcss" scoped>
  
</style>