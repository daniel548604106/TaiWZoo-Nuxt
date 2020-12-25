<script>
  import Card from '@/components/explore/Card.vue'
  import MobileHeader from '@/components/global/Mobile/Header.vue'
  export default {
    components:{
      Card,
      MobileHeader
    },
    data(){
      return{
        img: require('~/assets/logo.svg')
      }
    }
  }
</script>
<template>
  <div class="w-full">
    <div>
      <MobileHeader :title="'Explore'"/>
    </div>
    <div class="px-10px">
      <div class="tabs">
        <ul>
          <li class="active">Discover</li>
          <li>Following</li>
        </ul>
      </div>
      <div class="w-full max-w-600 mx-auto">
        <Card :img="img" /> 
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>

.tabs{
  @apply  w-full max-w-400 mx-auto mt-80px mb-50px
}

ul{
  @apply flex items-center justify-around;
}

li{
  @apply text-20px
}

li:active{
  @apply text-vue-main
}



</style>