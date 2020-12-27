<script>
  import {mapActions} from 'vuex'
  export default {
    methods:{
      ...mapActions(['togglePage','switchActivePage']),
      toggle(){
        console.log('clicked')
        this.togglePage()
      }
    }
  }
</script>
<template>
  <div class="w-full h-50px px-15px flex items-center">
    <font-awesome-icon @click="toggle" :icon="['fas','chevron-left']"/>
  </div>
</template>


<style lang="scss" scoped>

</style>