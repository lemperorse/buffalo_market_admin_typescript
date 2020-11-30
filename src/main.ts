import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// import VueGeolocation from 'vue-browser-geolocation' 
// Vue.use(VueGeolocation)  
// import * as VueGoogleMaps from 'vue2-google-maps'
 
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyA6tCMNLaeTHyjiwtdPmH1ilJesXelH68U',
//   },
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
