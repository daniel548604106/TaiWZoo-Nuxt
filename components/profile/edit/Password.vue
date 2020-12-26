
<script>
  export default {
    data(){
      return{
        oldPassword:'',
        newPassword: '',
        confirmPassword:''
      }
    }
  }
</script>
<template>
  <div class="flex items-center flex-col border rounded-10px py-10px">
    <div class="flex items-center">
      <h1>Old Password</h1>
      <input type="password" v-model="oldPassword" placeholder="Old Password">
    </div>
    <div class="flex items-center">
      <h1>New Password</h1>
      <input type="password" v-model="newPassword" placeholder="New Password">
    </div>
    <div class="flex items-start">
      <h1>Confirm Password</h1>
      <div class="flex flex-col">
        <input type="password" v-model="confirmPassword" placeholder="Confirm Password"/>
        <button class="mt-20px bg-vue-main text-white rounded-10px py-5px px-10px">Change</button>
        <button class="mt-20px text-vue-main text-14px">Forgot Password?</button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  h1{
  @apply mr-20px w-100px text-right
}

input,textarea,select{
  @apply w-300px border rounded-5px py-5px px-10px
}

div{
  @apply my-5px
}

</style>