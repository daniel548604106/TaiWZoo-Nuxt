<template>
  <div>
    <h1 class="mt-30px  text-14px font-semibold">Journey Profile</h1>
        <div class="relative mt-18px">
          <img class="rounded-20px w-full" src="~/assets/images/journey.png" alt="">
          <div class="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2">
            <font-awesome-icon :icon="['fas','images']" class="text-white"  />
            <h1 class="text-white">Custom Profile Picture</h1>
          </div>
        </div>
        <h1 class="mt-20px text-14px font-semibold">Journey Name</h1>
        <input placeholder="Paris" required class="mt-10px" type="text" v-model="journeyName">
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data(){
      return{
        journeyName: ''
      }
    },
    watch:{
      journeyName(newVal){
        this.setName(newVal)
      }
    },
    methods:{
      ...mapActions('journey',['setName'])
    },
    computed:{
      ...mapGetters('journey',['journeyInfo'])
    }
  }
</script>

<style lang="postcss" scoped>
  input{
    @apply bg-gray-100 rounded-6px w-full py-9px px-10px text-12px
  }
</style>