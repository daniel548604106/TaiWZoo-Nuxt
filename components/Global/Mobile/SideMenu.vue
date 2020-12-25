
<script>
  import { mapActions} from 'vuex';
  export default {
    methods:{
      ...mapActions(['toggleMobileSideMenu']),
      logout(){
        console.log('logout')
      }
    },
    
  }
</script>
<template>
  <div class="p-20px shadow-md w-full max-w-325 bg-white h-100vh">
    <ul @click="toggleMobileSideMenu">
      <li><nuxt-link to="/meetup">Daily Meetup</nuxt-link></li>
      <li><nuxt-link to="/budget">Budget</nuxt-link></li>
      <li><nuxt-link to="/schedule">Schedule</nuxt-link></li>
      <li><nuxt-link to="/entertainment">Entertainment</nuxt-link></li>
      <li><nuxt-link to="/saved">Saved</nuxt-link></li>
      <li @click="logout">Logout</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>