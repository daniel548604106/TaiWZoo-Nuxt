<template>
  <div>
    <div class="hotel-search w-full h-full">
      <div id="findhotels">Find hotels in:</div>
      <div id="locationField">
        <input id="autocomplete" placeholder="Enter a city" type="text" />
      </div>
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        map: null,
        places: null,
        infoWindow: null,
        markers: [],
        autocomplete: null,
        hostnameRegexp : new RegExp("^https?://.+?/"),
        countryRestrict :{ country: "us" }  
      }
    },
    methods: {
      initMap() {
        console.log('init')
        this.map = new google.maps.Map(document.getElementById("map"), {
          zoom: 14,
          center: {lat: 25.0325917,
        lng: 121.5624999},
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false,
        });
        this.infoWindow = new google.maps.InfoWindow({
          content: document.getElementById("info-content"),
        });
        // Create the autocomplete object and associate it with the UI input control.
        // Restrict the search to the default country, and to place type "cities".
        this.autocomplete = new google.maps.places.Autocomplete(
          document.getElementById("autocomplete")
        );
        this.places = new google.maps.places.PlacesService(map);
        this.autocomplete.addListener("place_changed", this.onPlaceChanged);
        // Add a DOM event listener to react when the user selects a country.
      },
      onPlaceChanged() {
        const place = this.autocomplete.getPlace();
        if (place.geometry) {
          this.map.panTo(place.geometry.location);
          this.map.setZoom(15);
          this.search();
        } else {
          document.getElementById("autocomplete").placeholder = "Enter a city";
        }
      },
      search() {
      const search = {
        bounds: this.map.getBounds(),
        types: ["lodging"],
      };
      this.places.nearbySearch(search, (results, status, pagination) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // clearResults();
          // clearMarkers();

          // Create a marker for each hotel found, and
          // assign a letter of the alphabetic to each marker icon.
          for (let i = 0; i < results.length; i++) {
            const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
            const markerIcon = MARKER_PATH + markerLetter + ".png";
            // Use marker animation to drop the icons incrementally on the map.
            this.markers[i] = new google.maps.Marker({
              position: results[i].geometry.location,
              animation: google.maps.Animation.DROP,
              icon: markerIcon,
            });
            // If the user clicks a hotel marker, show the details of that hotel
            // in an info window.
            this.markers[i].placeResult = results[i];
            // google.maps.event.addListener(markers[i], "click", showInfoWindow);
            // setTimeout(dropMarker(i), i * 100);
            // addResult(results[i], i);
        }
      }
    });
    }
    },
    mounted() {
      this.initMap()
    },
  }
</script>

<style lang="postcss" scoped>
  #map {
  padding-top: 100%;
  width: 100%;
  }
  input{
    @apply py-6px px-20px rounded-4px bg-gray-100 w-full text-14px
  }

</style>