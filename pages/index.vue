<script>
  import {apiGetTransportData} from '@/api'
export default {
  data() {
    return {
      data: '',
      data2: {}
    }
  },
  async fetch(){
   
  },
   async mounted() {
    const data =  await apiGetTransportData('Hsinchu')
    console.log(data)
   console.log('id',process.env.TRANSPORTATION_ID)
  },
}
</script>
<template>
  <div class="container">
    <div>
      <div>
        {{data2}}
      </div>
      
      <h1 class="title text-26px text-vue-main">TaiWZoo</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
