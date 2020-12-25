<script>
  import { mapActions } from 'vuex'
  import Header from '@/components/journey/Create/Header.vue'
  import Tag from '@/components/journey/Create/Destination/Tag.vue'
  import Card from '@/components/journey/Create/Destination/Card.vue'
  import Button from '@/components/global/Button.vue'
  export default {
    components:{
      Header,
      Tag,
      Card,
      Button
    },
    data(){
      return{
        searchInput: '',
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
    },
    computed:{
      searchInputCheck(){
        return this.searchInput
      }
    },
    methods:{
      ...mapActions('journey',['proceedTo'])
    }
  }
</script>
<template>
  <div class="w-full bg-white h-100vh relative">
    <Header  :title="'Destination'" :icon1="'times'" />
    <div class="body px-15px">
      <div class="mt-20px mb-10px flex items-center justify-between">
        <h1 class="text-18px font-semibold">Recommended</h1>
        <div class=" w-110px relative">
          <input type="text" v-model="searchInput" placeholder="Featured">
          <font-awesome-icon v-if="searchInputCheck" @click="searchInput = ''" class="absolute top-1/2 transform -translate-y-1/2 right-10px" :icon="['fas','times']"/>
          <font-awesome-icon v-else class="absolute top-1/2 transform -translate-y-1/2 right-10px" :icon="['fas','search']"/>
        </div>
      </div>
      <div  class="tags w-full flex items-center py-5px overflow-scroll whitespace-nowrap ">
        <Tag v-for="destination in destinations" :key="destination.id" :destinations="destination.name"/>
      </div>
      <div class="mt-10px w-full flex items-center mx-auto flex-wrap overflow-scroll h-70vh">
        <div v-for="n in 15" :key="n" class="card mb-10px" >
          <Card />
        </div>
      </div>
      <div @click="proceedTo('date')" class="absolute bottom-80px transform left-1/2 -translate-x-1/2 w-320px">
        <Button :text="'Next Step'"/>
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

  .card:not(:nth-of-type(3n)){
    @apply mr-6px 
  }
</style>