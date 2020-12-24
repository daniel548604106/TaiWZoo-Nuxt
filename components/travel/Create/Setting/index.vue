<script>
   import Header from '@/components/travel/Create/Header.vue'
  import Button from '@/components/global/Button.vue'
  export default {
    components:{
      Header,
      Button
    },
    data(){
      return{
        journeyName: 'Taipei'
      }
    },
    methods:{
      complete(){
        console.log('completed')
      }
    }
  }
</script>
<template>
  <div class="relative h-100vh bg-white">
    <div>
      <Header :title="'Journey Setting'" :icon1="'chevron-left'"/>
    </div>
    <div class="px-15px  ">
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
        <input class="mt-10px" type="text" v-model="journeyName">
        <h1 class="mt-20px text-14px font-semibold">Date</h1>
        <div class="flex items-center justify-between w-full">
          <h2 class="text-12px">2020/12/18-2020/12/23</h2>
          <div class="flex items-center ">
            <span class="mr-5px text-vue-green text-13px">Edit</span>
            <img src="~/assets/images/edit.svg" alt="">
          </div>
        </div>
        <h1 class="mt-20px text-14px font-semibold">Edit Setting</h1>

        
      </div>
      <div @click="complete" class="absolute bottom-80px w-320px left-1/2 transform -translate-x-1/2">
        <Button  :text="'Complete'" />
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  input{
    @apply bg-gray-100 rounded-6px w-full py-9px px-10px text-12px
  }
</style>