<template>
  <div>
    <div id="map" >
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Loading from '@/components/Loading.vue'
  export default {
    props:{
      searchLat:{
        type: Number,
        default: 0
      },
      searchLng:{
        type: Number,
        default: 0
      }
    },
    components:{
      Loading
    },
    data(){
      return{
        map: null,
      // 預設經緯度在信義區附近
        lat: 25.0325917,
        lng: 121.5624999,
        marker: null,
        bigBounds : {
        north: 100.432,
         south: 300.412,
        west: -122.094,
        east: -122.074,
        }
    };
    },
    watch:{
      searchLat(newVal){
        console.log(newVal)
        this.lat = newVal
        this.initMap()
        this.setMarker()
      },
      searchLng(newVal){
        this.lng = newVal
        this.initMap()
        this.setMarker()

      },
    },
    methods:{
      initMap(){
      //   this.map = new google.maps.Map(document.getElementById("map"), {
      //   // 設定地圖的中心點經緯度位置
      //   center: new google.maps.LatLng(this.lat, this.lng),
      //   // 設定地圖縮放比例 0-20
      //   zoom: 15,
      //   // 限制使用者能縮放地圖的最大比例
      //   maxZoom: 20,
      //   // 限制使用者能縮放地圖的最小比例
      //   minZoom: 3,
      //   streetViewControl: false,
      //   mapTypeControl: false,
      //   gestureHandling: "greedy"
      // }) 

      const localContextMapView = new google.maps.localContext.LocalContextMapView({
      element: document.getElementById("map"),
      placeTypePreferences: ["restaurant", "tourist_attraction"],
      maxPlaceCount: 20,
      }); 
      this.map = localContextMapView.map;
      this.map.setOptions({
      center: { lat: this.lat, lng: this.lng },
      zoom: 14,
      streetViewControl: false,
      mapTypeControl: false,
      gestureHandling: "greedy",
      locationRestriction: this.bigBounds,

    });
      const transitLayer = new google.maps.TransitLayer();
      transitLayer.setMap(this.map);
    },
    setMarker(){
       let marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng},
        map: this.map,
        icon: 'https://ik.imagekit.io/4liibdxmxfn/logo_eWtKkm7_6opg.svg',
        title: "Hello World!",
      });

      const infoLayout = `
          <div id="content">
            <p id="firstHeading" class="firstHeading">好食餐廳</p>
            <p id="firstHeading" class="firstHeading">Check</p>
            <img src="https://ik.imagekit.io/4liibdxmxfn/logo_eWtKkm7_6opg.svg" style="width:50px;height:50px"/> 
          </div>
        `
       // 透過 InfoWindow 物件建構子建立新訊息視窗
      const infowindow = new google.maps.InfoWindow({
        // 設定想要顯示的內容
        content: infoLayout
      });
      // 在地標上監聽點擊事件
      marker.addListener("click", () => {
        // 指定在哪個地圖和地標上開啟訊息視窗
        infowindow.open(this.map, marker);
      });

    }
    
  
  },
   async mounted(){
      
      if(navigator.geolocation){
        this.$nuxt.$loading.start()
        navigator.geolocation.getCurrentPosition(success => {
         setCurrentPosition( success.coords.latitude, success.coords.longitude)
        this.initMap();
        this.setMarker()
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

      const setCurrentPosition = (lat, lng) =>{
      this.lat = lat
      this.lng = lng
      console.log('set')
    }
    }
  }
</script>

<style lang="postcss" scoped>
#map{
  width: 100%;
  padding-top: 500px;
}
.rrWAxN-local-context-vertical-map-layout-view{
  position: absolute;
}

.DNXrqb-local-context-map-layout-view .yivLHO-local-context-map-layout-view--map-container{
  display: none !important;
}
</style>
