import Vue from 'vue'
import App from './App'
import router from './router'
import style from './assets/style.css'
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

Vue.config.productionTip = false
Vue.use(style)
Vue.component('navbar', Navbar)
Vue.component('sociallinks', SocialLinks)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
