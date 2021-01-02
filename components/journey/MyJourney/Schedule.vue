<script>
  import { mapActions } from 'vuex'
  import draggable from 'vuedraggable'
  import { totalDay } from '@/lib/tool.js'
  export default {
     components: {
            draggable,
        },
    props:{
      journeyInfo:{
        type:Object,
        default: {}
      }
    },
    data(){
      return{
        list:[
          {
            name: 'Paris'
          },
          {
            name: 'Mont Saint Michel'
          },
          {
            name: 'Lille'
          },

        ]
      }
    },
    methods:{
      ...mapActions('journey',['toggleCalculator']),
      total(){
        return totalDay(this.journeyInfo.endDate, this.journeyInfo.startDate) 
      },
      removeAt(idx) {
      this.list.splice(idx, 1);
      },
      add: function() {
      id++;
      this.list.push({ name: "Juan " + id, id, text: "" });
      },
      addExpense(){
        this.$router.push(`/journey/${this.$route.params.id}/expense`)
        this.toggleCalculator()
      }
    }
  }
</script>
<template>
  <div class="px-10px mt-20px mb-100px">
    <div v-for="n in total" :key="n" >{{n}}</div>
    <draggable   @start="drag=true" @end="drag=false">
          <div class="dragInfo relative" v-for="(element, idx) in list" :key="element.name" >
          <font-awesome-icon :icon="['fas','grip-lines']" class="mr-15px" />
          <span class="text">{{ element.name }} </span>
          <font-awesome-icon  class="absolute top-10px right-10px" @click="removeAt(idx)" :icon="['fas','times']" />  
          </div>
      </draggable>
    <div class="btn flex items-center justify-around px-20px mt-20px">
      <div class="flex items-center">
        <span class="mr-5px text-vue-green">Note</span>
        <div class="text-vue-green border-vue-green border w-26px h-26px rounded-1/2 flex items-center justify-center">
          <font-awesome-icon  :icon="['fas','pencil-alt']" />
        </div>
      </div>
      <div class="flex items-center">
        <span class="text-vue-title-active mr-5px">Place</span>
        <div class="text-vue-title-active border-vue-title-active border w-26px h-26px rounded-1/2 flex items-center justify-center">
          <font-awesome-icon  :icon="['fas','location-arrow']" />
        </div>
      </div>
      <div @click="addExpense" class="flex items-center">
        <span class="text-vue-main mr-5px">Expense</span>
        <div class="text-vue-main w-26px h-26px border-vue-main  border rounded-1/2 flex items-center justify-center">
          <font-awesome-icon  :icon="['fas','dollar-sign']" />
        </div>
      </div>
    </div>
    <div class="mt-100px">
      fsldnflksdnf
    </div>
   
  </div>
</template>


<style lang="postcss" scoped>

  .dragInfo{
    @apply shadow-md rounded-10px py-30px px-10px mb-10px
  }
  .button {
  margin-top: 35px;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}
.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>