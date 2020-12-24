<script>
  import Header from '@/components/travel/Create/Header.vue'
  import Tag from '@/components/travel/Create/Tag.vue'
  export default {
    components:{
      Header,
      Tag
    },
    data(){
      return{
        destinations:[{
          name: 'Barcelona'
        },
        {
          name: 'Weae'
        },{
          name: 'Taipei'
        }
        ]
      }
    }
  }
</script>
<template>
  <div class="w-full bg-white h-100vh">
    <Header/>
    <div class="body px-15px">
      <div class="my-20px flex items-center justify-between">
        <h1 class="text-18px font-semibold">Recommended</h1>
        <div class=" w-110px relative">
          <input type="text" placeholder="Featured">
          <font-awesome-icon class="absolute top-1/2 transform -translate-y-1/2 right-10px" :icon="['fas','search']"/>
        </div>
      </div>
      <div  class="tags w-full flex items-center py-5px overflow-scroll whitespace-nowrap ">
        <Tag v-for="destination in destinations" :key="destination.id" :destinations="destination.name"/>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>


  input{
    @apply border absolute top-1/2 transform -translate-y-1/2 right-0;
    @apply rounded-20px bg-vue-white py-8px w-full pl-14px text-12px;
    @apply  transition-all duration-100 ease-in-out
  }

  input:focus {
    @apply w-200px
  }
</style>