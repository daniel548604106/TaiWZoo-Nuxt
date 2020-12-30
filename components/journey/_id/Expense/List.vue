
<script>
  export default {
  data(){
    return{
      lent: false,
      borrowed: true
    }
  }    
  }
</script>
<template>
  <div  class="h-50vh overflow-scroll">
    <div v-for="n in 6"  :key="n">
    <div class="py-5px px-15px  uppercase text-white bg-vue-title-active">
      Day {{n}}
    </div>
    <div v-for="n in 3" :key="n"  class="flex py-7px px-20px  shadow-md items-center justify-between" >
      <div class="flex items-center ">
        <div class="text-center mr-10px">
          <p>Dec</p>
          <p>18</p>
        </div>
        <div class="mr-10px bg-vue-main rounded-10px px-10px py-10px flex items-center justify-center">
          <img src="~/assets/images/food.svg" alt="">
        </div>
        <h2 class="text-14px">Coca Cola</h2>
      </div>
      <div class="flex flex-col items-end ">
        <p v-if="lent" class="text-vue-green font-semibold">You Lent</p>
        <p v-if="borrowed" class="text-vue-pink font-semibold">You Borrowed</p>
        <p>$80</p>
      </div>
    </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>