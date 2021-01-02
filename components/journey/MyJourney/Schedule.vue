<script>
  import { totalDay } from '@/lib/tool.js'
  export default {
    props:{
      journeyInfo:{
        type:Object,
        default: {}
      }
    },
    methods:{
      total(){
        return totalDay(this.journeyInfo.endDate, this.journeyInfo.startDate) 
      }
    }
  }
</script>
<template>
  <div>
    <div v-for="n in total" :key="n" >{{n}}</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
    <div>dsfsdfssdf</div>
  </div>
</template>


<style lang="scss" scoped>

</style>