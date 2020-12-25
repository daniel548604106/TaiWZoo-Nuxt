<script>

import Cookie from 'js-cookie'
import {apiGetMyData}  from '@/api'
import Status from '@/components/profile/Status.vue'
import Description from '@/components/profile/Description.vue'
import Badge from '@/components/profile/Badge.vue'
import Posts from '@/components/profile/Posts.vue'
  export default {
    components:{
      Status,
      Description,
      Badge,
      Posts
    },
    data(){
      return{
        img: require('~/assets/images/journey.png')
      }
    },
    async mounted(){
      const data = await apiGetMyData()
      console.log(data)
    }
  }
</script>
<template>
  <div  class=" w-full pt-10px py-50px px-15px flex flex-col bg-opacity-75 items-center h-234px relative">
    <div class="fixed z-5 top-10px px-15px w-full flex items-center justify-between">
      <h1 class=" text-12px">@sdfsdfsdf</h1>
      <font-awesome-icon  :icon="['fas','bars']" class=""/>
    </div>
    <Status class="w-full"/>
    <Description/>
    <Badge/>
    <Posts/>

  </div>
</template>


<style lang="postcss" scoped>
 
</style>