<script>
  import { mapActions } from 'vuex'
  import Header from '@/components/travel/Create/Header.vue'
  import Button from '@/components/global/Button.vue'
  import DatePicker from '@/components/travel/Create/Date/DatePicker.vue'
  export default {
    components:{
      Header,
      Button,
      DatePicker,
    },
    data(){
      return {
        totalDays: 5
      }
    },
    methods:{
      ...mapActions('travel',['proceedTo'])
    }
  }
</script>
<template>
  <div class="relative h-100vh bg-white">
    <Header :title="'Select Date'" :icon1="'chevron-left'"/>
    <div class="px-15px  ">
      <div>
        <DatePicker />
      </div>
      <div @click="proceedTo('setting')" class="absolute bottom-80px w-320px left-1/2 transform -translate-x-1/2">
        <Button  :text="`Next Step (${totalDays}days)`" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>