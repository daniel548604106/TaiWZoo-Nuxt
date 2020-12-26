<template>
<div>
  <div class="bg-white rounded-t-md w-150px text-center mx-auto py-5px ">
    <h1 class="text-vue-main text-26px font-semibold italic">Daily</h1>
  </div>
  <div class="w-full bg-white border-b rounded-5px py-10px px-20px flex items-center justify-start flex-wrap">
    <div v-for="option in options" :key="option.title" class="mb-10px w-1/4" >
      <nuxt-link :to='option.link' class="flex flex-col items-center">
      <img :src="option.icon" alt="">
      <h1>{{option.title}}</h1>
      </nuxt-link>
    </div>
  </div>

</div>
</template>

<script>
  export default {
    data(){
      return{
        options:[
           {
          title: 'News',
          icon: require('~/assets/images/notification.svg'),
          link: 'news'
        },
        {
          title: 'Transportation',
          icon: require('~/assets/images/social.svg'),
          link: 'transportation'
        },
        {
          title: 'Movies',
          icon: require('~/assets/images/message.svg'),
          link: 'movies'
        },
         {
          title: 'Travel',
          icon: require('~/assets/images/message.svg'),
          link: 'travel'
        },
        {
          title: 'Exhibitions',
          icon: require('~/assets/images/profile.svg'),
          link: 'exhibitions'
        },
       
        {
          title: 'Housing',
          icon: require('~/assets/images/profile.svg'),
          link: 'housing'
        },
        {
          title: 'Food',
          icon: require('~/assets/images/profile.svg'),
          link: 'food'
        },
        {
          title: 'Entertainment',
          icon: require('~/assets/images/profile.svg'),
          link: 'entertainment'
        },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>