<template>
  <div class="swiper-container" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner.image" v-for="banner in banners">
        <img  :src="banner.image" />
      </div>
    </div>
    <div class="swiper-pagination">sdsdf</div>
  </div>
</template>
 
<script>
  export default {
    data () {
      return {
        banners: [ {
          image: 'https://images.unsplash.com/photo-1606788074920-48a12f4fd4da?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
        },
         {
          image: 'https://images.unsplash.com/photo-1608910753736-185edb03106f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80'
        } ,{
          image: 'https://images.unsplash.com/photo-1529671434436-8fbb37410056?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80'
        }],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(3, 1000, false)
    }
  }
</script> 

 <style lang="postcss" scoped>

    .swiper-container {
      width: 100%;
      height: 300px;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
    }

    .swiper-pagination{
      width: 100px;
    }
  </style>
  