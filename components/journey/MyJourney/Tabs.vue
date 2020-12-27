
<script>
  export default {
    props:{
      activeTab:{
        type:Number,
        default: 1
      },
      changeTab:{
        type:Function,
        default: () =>{}
      }
    },
    data(){
      return{
        days:[1,2,3,4,5],
        activeDay: 1
      }
    }
  }
</script>
<template>
<div class="shadow-sm" >
  <div class="flex items-center justify-around w-full py-15px ">
    <font-awesome-icon @click="changeTab(1)"  :icon="['fas','calendar-alt']" :class="{active: activeTab === 1}"/>
    <font-awesome-icon @click="changeTab(2)" :icon="['fas','map-marked-alt']" :class="{active: activeTab === 2}"/>
    <font-awesome-icon @click="changeTab(3)" :icon="['fas','hotel']" :class="{active: activeTab === 3}"/>
  </div>
  <div class="flex items-center justify-between px-15px pb-10px">
    <div class="flex items-center">
      <div v-for="n in 5" class="mr-10px" :key="n">
        {{n}}
      </div>
    </div>
    <div class="flex items-center ">
      <span class="text-10px mr-6px">Total Expense</span>
      <div class="rounded-10px text-12px border py-4px px-10px">
       $ 27000
      </div>
    </div>

  </div>

</div>
</template>

<style lang="postcss" scoped>
  .active{
    @apply text-vue-main
  }
</style>