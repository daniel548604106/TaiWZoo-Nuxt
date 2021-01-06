<template>
  <div class="h-50vh">
    <Loading/>
    <h1>hi</h1>
  </div>
</template>

<script>
  import axios from 'axios'
  import Loading from '@/components/Loading.vue'
  export default {
    components:{
      Loading
    },
    data(){
      return{
       
      }
    },
   async mounted(){
      if(navigator.geolocation){
        this.$nuxt.$loading.start()
        navigator.geolocation.getCurrentPosition(success => {
        getPosition(success.coords.latitude,success.coords.longitude)
       }, console.log('no')
       )}else{
        console.log('Your Browser does not support geolocation')
      }
       const getPosition = async (lat,long) =>{
         try{
           const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.GOOGLE_MAPS_API_KEY}`)
          this.$nuxt.$loading.finish()
          console.log('data',res.data.results[0].formatted_address)

         }catch(error){
           console.log(error)
         }
      }
    }
  }
</script>

<style lang="scss" scoped>
