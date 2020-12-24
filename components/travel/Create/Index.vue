<script>
  import { mapGetters } from 'vuex'
  import Destination from '@/components/travel/Create/Destination/Index.vue'
  import Date from '@/components/travel/Create/Date/Index.vue'
  export default {
    components:{
      Destination,
      Date
    },
    computed:{
      ...mapGetters('travel',['journeyStep'])
    }
  }
</script>
<template>
  <div>
    <div v-if="journeyStep === 'destination'">
      <Destination />
    </div>
    <div v-if="journeyStep === 'date'">
      <Date />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>