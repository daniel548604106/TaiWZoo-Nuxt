<template>
  <div class="bg-white  pt-10px pb-20px">
    <div class="w-full flex items-center px-10px justify-between mb-10px">
      <h1 class="text-18px ">Latest Events</h1>
      <nuxt-link to="/events" class="flex items-center">
        <h1 class="text-vue-main mr-6px">View All</h1>
        <font-awesome-icon :icon="['fas','chevron-right']"  class="text-vue-main"/>
      </nuxt-link>
    </div>
    <div class="w-full flex flex-col items-center whitespace-nowrap">
      <div v-for="item in news" :key="item.title"  class="w-full mb-15px relative rounded-10px shadow-sm">
          <div class="px-10px">
            <img :src="item.image" class='w-full h-200px' alt="">
          <h1 class="mt-10px w-full truncate">{{item.title}}</h1>
          </div>
          <hr class="my-10px">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        news:[{
          image: require('~/assets/images/journey.png'),
          title: 'Daniel trying to eat something',
          category: 'news',
          breaking: true
        },
        {
          image: require('~/assets/images/journey.png'),
          title: 'Dasadniel asdasd to eat something',
          category: 'news',
          breaking: true
        },{
          image: require('~/assets/images/journey.png'),
          title: 'Daniel trsdfsdfying to eat something',
          category: 'news',
          breaking: true
        }]
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .bg-news{
    background-repeat: no-repeat ;
    background-size:cover;
    background-position:center;
  }
</style>