
<script>
  export default {
   
      
  }
</script>
<template>
  <div class="flex items-center flex-col border rounded-10px py-10px">
      <div class="flex items-center">
        <div class="w-100px mr-20px flex items-center justify-end">
        <img src="~/assets/images/avatar.png" alt="">
        </div>
      <div class="w-300px">
        <h2>daniel548604106</h2>
        <button class="text-vue-main">Change Profile Picture</button>
      </div>
    </div>
    <div class="flex items-center">
      <h1>Name</h1>
      <input type="text" v-model="name" placeholder="Name">
    </div>
    <div class="flex items-center">
      <h1>username</h1>
      <input type="text" v-model="username" placeholder="Username">
    </div>
    <div class="flex items-center">
      <h1>Website</h1>
      <input type="text" v-model="website" placeholder="Website">
    </div>
    <div class="flex items-center">
      <h1>Biography</h1>
      <textarea type="text" v-model="biography" placeholder="Bio"></textarea>
    </div>
    <div class="flex items-center">
      <h1>Gender</h1>
      <select type="text" v-model="biography" placeholder="Bio">
        <option v-for="gender in genders" :key="gender" :value="gender">{{gender.type}}</option>
      </select>
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