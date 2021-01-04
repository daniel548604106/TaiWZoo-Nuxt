<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data(){
      return{
        journeyName: '',
        imageCover: ''
      }
    },
    watch:{
      journeyName(newVal){
        this.setName(newVal)
      },
      imageCover(newVal){
        this.setNewJourneyImage(newVal)
      }
    },
    methods:{
      ...mapActions('journey',['setName','setNewJourneyImage']),
      uploadImage(e){
        console.log('e',e)
        const image = e.target.files[0];
        const reader = new FileReader();
        console.log('image=>', image)
        reader.onload = e =>{
          this.imageCover = e.target.result;
        };
        reader.readAsDataURL(image);
      }
    },
    computed:{
      ...mapGetters('journey',['journeyInfo']),
       backgroundCover(){
        return this.imageCover || require('~/assets/images/journey.png')
      }
    }
  }
</script>
<template>
  <div>
    <h1 class="mt-30px  text-14px font-semibold">Journey Profile</h1>
        <div :style="{backgroundImage: `url(${backgroundCover})` }" class="relative rounded-20px w-full bg-cover mt-18px">
          <div class="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2">
            <label for="journey-bg" class="w-full h-full">
              <input type="file" class="hidden" id="journey-bg" @change="uploadImage">
              <font-awesome-icon :icon="['fas','images']" class="text-white"  />
              <h1 class="text-white"><span v-if="imageCover">Change</span><span v-else>Customize</span> Profile Picture</h1>
            </label>
          </div>
        </div>
        <h1 class="mt-20px text-14px font-semibold">Journey Name</h1>
        <input placeholder="Paris" required class="mt-10px" type="text" v-model="journeyName">
  </div>
</template>


<style lang="postcss" scoped>
  input{
    @apply bg-gray-100 rounded-6px w-full py-9px px-10px text-12px
  }

  .bg-cover{
    background: no-repeat center;
    background-size: cover;
    padding-top: 50%;
  }
</style>