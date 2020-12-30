<script>
  export default {
    data(){
      return{
        oweMoney: true
      }
    }
  }
</script>
<template>
  <div class="w-full flex items-center py-10px justify-between">
    <div class="flex items-center">
      <select class="mr-5px text-12px day-select" name="day" id="day">
        <option value="">ALL</option>
      </select>
      <select class="category-select text-12px" name="category" id="category">
        <option value="">
          123123
        </option>
      </select>
    </div>
    <div class="flex flex-col justify-center items-end">
      <p v-if="oweMoney" class="text-10px">(You owe $2,700)</p>
      <p class="text-10px">Total <span class="text-16px font-semibold">27000</span> </p>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
.day-select{
  @apply bg-vue-main text-white rounded-30px py-10px px-10px
}

option{
  @apply py-5px px-5px border-vue-main
}

.category-select{
  @apply border-vue-main border rounded-30px py-10px px-10px text-vue-main
}
</style>