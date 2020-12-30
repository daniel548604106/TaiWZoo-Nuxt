<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken: process.env.MAPBOX_TOKEN,
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;
    

    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/light-v10",
      center: [103.811279, 1.345399],
      zoom: 12,
      
    });
  },
}
</script>
<template>
  <div id="map" class="map ">
      <div id="mapContainer" class="basemap"></div>
  </div>
</template>


<style lang="postcss" scoped>
.basemap{
  @apply w-full h-300px
}
</style>