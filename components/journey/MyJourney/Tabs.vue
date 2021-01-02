
<script>
  export default {
    props:{
      activeTab:{
        type:Number,
        default: 1
      },
      journeyInfo:{
        type: Object,
        default: {}
      },
      changeTab:{
        type:Function,
        default: () =>{}
      }
    },
    data(){
      return{
        activeDay: 1
      }
    },
    methods:{
      scrollClick(){
        window.scrollTo({ top: '330', behavior: 'smooth'})
      },
      tabClick(num){
        this.scrollClick()
        this.changeTab(num)
      },
    },
    computed:{
      totalDays(){
        return ((new Date(this.journeyInfo.endDate).getTime() - new Date(this.journeyInfo.startDate).getTime()) / (60*60*1000*24)) +1
      }
    },
    mounted(){
      window.addEventListener('scroll', this.scrollClick())
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollClick())
    },
  }
</script>
<template>
<div  >
  <div  class="flex items-center justify-around w-full py-15px ">
    <font-awesome-icon @click="tabClick(1)"  :icon="['fas','calendar-alt']" :class="{active: activeTab === 1}"/>
    <font-awesome-icon @click="tabClick(2)" :icon="['fas','map-marked-alt']" :class="{active: activeTab === 2}"/>
    <font-awesome-icon @click="tabClick(3)" :icon="['fas','hotel']" :class="{active: activeTab === 3}"/>
  </div>
  <div class="flex items-center justify-between px-15px pb-5px">
    <div class="flex items-center w-30% overflow-scroll ">
      <div v-for="n in 9" class="date text-12px flex flex-col items-center" :key="n">
        <span v-if="activeDay === n " class="mb-2px text-vue-main">DAY</span>
        <span :class="{active: activeDay === n }">{{n}}</span>
      </div>
    </div>
    <div class="flex items-center ">
      <span class="text-10px mr-6px">Total Expense</span>
      <nuxt-link :to="`/journey/${$route.params.id}/expense`">
        <div class="rounded-20px text-12px border py-4px px-10px">
        $ 0
        </div>
      </nuxt-link>
    </div>

  </div>

</div>
</template>

<style lang="postcss" scoped>
  body {
  scroll-behavior: smooth;
}
  .active{
    @apply text-vue-main
  }

  .date{
    @apply mr-20px;
  }

  .date .active{
    @apply bg-vue-main text-white rounded-1/2 p-10px w-20px h-20px flex flex-col items-center justify-center
  }

  .date:not(.active){
    @apply py-3px border-b-2  text-vue-title-active border-vue-title-active
  }
</style>