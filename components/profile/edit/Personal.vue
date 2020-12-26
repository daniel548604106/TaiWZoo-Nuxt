
<script>
  import { mapActions} from 'vuex'
  export default {
    props:{
      user:{
        type:Object,
        default: {}
      }

    },
    data(){
      return {
        genders:['Male','Female','Others'],
        name: this.user.name || '',
        account: this.user.account || '',
        website: this.user.website || '',
        biography: this.user.biography || '',
        gender: this.user.gender || ''
      }
    },
    methods:{
      ...mapActions('account',['patchMeData']),
      async save(){
        const data = {
          name: this.name,
          account: this.account,
          website: this.website,
          biography: this.biography,
          gender: this.gender
        }
        console.log('checkDataa', data)
        await this.patchMeData(data)
        
      }
    }
  }
</script>
<template>
  <div class="flex items-center flex-col border rounded-10px py-10px">
      <div class="flex items-center">
        <div class="w-100px mr-20px flex items-center justify-end">
        <img src="~/assets/images/avatar.png" alt="">
        </div>
      <div class="w-300px">
        <h2>{{user.account}}</h2>
        <button class="text-vue-main">Change Profile Picture</button>
      </div>
    </div>
    <div class="flex items-center">
      <h1>Name</h1>
      <input type="text" v-model="name" placeholder="Name">
    </div>
    <div class="flex items-center">
      <h1>Account</h1>
      <input type="text" v-model="account" placeholder="Account">
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
      <div >
        <select type="text" class="block" v-model="gender" placeholder="Bio">
          <option v-for="gender in genders" :key="gender.id" :value="gender">{{gender}}</option>
        </select>
      </div>
    </div>
    <div class="flex items-center">
      <h1></h1>
      <button @click="save" class="inline-block w-full py-10px mt-10px rounded-10px text-white bg-vue-main">Save</button>
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