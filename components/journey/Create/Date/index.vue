<script>
  import { mapGetters, mapActions } from 'vuex'
  import Header from '@/components/journey/Create/Header.vue'
  import Button from '@/components/global/Button.vue'
  import DatePicker from '@/components/journey/Create/DatePicker.vue'
  export default {
    components:{
      Header,
      Button,
      DatePicker,
    },
    data(){
      return {
        checkDate: true
      }
    },
    computed:{
      ...mapGetters('journey',['journeyInfo']),
    },
    watch:{
      journeyInfo(newVal){
        if(newVal.startDate.length) this.checkDate = true
      }
    },
    methods:{
      ...mapActions('journey',['proceedTo']),
      submitDate(){
        // if(!this.checkDate){
        //   return
        // }
        this.proceedTo('setting')
      }
    }
  }
</script>
<template>
  <div class="relative h-100vh bg-white">
    <Header :title="'Select Date'" :icon1="'chevron-left'" :to="'destination'"/>
    <div class="px-15px  ">
      <div class="mt-120px">
        <DatePicker />
      </div>
      <div @click="submitDate" class="absolute bottom-80px w-320px left-1/2 transform -translate-x-1/2">
        <Button class="btn"   :text="'Next Step'" :totalDays="journeyInfo.totalDays" />
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  .btn:disabled{
    @apply text-vue-title-active;
  }
</style>