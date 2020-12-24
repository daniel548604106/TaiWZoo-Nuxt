<script>
  import { mapActions } from 'vuex'
  export default {
    data(){
      return{
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      }
    },
    methods:{
      ...mapActions('auth',['toggleAuthType','userSignup']),
      postSignup(){
        if(this.password !== this.passwordConfirm){
          return 
        }
        this.userSignup({name: this.name,  email: this.email, password: this.password})
      }
    }
  }
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center px-15px h-full">
    <div class="social-button">
      <div class="social-icon google">
        <img src="~/assets/images/google.svg" alt="">
      </div>
      <div class="social-icon facebook">
        <img src="~/assets/images/fb.svg" alt="">
      </div>
      <div class="social-icon apple">
        <img src="~/assets/images/apple.svg" alt="">
      </div>
    </div>
    <div class="flex items-center justify-between my-20px">
      <div class="line"></div>
      <h2 class="mx-5px min-w-120 text-center">Or Signup With</h2>
      <div class="line"></div>
    </div>
    <div class="name w-280px  relative flex items-center justify-center">
      <input type="text" v-model="name"  placeholder="Please tell us your name" class="py-15px w-full rounded-5px pl-50px text-14px pr-50px">
      <font-awesome-icon class="absolute top-1/2 transform -translate-y-1/2 left-18px" :icon="['fas', 'user']" style="font-size: 18px" />
    </div>
    <div class="email w-280px mt-12px relative flex items-center justify-center">
      <input type="text" v-model="email"  placeholder="Please tell us your email" class="py-15px w-full rounded-5px pl-50px text-14px pr-50px">
      <font-awesome-icon class="absolute top-1/2 transform -translate-y-1/2 left-18px" :icon="['fas', 'user']" style="font-size: 18px" />
    </div>
    <div class="password w-280px mt-12px  relative flex items-center justify-center">
      <input type="password" v-model="password" placeholder="Please tell us your password" class="py-15px w-full rounded-5px pl-50px text-14px pr-50px">
      <font-awesome-icon class="absolute top-1/2 transform -translate-y-1/2 left-18px" :icon="['fas', 'lock']" style="font-size: 18px" />
      <font-awesome-icon class="absolute top-1/2 transform -translate-y-1/2 right-18px" :icon="['fas', 'eye']" style="font-size: 18px" />
    </div>
    <div class="password w-280px mt-12px  relative flex items-center justify-center">
      <input type="password" v-model="passwordConfirm" placeholder="Confirm Password" class="py-15px w-full rounded-5px pl-50px text-14px pr-50px">
      <font-awesome-icon class="absolute top-1/2 transform -translate-y-1/2 left-18px" :icon="['fas', 'lock']" style="font-size: 18px" />
      <font-awesome-icon class="absolute top-1/2 transform -translate-y-1/2 right-18px" :icon="['fas', 'eye']" style="font-size: 18px" />
    </div>
    <button @click="postSignup" class="w-280px  mt-20px bg-vue-main text-white py-16px rounded-10px text-16px">Signup</button>
    <div @click="toggleAuthType('login')"  class="cursor-pointer mt-20px">Back To Login</div>
  </div>
</template>


<style lang="postcss" scoped>

.social-button{
  @apply w-full flex items-center justify-center 
}

.social-icon{
  @apply w-80px h-60px flex items-center justify-center bg-white p-10px rounded-10px
}
.social-icon:not(:last-of-type){
   @apply  mr-20px
}

.line{
  @apply w-full h-1px bg-black
}


</style>