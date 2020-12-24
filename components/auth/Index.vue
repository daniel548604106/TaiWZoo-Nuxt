
<script>
import { mapGetters } from 'vuex'
import Login from '@/components/auth/Login.vue'
import Signup from '@/components/auth/Signup.vue'
import ForgotPassword from '@/components/auth/ForgotPassword.vue'
  export default {
    components:{
      Login,
      Signup,
      ForgotPassword
    },
    computed:{
      ...mapGetters('auth',['authType']),
    }
  }
</script>
<template>
  <div class="w-full max-w-800 fixed  h-70vh top-1/2 p-20px bg-vue-white rounded-10px z-10 left-1/2 transform -translate-y-1/2 -translate-x-1/2 shadow-lg  flex items-center justify-between">
    <div class="w-400px flex flex-col h-full items-center justify-center">
      <img class="w-100px h-100px" src="~/assets/logo.svg" alt="">
      <h1 class="text-26px mt-20px">Welcome, login to continue!</h1>
    </div>
    <div class="w-full max-w-375 relative">
      <div v-if="authType === 'login'" class="h-full">
        <Login />
      </div>
      <div v-if="authType === 'signup'">
        <Signup/>
      </div>
      <div v-if="authType === 'forgotPassword'">
        <ForgotPassword />
      </div>
    </div>
    <font-awesome-icon class="absolute top-30px right-30px" :icon="['fas', 'times']" style="font-size: 25px" />
  </div>
</template>

<style lang="scss" scoped>

</style>