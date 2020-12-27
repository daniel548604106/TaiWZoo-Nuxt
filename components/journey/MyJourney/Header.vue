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
    data(){
      return{
        changeBgColor: false
      }
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
      },
      test(){
        window.scrollY > 310 ? this.changeBgColor  = true: this.changeBgColor = false

      }
    },
    mounted(){
      window.addEventListener('scroll', this.test)
    },
    destroyed() {
      window.removeEventListener('scroll', this.test)
    },
  }
</script>
<template>
  <div :class="['w-full','transition','duration-200',{'bg-color': changeBgColor}]">
    <div class="header px-15px">
      <font-awesome-icon :icon="['fas', icon1 ]" style="font-size:20px"/>
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
  @apply w-full py-15px flex items-center justify-between
}

.bg-color{
  @apply bg-white text-gray-800
}

</style>