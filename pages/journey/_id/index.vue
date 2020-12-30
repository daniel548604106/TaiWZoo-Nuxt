<template>
  <div>
    <MyJourney :journeyInfo="journeyInfo"/>
  </div>
</template>

<script>
  import MyJourney from '@/components/journey/MyJourney/index.vue'
  export default {
    components:{
      MyJourney
    },
    data(){
      return{
        journeyInfo:
          {
            name: 'Paris La vie',
            image: require('~/assets/images/paris.png'),
            startingDate: '2020/12/18',
            endingDate: '2020/18/23',
            participants:[
              {
                id: 1,
                name: '',
                avatar: require('~/assets/images/avatar.png')
              },
              {
                id: 2,
                name: '',
                avatar: require('~/assets/images/avatar.png')
              },
              {
                id: 3,
                name: '',
                avatar: require('~/assets/images/avatar.png')
              },
              {
                id:4,
                name: '',
                avatar: require('~/assets/images/avatar.png')
              },
            ]
          }
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>