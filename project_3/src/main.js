import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide' 
import "@/assets/reset.css"
Vue.use( VueSplide );
Vue.config.productionTip = false


new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
