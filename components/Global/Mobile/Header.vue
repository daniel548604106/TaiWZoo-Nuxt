<script>
  import { mapActions } from 'vuex'
  export default {
    props:{
      title:{
        type:String,
        default: ''
      },
    },
    methods:{
    }
  }
</script>
<template>
  <div class="w-full">
    <div class="header px-15px relative">
      <img  class="menu" src="~/assets/images/menu.svg" alt="">
      <h1 class="text-18px absolute left-1/2 transform -translate-x-1/2 font-semibold">{{title}}</h1>
      <div class="flex items-center">
        <img class="mr-10px" src="~/assets/images/notification.svg" alt="">
        <img src="~/assets/images/message.svg" alt="">
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>

.header{
  @apply w-full pt-20px pb-15px flex items-center justify-between
}

</style>