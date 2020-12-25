<script>

  import MobileHeader from '@/components/global/Mobile/Header.vue'
  export default {
    components:{

      MobileHeader
    },

  }
</script>
<template>
  <div class="w-full">
    <div>
      <MobileHeader :title="'Social'"/>
    </div>
    <div class="px-10px">

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