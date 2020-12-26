<script>
  import { mapGetters, mapActions} from 'vuex'
  import Sidebar from '@/components/profile/edit/Sidebar.vue'
  import Personal from '@/components/profile/edit/Personal.vue'
  import Password from '@/components/profile/edit/Password.vue'
  import SocialAccount from '@/components/profile/edit/SocialAccount.vue'
  import Notification from '@/components/profile/edit/Notification.vue'
  
  export default {
    components:{
    Sidebar,
    Personal,
    Password,
    SocialAccount,
    Notification
    },
    computed:{
      ...mapGetters('account',['meData'])
    },
    methods:{
      ...mapActions('account',['getMeData'])
    },
    async mounted() {
      await this.getMeData()
    },
  }
</script>
<template>
  <div class="w-full max-w-700 flex items-start mx-auto py-50px sm:mx-15px">
    <div class="w-200px sticky top-50px sm:hidden">
      <Sidebar/>
    </div>
    <div class="flex-1" >
      <div>
        <h2>Profile</h2>
        <Personal  :user="meData"/>
      </div>
      <div class="mt-20px">
        <h2 >Password</h2>
        <Password/>
      </div>
      <div class="mt-20px">
        <h2>Social Account</h2>
       <SocialAccount/>
      </div>
      <div class="mt-20px mb-50px">
        <h2>Notification</h2>
        <Notification/>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
  h2{
    @apply mb-20px text-20px font-semibold;
  }
</style>