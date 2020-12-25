<script>
  import { mapActions } from 'vuex'
  export default {
    props:{
      title:{
        type:String,
        default: ''
      },
      to:{
        type: String,
        default: ''
      },
      icon1:{
        type:String,
        default: ''
      },
      icon2:{
        type:String,
        default: ''
      },
      icon3:{
        type:String,
        default: ''
      },
    },
    methods:{
      ...mapActions('journey',['toggleCreateJourney','proceedTo']),
      clickAction(){
        switch(this.icon1){
          case 'times':
           this.toggleCreateJourney()
           break;
           case 'chevron-left':
          this.proceedTo(this.to)
        }
      }
    }
  }
</script>
<template>
  <div class="w-full">
    <div class="header px-15px">
      <font-awesome-icon @click="clickAction" :icon="['fas', icon1 ]" style="font-size:20px"/>
      <h1 class="text-18px font-semibold">{{title}}</h1>
      <div>
        <font-awesome-icon v-if="icon2" @click="toggleCreateJourney" :icon="['fas', icon2 ]" style="font-size:20px"/>
        <font-awesome-icon v-if="icon3" @click="toggleCreateJourney" :icon="['fas', icon3 ]" style="font-size:20px"/>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>

.header{
  @apply w-full py-15px flex items-center justify-between shadow-md
}

</style>