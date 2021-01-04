
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
        gender: this.user.gender || '',
        avatar: '',
        avatarPreview: ''
      }
    },
    computed:{
      avatarImage(){
        return  this.avatarPreview || require('~/assets/images/profile.svg')
      }
    },
    methods:{
      ...mapActions('account',['patchMeData']),
      async save(){
        const form = new FormData()

        const data = {
          name: this.name,
          account: this.account,
          website: this.website,
          biography: this.biography,
          gender: this.gender
        }
        if(this.avatar){
          form.append('avatar', this.avatar)
        }

        form.append('name', this.name)
        form.append('account', this.account)
        form.append('website', this.website)
        form.append('biography', this.biography)
        form.append('gender', this.gender)
        console.log('form', form)
        console.log('checkDataa', data)
        await this.patchMeData(form)
        
      },
      uploadUserPhoto(e){
        const image = e.target.files[0];
        console.log('image',image)
        this.avatar = image
        const reader = new FileReader();
        console.log('image=>', image)
        reader.onload = e =>{
          this.avatarPreview = e.target.result;
          console.log(this.avatar);
        };
        reader.readAsDataURL(image);
      }
    },
    mounted(){
      this.avatarPreview  = this.user.avatar
    }
  }
</script>
<template>
  <div class="flex items-center flex-col border rounded-10px py-10px">
      <div class="flex items-center">
        <div class="w-100px mr-20px flex items-center justify-end">
        <div class="w-60px h-60px rounded-1/2 bg-cover" :style="{backgroundImage: `url(${avatarImage})`}" alt="">
        </div>
        </div>
      <div class="w-300px">
        <h2>{{user.account}}</h2>
        <label for="avatar" class="text-vue-main cursor-pointer">
          <div>Change Profile Picture</div>
          <input class="hidden" type="file" id="avatar" accept="image" @change="uploadUserPhoto">
        </label>
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

.bg-cover{
  background:no-repeat center;
  background-size: cover;
}

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