
<script>
  import Cookies from 'js-cookie'
  export default {
    data(){
      return{
        avatar: ''
      }
    },
    computed:{
       avatarImage(){
        return this.avatar || require('~/assets/images/profile.svg')
      }
    },
    mounted(){
      if((Cookies.get('userInfo'))){
        this.avatar = JSON.parse(Cookies.get('userInfo')).user.avatar || JSON.parse(Cookies.get('userInfo')).avatar
      }
    }
  }
</script>
<template>
  <div>
     <ul class="w-full py-10px h-50px bg-white shadow-lg border-t flex items-center justify-around">
          <li ><nuxt-link to="/"><img src="~/assets/images/home.svg" alt=""></nuxt-link></li>
          <li ><nuxt-link to="/explore"><img src="~/assets/images/explore.svg" alt=""></nuxt-link></li>
          <li ><nuxt-link to="/journey"><img src="~/assets/images/journey.svg" alt=""></nuxt-link></li>
          <li ><nuxt-link to="/social"><img src="~/assets/images/social.svg" alt=""></nuxt-link></li>
          <li ><nuxt-link to="/profile"><div class="rounded-1/2 bg-cover" :style="{backgroundImage: `url(${avatarImage})`}" alt="">
             </div></nuxt-link></li>
      </ul>
  </div>
</template>

<style lang="postcss" scoped>
.bg-cover{
    width: 30px;
    padding-top: 100%;
    background: no-repeat center;
    background-size: cover;
  }
</style>