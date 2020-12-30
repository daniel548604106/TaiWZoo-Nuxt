<script>
  export default {
    data(){
      return{
        paymentType : 'cash',
        current: ''
      }
    },
    methods:{
      append(num){
        this.current = `${this.current}` + num
      },
      back(){
       this.current = this.current.split('').slice(0,-1).join('')
      },
      dot(){
        if( this.current.indexOf('.') === -1){
          this.current = this.current.concat('.')
        }
      }
    }
  }
</script>
<template>
  <div>
    <div class="py-5px bg-gray-100 px-10px flex items-center justify-between">
      <div  @click="paymentType = 'credit' " v-if="paymentType === 'cash'" class="flex items-center">
        <font-awesome-icon class="mr-5px w-20px h-20px text-vue-main" :icon="['fas','dollar-sign']"  /> 
        <h2 class="text-vue-main uppercase text-16px font-semibold">Cash</h2>
      </div>
      <div @click="paymentType = 'cash' "  v-else class="flex items-center">
        <font-awesome-icon class="mr-5px w-20px h-20px text-vue-green" :icon="['far','credit-card']"  /> 
        <h2 class="text-vue-green uppercase text-16px font-semibold">Credit</h2>
      </div>
      <h1 class="text-gray-700 text-32px">${{current || 0}}</h1>
    </div>
    <div class="calculator">
      <select class="currency" name="" id="">
          <option value="">EU</option>
        </select>
      <div @click="back"><font-awesome-icon :icon="['fas','chevron-left']"/></div>
       <div>
         <font-awesome-icon :icon="['fas','divide']"/>
       </div>
      <div @click="append(7)">7</div>
      <div @click="append(8)">8</div>
      <div @click="append(9)">9</div>
       <div>
        <font-awesome-icon :icon="['fas','times']"/>
      </div>
      <div @click="append(4)">4</div>
      <div @click="append(5)">5</div>
      <div @click="append(6)">6</div>
      <div>
        <font-awesome-icon :icon="['fas','minus']"/>
      </div>
      <div @click="append(1)">1</div>
      <div @click="append(2)">2</div>
      <div @click="append(3)">3</div>
       <div>
         <font-awesome-icon :icon="['fas','plus']"/>
       </div>
      <div @click="append(0)">0</div>
      <div @click="dot">.</div>
      <div>
        <font-awesome-icon class="text-vue-main" :icon="['fas','check']" />
      </div>
      <div>
        <font-awesome-icon :icon="['fas','equals']"/>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
.calculator{
  @apply bg-vue-title-active text-white;
  @apply text-26px;
  text-align: center;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  
}

.calculator div{
  align-items: center;
}

.currency{
  grid-column: 1/3;
  @apply bg-vue-title-active text-white rounded-20px px-10px py-10px
}
</style>