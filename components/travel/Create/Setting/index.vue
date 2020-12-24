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
    <div class="px-15px h-80vh overflow-scroll">
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
        <div class="flex items-center justify-between w-full mt-10px">
          <h2 class="text-12px">2020/12/18-2020/12/23</h2>
          <div class="flex items-center ">
            <span class="mr-5px text-vue-green text-12px">Edit</span>
            <img src="~/assets/images/edit.svg" alt="">
          </div>
        </div>
        <h1 class="mt-20px text-14px font-semibold">Edit Setting</h1>
        <div class="mt-10px flex items-center">
          <toggle-button v-model="myDataVariable" color="#E4BA7A" width=45 height=24 class="mr-20px"/>
          <h2 class="text-10px">Your buddies can also edit the content</h2>
        </div>
        <h1 class="mt-20px text-14px font-semibold">Participants</h1>
        <div class="w-full flex items-center overflow-scroll mt-20px">
          <img v-for="n in 10" :key="n" src="~/assets/images/avatar.png" class="mr-12px" alt="">
        </div>
        <h1 class="mt-20px text-14px font-semibold">Inviting</h1>
        <div class="w-full flex items-center overflow-scroll mt-20px">
          <img v-for="n in 3" :key="n" src="~/assets/images/avatar.png" class="mr-12px"  alt="">
          <div class=" rounded-10px border border-vue-main px-10px py-6px flex items-center ">
            <font-awesome-icon :icon="['fas','user-plus']" class="text-vue-main mr-10px" /> 
            <h2 class="text-12px text-vue-main">Invite Others</h2>
          </div>
        </div>
        <div @click="complete" class="w-full my-50px">
          <Button  :text="'Complete'" />
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  input{
    @apply bg-gray-100 rounded-6px w-full py-9px px-10px text-12px
  }
</style>