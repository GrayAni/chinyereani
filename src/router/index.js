import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ThreeLanding from '@/components/ThreeLanding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'ThreeLanding',
      component: ThreeLanding
    }
  ]
})
