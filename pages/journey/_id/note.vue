<script>
  import { mapActions } from 'vuex'
  import Header from '@/components/journey/_id/Note/Header.vue'
  import draggable from 'vuedraggable'
  export default {
    components:{
      Header,
      draggable
    },
    data(){
      return{
          backgroundImage: '',
          title:'',
          contents: [
            {
              type: 'text',
              text: ''
            }
          ]
      }
    },
    computed:{
      backgroundCover(){
        return this.backgroundImage || require('~/assets/images/note-bg.png')
      }
    },
    methods:{
      ...mapActions('journey',['postNote']),
      removeAt(idx) {
        this.contents.splice(idx, 1);
      },
      addContent() {
        this.contents.push({ type: 'text', text: ''});
      },
      addImage(){
        this.contents.push({ type: 'image', image: ''})
      },
      complete(){
        const id = this.$route.params.id
        const data = { title: this.title, contents: this.contents}
        this.postNote({id ,data})
        console.log('complete')
      }
    }
  }
</script>
<template>
  <div class="w-full relative h-100vh ">
    <div class="relative mb-100px" >
      <div>
        <Header :complete="complete"/>
      </div>
      <div class="px-15px">
        <div class="mt-10px">
          <h2 class="mb-20px font-semibold text-18px">Note Picture</h2>
          <div class="bg-cover  relative rounded-20px" :style="{backgroundImage: `url(${backgroundCover})`}">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
              <font-awesome-icon  :icon="['fas','camera']" />
              <p class="mt-10px">Customize Note Picture</p>
            </div>
          </div>
        </div>
        <div class="mt-20px">
          <h2 class="uppercase font-semibold text-14px">Title</h2>
          <input type="text" v-model="title" placeholder="REQUIRED" required class="mt-10px">
          <h2 class="uppercase font-semibold text-14px mt-10px">Content</h2>
           <draggable  v-model="contents"  @start="drag=true" @end="drag=false">
             <div v-for="(content, idx) in contents" :key="content.id" >
              
              <div v-if="content.type === 'text'" class="dragInfo flex items-start py-10px px-10px  relative bg-vue-white rounded-20px mt-20px" >
                <font-awesome-icon :icon="['fas','grip-lines']" class="mr-10px" />
                <div class="w-full">
                  <textarea v-model="content.text" class="w-full h-150px border border-black rounded-10px py-5px px-10px bg-vue-white" name="content" id="content"></textarea>
                </div>
                <div class="absolute flex items-center justify-center top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-1/2 bg-vue-main w-26px h-26px">
                  <font-awesome-icon  class="text-white"  @click="removeAt(idx)" :icon="['fas','trash']" />  
                </div>
              </div>
              <div v-if="content.type === 'image'">
                <div :style="{ backgroundImage: `url(${content.image || require('~/assets/images/note-bg.png')})`}" class="bg-cover relative mt-20px rounded-20px">
                  <font-awesome-icon :icon="['fas','grip-lines']" class="absolute top-10px left-10px text-white" />
                  <div class="absolute flex items-center justify-center top-10px right-10px rounded-1/2 bg-vue-main w-26px h-26px">
                    <font-awesome-icon  class="text-white"  @click="removeAt(idx)" :icon="['fas','trash']" />  
                  </div>
                </div>
              </div>

             </div>
          </draggable>
        </div>
      </div>
    </div>
    <div class="fixed flex items-center justify-between bottom-50px bg-white w-full py-10px px-15px">
      <div class="flex items-center">
        <div @click="addImage" class="flex items-center border border-black rounded-20px px-10px py-5px">
          <font-awesome-icon   :icon="['fas','camera']"  /> 
            <span class="ml-10px text-12px">ADD PHOTO</span>
        </div>
        <div @click="addContent" class="flex items-center ml-15px border border-black rounded-20px px-10px py-5px">
          <font-awesome-icon  class="w-20px h-20px" :icon="['fas','folder-plus']"  /> 
            <span class="ml-10px text-12px">ADD CONTENT</span>
        </div>
      </div>
      <div class="px-10px py-5px rounded-20px text-14px bg-vue-green text-white uppercase">
            Preview
      </div>
    </div>
    <div>
      Note
    </div>


  </div>
</template>

<style lang="postcss" scoped>
  input{
    @apply rounded-5px w-full py-10px px-10px bg-vue-white;
  }
  .bg-cover{
    padding-top: 50%;
    width: 100%;
    background: rgba(0,0,0, 0.3);
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
    background-blend-mode: multiply;

  }
 
</style>