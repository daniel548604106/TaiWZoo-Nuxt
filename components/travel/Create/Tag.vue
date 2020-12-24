
<script>
  export default {
    props:{
      destinations:{
        type:String,
        default: ''
      }
    }
  }
</script>
<template>
  <div>
    <span class="py-4px px-6px rounded-6px border text-vue-main text-14px mr-5px">
      {{destinations}}
      <font-awesome-icon :icon="['fas','times']" class="ml-4px cursor-pointer"/>
    </span>
  </div>
</template>

<style lang="scss" scoped>

</style>