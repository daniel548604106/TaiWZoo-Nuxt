
<script>
  export default {
    data(){
      return{
        selectedDate: {
           start: null, // From the beginning of time
          end: new Date() // Until today
        },
         attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: 'yellow',
            start: { fillMode: 'outline', color:'yellow' },
            base: { fillMode: 'light',color:'yellow' },
            end: { fillMode: 'outline', color:'yellow' },
          },
          dates: new Date(),
          color: 'yellow',
          container: false
          
          
        },
      ],
      }
    }
  }
</script>
<template>
  <div class="w-full px-15px">
    <div class="mx-auto flex items-center justify-center">
      <no-ssr>
        <v-date-picker
          :columns="$screens({ default: 1, lg: 2 })"
          is-expanded
          :attributes="attrs"
          value="range" 
          is-range
          color="yellow"
          v-model="selectedDate"
          :min-date="new Date()"
          show-caps
        />
      </no-ssr>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>