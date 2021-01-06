
<script>
  export default {
  props:{
    expenses: {
      type: Array,
      default: []
    }
  },
  data(){
    return{
      lent: false,
      borrowed: true
    }
  },
  computed:{
    expenseData(){
      return this.expenses[0].expenseList
    }
  }
  }
</script>
<template>
  <div  class="h-50vh overflow-scroll">
    <div v-if="true">
      <div v-for="list in expenseData"  :key="list._id">
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
          <h2 class="text-14px">{{list.name}}</h2>
        </div>
        <div class="flex flex-col items-end ">
          <p v-if="lent" class="text-vue-green font-semibold">You Lent</p>
          <p v-if="borrowed" class="text-vue-pink font-semibold">You Borrowed</p>
          <p>${{list.amount}}</p>
        </div>
      </div>
    </div>
    </div>
    <div v-else class=" shadow-md border-t w-full h-full flex flex-col items-center justify-center">
       <img class="w-40% h-auto" src="~/assets/images/no-expense.svg" alt="">
       <h1 class="mt-20px text-center">No current record has been found, <br> add a new one!</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>