<script>
  export default {
    methods:{
      proceedToNext(id){
        this.$router.push(`/course/${id}`)
      }
    }
  }
</script>
<template>
  <div>
    <button @click="proceedToNext(13)">Click Me</button>
  </div>
</template>


<style lang="scss" scoped>

</style>