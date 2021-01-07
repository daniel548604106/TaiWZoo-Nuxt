export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'TaiWZ002',
    script:[{
      src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places,localContext&v=beta`,
      defer: true
    }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href:'https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' }
    ]
  },
  env: {
    TRANSPORTATION_ID: process.env.TRANSPORTATION_ID,
    TRANSPORTATION_KEY: process.env.TRANSPORTATION_KEY,
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
  },
  

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/global.css',
    'swiper/swiper-bundle.css'

  ],


  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/mapbox.js', ssr: false},
    {src: '~/plugins/v-select.js', ssr: false},
    {src: '~/plugins/v-touch.js', ssr: false},
    { src: "~/plugins/swiper.js", ssr: false },
    { src: '~plugins/v-calendar.js', ssr: false },
    '~/plugins/fontawesome.js',
    '~/plugins/notification.js',
    '~/plugins/localStorage.js',
    '~/plugins/cookie.js',
    { src: '~/plugins/toggleSwitch.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  loading: '~/components/Loading.vue',
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    
  ],
  // proxy: {
  //   '/api':{
  //     target: 'http://localhost:3001',
  //     changeOrigin: true
  //   }
  // },
    
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
