<script>
  import { mapGetters } from 'vuex'
  import Destination from '@/components/journey/Create/Destination/index.vue'
  import Date from '@/components/journey/Create/Date/index.vue'
  import Setting from '@/components/journey/Create/Setting/index.vue'
  export default {
    components:{
      Destination,
      Date,
      Setting

    },
    computed:{
      ...mapGetters('journey',['journeyStep'])
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