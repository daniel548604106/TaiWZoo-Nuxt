<script>

import Cookie from 'js-cookie'
import { mapActions , mapGetters} from 'vuex'
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
        user:{},
        img: require('~/assets/images/journey.png')
      }
    },
    methods:{
      ...mapActions('account',['getMeData'])
    },
    computed:{
      ...mapGetters('account',['meData'])
    },
    async mounted(){
      await this.getMeData()
      this.user = this.meData
      console.log('user',this.user)
    }
  }
</script>
<template>
  <div  class=" w-full pt-10px py-50px flex flex-col bg-opacity-75 items-center h-234px relative">
    <div class="fixed z-5 top-10px px-15px w-full hidden sm:flex  items-center justify-between">
      <h1 class=" text-12px">@sdfsdfsdf</h1>
      <font-awesome-icon  :icon="['fas','bars']" class=""/>
    </div>
    <div class="content max-limit">
      <Status class="w-full" :user="user"/>
      <Description/>
    </div>
    <div class="w-full max-limit">
      <Badge/>
    </div>
    <div class="content max-limit">
       <Posts/>
    </div>

  </div>
</template>


<style lang="postcss" scoped>
 .content{
   margin:auto;
   width: 90%;
   
   max-width: 600px;
 }

 .max-limit{
   @apply max-w-700
 }
</style>