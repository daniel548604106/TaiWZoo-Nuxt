<script>
  import Cookie from 'js-cookie'
  import qs from 'query-string'
  import { redirectUri , config} from '@/lib/oauth2.js'
  import { mapActions} from 'vuex'
  export default {
    data(){
      return{
        showPassword: false,
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions('auth',['toggleAuthType','userLogin']),
      toggleShowPassword(){
        this.showPassword = !this.showPassword
      },
      async login(){
        await this.userLogin({email:this.email,password: this.password})
      },
      oAuthLogin(provider){

        // const type = provider
        //  console.log(provider)
        // const query = qs.stringify(config[type])
        // // return console.log(query)
        const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${process.env.AUTH_LINE_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&state=login&scope=profile%20openid%20email&nonce=09876xyz`
        Cookie.set('oauth_redirect_uri', { url: this.$route.fullPath })
        window.location.href = url
        // window.location.href = redirectUri(type, query)
      },
      googleOAuthLogin(provider){
        const type = provider
         console.log(provider)
        const query = qs.stringify(config[type])
        Cookie.set('oauth_redirect_uri', { url: this.$route.fullPath })
        window.location.href = redirectUri(type, query)
        // return console.log(query)
      }
    },
  }
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center px-15px h-full">
    <div class="social-button">
      <div @click="googleOAuthLogin('google')" class="social-icon google">
        <img src="~/assets/images/google.svg" alt="">
      </div>
      <div @click="oAuthLogin('facebook')" class="social-icon facebook">
        <img src="~/assets/images/fb.svg" alt="">
      </div>
      <div @click="oAuthLogin('line')" class="social-icon apple">
        <h2 class="text-vue-green">Line</h2>
        <!-- <img src="~/assets/images/apple.svg" alt=""> -->
      </div>
    </div>
    <div class="flex items-center justify-between my-20px">
      <div class="line"></div>
      <h2 class="mx-5px min-w-120 text-center">Or Login With</h2>
      <div class="line"></div>
    </div>
    <div class="email w-280px  relative flex items-center justify-center">
      <input type="text" v-model="email" placeholder="Please tell us your email" class="py-15px w-full rounded-5px pl-50px text-14px pr-50px">
      <font-awesome-icon class="absolute top-1/2 transform -translate-y-1/2 left-18px" :icon="['fas', 'user']" style="font-size: 18px" />
    </div>
    <div class="password w-280px mt-12px  relative flex items-center justify-center">
      <input v-model="password" :type="showPassword ?  'text': 'password'" placeholder="Please tell us your password" class="py-15px w-full rounded-5px pl-50px text-14px pr-50px">
      <font-awesome-icon class="absolute top-1/2 transform -translate-y-1/2 left-18px" :icon="['fas', 'lock']" style="font-size: 18px" />
      <font-awesome-icon  v-if="showPassword" @click="toggleShowPassword" class="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-18px" :icon="['fas', 'eye-slash']" style="font-size: 18px" />
      <font-awesome-icon v-else @click="toggleShowPassword" class="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-18px" :icon="['fas', 'eye']" style="font-size: 18px" />
    </div>
    <h1 @click="toggleAuthType('forgotPassword')"  class="my-10px mx-auto w-280px flex items-center justify-end text-14px cursor-pointer hover:underline">Forgot Password?</h1>
    <button @click="login" class="w-280px  bg-vue-main text-white py-16px rounded-10px text-16px">Login</button>
    <div class="mt-20px">I'm a new user, <span @click="toggleAuthType('signup')" class="underline cursor-pointer text-vue-main">Sign up</span></div>
  </div>
</template>



<style lang="postcss" scoped>

.social-button{
  @apply w-full flex items-center justify-center 
}

.social-icon{
  @apply w-80px h-60px flex items-center justify-center cursor-pointer bg-white p-10px rounded-10px
}
.social-icon:not(:last-of-type){
   @apply  mr-20px
}

.line{
  @apply w-full h-1px bg-black
}


</style>