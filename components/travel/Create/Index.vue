<script>
  import { mapGetters } from 'vuex'
  import Destination from '@/components/travel/Create/Destination/index.vue'
  import Date from '@/components/travel/Create/Date/index.vue'
  import Setting from '@/components/travel/Create/Setting/index.vue'
  export default {
    components:{
      Destination,
      Date,
      Setting

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
    <div v-if="journeyStep === 'setting'">
      <Setting />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>