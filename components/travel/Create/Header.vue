<script>
  import { mapActions } from 'vuex'
  export default {
    methods:{
      ...mapActions('travel',['toggleCreateJourney'])
    }
  }
</script>
<template>
  <div class="w-full">
    <div class="header px-15px">
      <font-awesome-icon @click="toggleCreateJourney" :icon="['fas','times']" style="font-size:20px"/>
      <h1>Destination</h1>
      <h2>Skip</h2>
    </div>
  </div>
</template>


<style lang="postcss" scoped>

.header{
  @apply w-full py-20px flex items-center justify-between shadow-md
}

</style>