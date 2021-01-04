<script>
  import { apiPostExpense } from '@/api'
  import {mapActions , mapGetters} from 'vuex'
  import Panel from '@/components/journey/_id/Expense/Calculator/Panel.vue'
  import Category from '@/components/journey/_id/Expense/Calculator/Category.vue'
  import Selection from '@/components/journey/_id/Expense/Calculator/Selection.vue'
  export default {
    components:{
      Panel,
      Category,
      Selection
    },
    data(){
      return {
        name: '',
        amount: '',
        paymentType: 'cash',
        currency: 'EU',
        category: 'food',
        date: ''
      }
    },
    computed:{
      ...mapGetters('journey',['showCalculator'])
    },
    methods:{
      ...mapActions('journey',['toggleCalculator']),
      updateAmount(value){
        this.amount = value
      },
      updatePaymentType(value){
        this.paymentType = value
      },
      async postExpense(){
        console.log('expense')
        const expenseDetail = { name: this.name, amount: this.amount, paymentType: this.paymentType, currency: this.currency , category: this.category, date: this.date }
        const journey_id = this.$route.params.id
        const {data} = await apiPostExpense(journey_id,expenseDetail)
        console.log(data)
      }
    },
    
  }
</script>
<template>
  <div :class="['calculator',{'h-85vh': showCalculator},{'h-0': !showCalculator},{'hidden': !showCalculator}]">
   <div class="flex flex-col justify-between h-full">
    <div>
      <div class="flex items-center px-15px py-15px relative">
      <font-awesome-icon class="text-gray-600 w-20px h-20px" @click="toggleCalculator"  :icon="['fas','times']" />
      <select class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-vue-title-active text-white px-10px py-5px rounded-10px">
        <option value="">Today</option>
      </select>
    </div>
    {{amount}}
    {{paymentType}}
    {{name}}
    <div class="flex mt-10px items-center justify-between px-15px">
      <select class="py-10px px-10px rounded-20px bg-vue-main text-white" name="" id="">
        <img class="absolute left-10px top-1/2 transform -translate-y-1/2 w-30px h-30px rounded-1/2" src="~/assets/images/avatar.png" alt="">
        <option value="" class="flex items-center">
          <span>Daniel</span>
        </option>
      </select>
      <input type="text" v-model="name" class="text-right" placeholder="LUNCH (TAP TO EDIT)">
    </div>
      <div class="mt-5px">
        <Selection/>
      </div>
    </div>
    <div>
      <div>
      <Category/>
    </div>
    <div>
      <Panel @amount="updateAmount" @paymentType="updatePaymentType" :postExpense="postExpense"/>
    </div>
    </div>

   </div>
    <div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  .calculator{
    @apply  bg-white w-full relative border shadow-md rounded-t-xl transition-all duration-300 ease-in-out
  }
  .active{
    @apply h-50vh
  }



</style>