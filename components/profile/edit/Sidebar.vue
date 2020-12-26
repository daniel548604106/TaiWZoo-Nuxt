
<script>
  export default {
 
  }
</script>
<template>
  <div>
    <ul>
      <li class="active">Edit Profile</li>
      <li >Change Password</li>
      <li >Social Account</li>
      <li >Notification</li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
  li{
    @apply my-10px px-15px cursor-pointer
  }

  li.active{
    @apply  font-semibold;
    box-shadow: -4px 0px 0px 0px black
  }
</style>