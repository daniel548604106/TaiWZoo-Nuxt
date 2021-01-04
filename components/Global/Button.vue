<script>
  export default {
    props:{
      text:{
        type: String,
        default: ''
      },
      totalDays: {
        type: Number,
        default: 0
      },
      checkValid:{
        type: Boolean,
        default: false
      }
    }
  } 
</script>
<template>
  <div :class="['btn',{'deactivate': checkValid}]">
    <h1 class="mr-5px">{{text}}</h1>
    <span v-if="totalDays">({{totalDays}}days)</span>
  </div>
</template>


<style lang="postcss" scoped>
 
 .btn{
    @apply bg-vue-main flex items-center justify-center text-white cursor-pointer text-center py-18px w-full rounded-30px;
  }

  .deactivate{
    @apply bg-gray-50 text-vue-title-active;
  }


</style>