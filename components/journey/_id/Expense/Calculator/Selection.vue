<script>
  import "vue-select/dist/vue-select.css";
  export default {
    data(){
      return{
      }
    },
    methods:{
     
    }
  }
</script>
<template>
  <div>
    <v-select    transition="all"   class="style-chooser" :options="['Canada', 'United States']"></v-select>
  </div>
</template>


<style lang="postcss" scoped>
    .style-chooser. >> vs__search::placeholder,
  .style-chooser. >> vs__dropdown-toggle,
  .style-chooser >> .vs__dropdown-menu {
    background: #dfe5fb;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .style-chooser >> .vs__clear,
  .style-chooser >> .vs__open-indicator {
    fill: #394066;
  }

  .v-select >> .dropdown-toggle {
   border: none;
}

</style>