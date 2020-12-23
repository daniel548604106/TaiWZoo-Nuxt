<template>
  <div>
404 error

<button @click="backToHome">Back To Main Page</button>
  </div>
</template>

<script>
  export default {
    methods:{
      backToHome(){
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>