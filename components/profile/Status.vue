<script>
  export default {
    props:{
      user:{
        type:Object,
        default: {}
      }
    }
  }
</script>
<template>
  <div>
    <div class="mt-50px  w-full flex items-center justify-between">
      <div class="mt-5px w-220px truncate">
      <h1 class="text-32px font-semibold">{{user.name}}</h1>
      <div class="flex items-center mt-5px">
        <div class="text-center mr-20px">
        <h1 class="text-12px font-semibold">912</h1>
        <h1 class="text-12px">Followers</h1>
      </div>
      <div class="text-center">
        <h1 class="text-12px font-semibold">912</h1>
        <h1 class="text-12px">Following</h1>
      </div>
      </div>
        <div class="w-100px mt-10px px-10px rounded-10px py-5px text-center border">
          <nuxt-link to="/profile/edit">
            <button class="text-12px">Edit Profile <font-awesome-icon :icon="['fas','cog']"/> </button>
          </nuxt-link>
        </div>
      </div>
      <div class="relative">
        <div v-if="user.avatar" class="bg-cover rounded-1/2 w-100px h-100px" :style="{backgroundImage: `url(${user.avatar})`}">
        
        </div>
        <img v-else src="~/assets/images/profile.svg" class="border rounded-1/2 w-100px h-100px" alt="">
        <div class="absolute bottom-5px right-5px w-20px h-20px flex items-center justify-center  rounded-1/2 bg-white border-vue-main">
          <font-awesome-icon :icon="['fas','plus']" class="text-vue-main w-12px h-12px" /> 
        </div> 
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
.bg-cover{
  background: no-repeat center;
  background-size: cover;
}
</style>