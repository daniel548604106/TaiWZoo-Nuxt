<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    computed:{
      ...mapGetters('auth',['isUserLoggedIn'])
    },
    methods:{
      ...mapActions('auth',['toggleAuthOpen']),
    },
  }
</script>
<template>
  <div class="w-full h-80px px-30px shadow-lg">
    <div class="w-full h-full max-w-1000 mx-auto flex items-center justify-between">
      <div>
        <img src="~/assets/logo.svg" class="w-30px h-30px" alt="">
      </div>
      <div>
        <div v-if="isUserLoggedIn">UserData</div>
        <ul v-else class="flex items-center">
          <li class="cursor-pointer" @click="toggleAuthOpen('login')">Login</li>
          <li class="cursor-pointer"  @click="toggleAuthOpen('signup')">Signup</li>
        </ul>
      </div>
    </div>
  </div>
</template>



<style lang="postcss" scoped>
  li:not(:last-of-type){
    @apply mr-20px
  }
</style>