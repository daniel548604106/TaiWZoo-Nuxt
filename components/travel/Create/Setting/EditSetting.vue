<template>
  <div>
    <h1 class="mt-20px text-14px font-semibold">Edit Setting</h1>
        <div class="mt-10px flex items-center">
          <toggle-button v-model="toggleSwitch" color="#E4BA7A" width=45 height=24 class="mr-20px"/>
          <h2 class="text-10px">Your buddies can also edit the content</h2>
        </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        toggleSwitch: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>