<script>
  import Header from '@/components/journey/_id/Expense/Header.vue'
  import FilterBar from '@/components/journey/_id/Expense/FilterBar.vue'
  import List from '@/components/journey/_id/Expense/List.vue'
  import Calculator from '@/components/journey/_id/Expense/Calculator/index.vue'
  export default {
    components:{
      Header,
      FilterBar,
      List,
      Calculator
    },
    data(){
      return{
          showCalculator:false,
          backgroundImage: ''
      }
    },
    computed:{
      backgroundCover(){
        return this.backgroundImage || require('~/assets/images/paris.png')
      }
    },
    methods:{
      toggleCalculator(){
        this.showCalculator = !this.showCalculator
      }
    }
  }
</script>
<template>
  <div class="w-full">
    <div class="relative " >
      <div class="relative expense-bg" :style="{ backgroundImage: `url(${backgroundCover} )` }">
        <div class="absolute w-full top-0 left-0">
        <Header />
      </div>
      <div  class="text-white font-semibold absolute text-center top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
        <h1 class="text-32px">$27,000</h1>
        <h2 class="text-18px">Romantic Paris</h2>
        <p class="text-12px">
          <span>4 people</span> Created Dec 2020  
        </p>
      </div>
      </div>
      <div class="w-full">
        <FilterBar/>
      </div>
      <div class="w-full">
        <List/>
      </div>
      <div class="absolute bottom-0 z-6 w-full">
        <Calculator :toggleCalculator="toggleCalculator" :showCalculator="showCalculator"/>
      </div>
      <div class="flex fixed bottom-50px left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <button @click="toggleCalculator" class="flex items-center text-white bg-vue-main rounded-30px py-10px px-15px ">
          <div class="w-20px h-20px bg-white mr-5px rounded-1/2 relative">
            <font-awesome-icon class="text-vue-main absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2" :icon="['fas','plus']" />
          </div>
         <span> New Record</span>
        </button>
      </div>
    </div>

  </div>
</template>

<style lang="postcss" scoped>
  .expense-bg{
    padding-top: 60%;
    width: 100%;
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
  }

 
</style>