
<script>
  import { mapGetters,mapActions } from 'vuex'
  export default {
    data(){
      return{
        selectedDate: {
           start: null, // From the beginning of time
            end: null
        },
         attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: 'yellow',
            start: { fillMode: 'outline', color:'yellow' },
            base: { fillMode: 'light',color:'yellow' },
            end: { fillMode: 'outline', color:'yellow' },
          },
          dates: new Date(),
          color: 'yellow',
          container: false
 
        },
      ],
      }
    },
    computed:{
      ...mapGetters('journey',['journeyInfo']),
      totalDays(){
        return (this.selectedDate.end - this.selectedDate.start)/ (60*1000*60*24) +1
      },
    
    },
    watch:{
      selectedDate(){
        this.setDate({totalDays:this.totalDays, startDate: this.selectedDate.start, endDate: this.selectedDate.end})
      }
    },
    methods:{
      ...mapActions('journey',['setDate'])
    }
  }
</script>
<template>
  <div class="w-full px-15px">
    <div>
      {{selectedDate}}
    </div>
    <div>
      {{totalDays}}
    </div>
    <div class="mx-auto flex items-center justify-center">
      <no-ssr>
        <v-date-picker
          :columns="$screens({ default: 1, lg: 2 })"
          is-expanded
          :attributes="attrs"
          value="range" 
          is-range
          color="yellow"
          v-model="selectedDate"
          :min-date="new Date()"
          show-caps
          locale="zh-tw"
        />
      </no-ssr>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>