
<script>
  export default {
    props:{
      name:String,
      default: ''
    },
    data(){
      return {
        genders:[{
          type: 'Male'
        },
        {
          type: 'Female'
        },
        {
          type: 'Others'
        },
        ]
      }
    }
  }
</script>
<template>
  <div class="flex items-center flex-col border rounded-10px py-10px">
    notification
  </div>
</template>

<style lang="postcss" scoped>

h1{
  @apply mr-20px w-100px text-right
}

input,textarea,select{
  @apply w-300px border rounded-5px py-5px px-10px
}

div{
  @apply my-5px
}


</style>