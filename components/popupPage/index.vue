<template>
  <div class="w-100vw h-100vh bg-white">
    <Header/>
    <News v-if="activePage === 'news' "/>
    <Transportation v-if="activePage === 'transportation' "/>
    <Movies v-if="activePage === 'movies' "/>
    <Travel v-if="activePage === 'travel' "/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Header from '@/components/popupPage/Header.vue'
  import Transportation from '@/components/popupPage/Transportation/index.vue'
  import News from '@/components/popupPage/News/index.vue'
  import Movies from '@/components/popupPage/Movies/index.vue'
  import Travel from '@/components/popupPage/Travel/index.vue'
  export default {
      components:{
        Header,
        News,
        Transportation,
        Movies,
        Travel
      },
      computed:{
        ...mapGetters(['pageShow','activePage']),
      }
  }
</script>

<style lang="scss" scoped>

</style>